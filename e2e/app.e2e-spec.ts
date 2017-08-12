import { PagePage } from './app.po';

describe('page App', () => {
  let page: PagePage;

  beforeEach(() => {
    page = new PagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
