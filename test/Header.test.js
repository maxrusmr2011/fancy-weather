import Header from '../src/js/Header';

describe('start', () => {
  test('1', () => {
    document.body.innerHTML = '<div class="header"><div class="wrapper"></div></div>';
    const header = new Header();
    expect(header).toBeDefined();
    // header.init();
  });
});
 