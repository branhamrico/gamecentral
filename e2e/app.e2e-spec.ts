import { GameCentralPage } from './app.po';

describe('game-central App', () => {
  let page: GameCentralPage;

  beforeEach(() => {
    page = new GameCentralPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
