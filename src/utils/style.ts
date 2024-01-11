import parse from 'style-to-object';

const decodeCssFile = (cssFile: string) => {
  const styleVariableMatch = cssFile.match(/const\s+__vite__css\s*=\s*"([^"]*)"/);
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

export default async function getStyleFromFile(cssFileName: string) {
  try {
    const response = await fetch(`../src/styles/${cssFileName}`);
    const cssFile = await response.text();
    const style = decodeCssFile(cssFile); // decodeCssFile 함수가 존재한다고 가정함
    const styleObject = getStyleObject(style); // getStyleObject 함수가 존재한다고 가정함

    return styleObject;
  } catch (error) {
    console.error('CSS 파일을 불러오는데 문제가 발생했습니다.', error);
    return {};
  }
}
