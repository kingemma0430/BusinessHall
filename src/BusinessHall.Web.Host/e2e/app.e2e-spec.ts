import { BusinessHallTemplatePage } from './app.po';

describe('BusinessHall App', function() {
  let page: BusinessHallTemplatePage;

  beforeEach(() => {
    page = new BusinessHallTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
