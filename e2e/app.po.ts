export class Angularattack2016MypathPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angularattack2016-mypath-app h1')).getText();
  }
}
