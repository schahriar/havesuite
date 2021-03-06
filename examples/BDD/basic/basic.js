const basicPage = require('./page/basicPage');

describe("Basic Test Suite", function () {
  this.timeout(30000);
  before(sync(function () {
    client.loadPage(basicPage);
  }));
  it("should include google in the page title", sync(function () {
    client.page.title().should.include("Google");
  }));
  it("should log all link texts from page", sync(function () {
    let texts = client.page.find('._Gs').map((el) => el.text());
    texts.should.include('Privacy');
    texts.should.not.include('someUnknownElementToHaveSuite');
  }));
  it("should fill searchbox", sync(function () {
    client.page.find('#lst-ib').type('behave');
    client.page.find('#lst-ib')[0].getValue().should.equal('behave');
  }));
});