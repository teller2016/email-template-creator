// puppeteer을 가져온다.
import puppeteer from 'puppeteer';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

(async () => {
  // 브라우저를 실행한다.
  // 옵션으로 headless모드를 끌 수 있다.
  const browser = await puppeteer.launch({
    headless: true,
  });

  // 새로운 페이지를 연다.
  const page = await browser.newPage();
  // 페이지의 크기를 설정한다.
  await page.setViewport({
    width: 1366,
    height: 1080,
  });
  await page.goto('http://localhost:5173/');

  setTimeout(() => {
    (async () => {
      // 페이지의 HTML을 가져온다.
      const content = await page.content();
      // $에 cheerio를 로드한다.
      const $ = cheerio.load(content);
      // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
      const $template = $('.template');

      // 모든 리스트를 순환한다.
      $template.each(async (index, list) => {
        const templateHtml = $(list).parent().html();
        const filename = $(list).attr('filename');
        const filePath = path.join(process.cwd(), 'emailCompiled', `${filename}.html`); // 디렉토리 및 파일 이름 지정
        await fs.writeFileSync(filePath, templateHtml);
      });
      // 브라우저를 종료한다.
      browser.close();
    })();
  }, 1000);
})();
