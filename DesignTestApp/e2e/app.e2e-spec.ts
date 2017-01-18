import { DotNetMeetupPage } from './app.po';

describe('dot-net-meetup App', function() {
  let page: DotNetMeetupPage;

  beforeEach(() => {
    page = new DotNetMeetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
