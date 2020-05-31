import Weather from './Weather';
import MapLocate from './MapLocate';
import Elem from './utils/Elem';

export default class MainPage {
  constructor() {
    this.weather = new Weather();
    this.mapLocate = new MapLocate();
  }

  init() {
    this.render();
    this.weather.init();
    this.mapLocate.init();
  }

  render() {
    Elem('div', 'main__container').parent('.main .wrapper');
  }
}
