import Elem from './utils/Elem';
import getPhoto from './api/getPhoto';
import errorOutput from './errorsOutput';

export default class Header {
  constructor() {
    this.patchPhoto = new Image();
    this.patchPhoto.src = './src/assets/img/patchPhoto.jpg';
    this.lang = 'en';
    this.cel = true;
  }

  init() {
    this.render();
    this.error = errorOutput('.header__error');
    // this.refreshPhoto();
  }

  render() {
    this.bodyImage = Elem('img', 'body__image').prop([['alt', 'image']]).native;
    document.body.prepend(this.bodyImage);
    const icoRefresh = Elem('img').prop([['src', './src/assets/img/refresh.png'], ['alt', 'refresh']])
    const btnRefresh = Elem('button', 'btn btn-refresh', icoRefresh).on('click', () => {
      this.refreshPhoto();
    });

    const btnLang = Elem('button', 'btn btn-lang', 'En');
    const list = ['en', 'ru', 'be'].map((item) => {
      return Elem('a', 'dropdown__item', item).attr([['href', '#']]);
    });
    const menu = Elem('div', 'dropdown__menu', list);
    const dropdoown = Elem('div', 'dropdown', [btnLang, menu]);

    const btnCel = Elem('button', 'btn btn-cel btn-active', '°C');
    const btnFar = Elem('button', 'btn btn-far', '°F');

    const buttons = Elem('div', 'header__buttons', [btnRefresh, dropdoown, btnCel, btnFar]);

    const searchInput = Elem('input', 'header__input');
    const icoMic = Elem('img').prop([['src', './src/assets/img/microphone.png'], ['alt', 'mic']])
    const btnMic = Elem('button', 'btn btn-mic', icoMic);
    const btnSearch = Elem('button', 'btn btn-search', 'Search');
    
    const search = Elem('div', 'header__search', [searchInput, btnMic, btnSearch]);
    const placeErrors = Elem('div', 'header__error');
    Elem('div', 'header__container', [buttons, search, placeErrors]).parent('.header .wrapper');
  }

  refreshPhoto() {
    // getPhoto('wdagrbrhcywgfhfhw')
    getPhoto('weather')
      .then((blob) =>{
        console.log('yes3', blob);
        this.bodyImage.src = URL.createObjectURL(blob);
      })
      .catch((err) => {
        console.log('no3', err);
        this.error('find photo', err);
        this.bodyImage.src = this.patchPhoto.src;
      });
  }
}
