import Header from './Header';
import MainPage from './MainPage';

export default class App {
  constructor() {
    this.header = new Header();
    this.mainPage = new MainPage();
  }

  init() {
    this.header.init();
    this.mainPage.init();
    this.header.currentCoord();
    this.header.searchInput.focus();
  }
}
