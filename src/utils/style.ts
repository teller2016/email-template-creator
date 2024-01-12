import parse from 'style-to-object';

const decodeCssFile = (cssFile: string) => {
  const styleVariableMatch = cssFile.match(/__vite__css\s*=\s*"([^"]*)"/);
  const styleVariable = styleVariableMatch ? styleVariableMatch[0] : '';
  const styleMatch = styleVariable.match(/"([^"]*)"/);
  const style = styleMatch ? styleMatch[0].replace(/\\r\\n/g, '') : '';
  return style;
};

const getStyleObject = (cssString: string) => {
  const regex = /\.([^{]+)\{([^}]+)\}/g;
  let match;
  const cssObject: Record<string, ReturnType<typeof parse>> = {};

  while ((match = regex.exec(cssString)) !== null) {
    // 선택자 이름과 스타일을 객체에 저장
    cssObject[match[1].trim()] = parse(match[2].trim().replace(/;  /g, '; '));
  }

  return cssObject;
};

const getVariableObject = (cssString: string) => {
  // 스타일 문자열을 세미콜론(;)을 기준으로 분리한 후, 각 선언을 분석하여 변수 이름과 값으로 나눔
  const variableObject = cssString.split(';').reduce((acc: Record<string, string>, decl) => {
    const [key, value] = decl.split(':').map((s) => s.trim());

    // 변수 이름이 '--'로 시작하는 경우에만 저장 e.g) --red: #ff2d21;
    if (key.startsWith('--')) {
      acc[key] = value;
    }

    return acc;
  }, {});

  return variableObject;
};

export default async function getStyleFromFile(cssFileName: string) {
  try {
    const response = await fetch(`../src/styles/${cssFileName}`);
    const cssFile = await response.text();
    let style = decodeCssFile(cssFile); // decodeCssFile 함수가 존재한다고 가정함

    const variableResponse = await fetch('../src/styles/variable.css');
    const variableCssFile = await variableResponse.text();
    const variableStyle = decodeCssFile(variableCssFile);
    const variableObject = getVariableObject(variableStyle);

    for (const [varName, varValue] of Object.entries(variableObject)) {
      const regex = new RegExp(`var\\(${varName}\\)`, 'g');
      style = style.replace(regex, varValue);
    }

    const styleObject = getStyleObject(style); // getStyleObject 함수가 존재한다고 가정함

    return styleObject;
  } catch (error) {
    console.error('CSS 파일을 불러오는데 문제가 발생했습니다.', error);
    return {};
  }
}
