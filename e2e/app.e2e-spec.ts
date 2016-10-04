import { JuliaEnxovaisFrontendPage } from './app.po';

describe('julia-enxovais-frontend App', function() {
  let page: JuliaEnxovaisFrontendPage;

  beforeEach(() => {
    page = new JuliaEnxovaisFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
