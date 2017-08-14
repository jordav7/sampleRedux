import { ReduxNgPage } from './app.po';

describe('redux-ng App', () => {
  let page: ReduxNgPage;

  beforeEach(() => {
    page = new ReduxNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
