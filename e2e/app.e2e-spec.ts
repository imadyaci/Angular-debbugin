import { DebbugingPage } from './app.po';

describe('debbuging App', function() {
  let page: DebbugingPage;

  beforeEach(() => {
    page = new DebbugingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
