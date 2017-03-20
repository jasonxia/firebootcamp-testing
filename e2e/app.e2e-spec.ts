import { FirebootcampTestingPage } from './app.po';

describe('firebootcamp-testing App', () => {
  let page: FirebootcampTestingPage;

  beforeEach(() => {
    page = new FirebootcampTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
