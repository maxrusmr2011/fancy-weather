import Header from './Header';

export default class App {
  constructor() {
    this.header = new Header();
  }

  init() {
    this.header.init();
    
  }
}
