import { Angularattack2016MypathPage } from './app.po';

describe('angularattack2016-mypath App', function() {
  let page: Angularattack2016MypathPage;

  beforeEach(() => {
    page = new Angularattack2016MypathPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angularattack2016-mypath works!');
  });
});
