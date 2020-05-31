import Elem from './utils/Elem';
import getWeather from './api/getWeather';
import weatherIcons from './weatherIcons';
import errorOutput from './errorsOutput';
import { mainLang } from './constants';
import getTranslate from './api/getTranslate';


export default class Weather {
  constructor() {
    this.currentDate = new Date();
  }

  init() {
    this.render();
    this.error = errorOutput('.header__error');
  }

  render() {
    const city = Elem('div', 'weather__city');

    const todayWeek = Elem('span', 'today-week').attr([['i18n', 'weekday']]);
    const todayDay = Elem('span', 'today-day');
    const todayMinth = Elem('span', 'today-month').attr([['i18n', 'month']]);
    const todayTime = Elem('span', 'today-time');

    const dateToday = Elem('div', 'weather__today-date', [
      todayWeek,
      todayDay,
      todayMinth,
      todayTime,
    ]);
    const top = Elem('div', 'weather__top', [city, dateToday]);
    const tempToday = Elem('div', 'weather__today-temp');
    const imgToday = Elem('img').prop([['alt', 'icon']]);
    const iconToday = Elem('div', 'weather__today-icon', imgToday);


    const descr = Elem('div', 'today__descr');
    const listAbout = ['feel', 'wind', 'humid'].map((item) => {
      const text = Elem('span', 'today__text').attr([['i18n', item]]);
      const value = Elem('span', 'today__value');
      const list = [text, value];
      if (item === 'wind') {
        list.push(Elem('span').attr([['i18n', 'speed']]));
      }
      return Elem('div', `today__${item}`, list);
    });
    const weatherToday = Elem('div', 'weather__today-about', [descr, ...listAbout]);
    const today = Elem('div', 'weather__today', [tempToday, iconToday, weatherToday]);
    
    const list = [0, 1, 2].map(() => {
      const weekday = Elem('div', 'weather__weekday').attr([['i18n', 'weekday']]);
      const temp = Elem('div', 'weather__temp');
      const img = Elem('img').prop([['alt', 'icon']]);
      const icon = Elem('div', 'weather__icon', img);
      const bodyDay = Elem('div', 'weather__day-body', [temp, icon]);
      return Elem('div', 'weather__day', [weekday, bodyDay]);
    });
    const next = Elem('div', 'weather__next', list);

    Elem('div', 'weather', [top, today, next]).parent('.main__container');
  }

  // getDataWeather(query = { q: 'Kharkiv' }, city) {
  getDataWeather() {
    const loc = window.app.header.location;
    const optionData = { lat: loc[1], lon: loc[0] };
    // optionData.lang = window.app.header.save.lang;
    // optionData.lang = 'en';
    optionData.lang = mainLang;
    optionData.units = 'metric';

    getWeather(optionData)
      .then((res) => {
        // console.log('yes w', res);
        this.dataWeather = res;
        window.app.mainPage.mapLocate.renderMap();
        this.renderWeather();
        window.app.header.renderLang();
      })
      .catch((err) => {
        this.error('weather', err);
        console.log('no w', err);
      });
  }

  iconSrc(id, isUseTime) {
    let icon = weatherIcons.find((item) => id <= item.from);
    // console.log('obj',icon);
    
    if (icon) {
      const hours = (new Date()).getHours();
      if (!isUseTime || hours >= 6 && hours < 18) {
        icon = icon.src_day;
      } else {
        icon = icon.src_night;
      }
    } else {
      icon = './src/assets/img/weather/few-clouds.svg';
    }
    // console.log('icon=',icon);
    
    return icon;
  }

  renderTemp() {
    Elem('.weather__today-temp', false, Weather.deg(this.dataWeather.list[0].main.temp));
    Elem('.today__feel .today__value', false, `: ${Weather.deg(this.dataWeather.list[0].main.feels_like)}`);

    document.querySelectorAll('.weather__day')
      .forEach((item, i) => {
        const day = new Date();
        day.setDate((new Date()).getDate() + i + 1);
        const objDay = this.dataWeather.list
          .find((one) => one.dt_txt === Weather.formSearchDate(day));
        const tempDay = item.querySelector('.weather__temp');
        tempDay.textContent = Weather.deg(objDay.main.temp);
      });
  }

  timerTic() {
    const optionTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    Elem('.today-time', false, this.currentDate.toLocaleString('ru', optionTime));
    this.currentDate.setSeconds(this.currentDate.getSeconds() + 1);
    if (!this.currentDate.getMinutes() && !this.currentDate.getSeconds()) {
      this.renderWeather();
    }
  }

  renderDescr() {
    const element = document.querySelector('.today__descr');
    const text = this.dataWeather.list[0].weather[0].description;
    if (window.app.header.save.lang === mainLang) {
      element.textContent = text;
    } else {
      getTranslate(text)
        .then((data) => {
          [element.textContent] = data.text;
        })
        .catch((err) => {
          this.error('translate', err);
          element.textContent = text;
        });
    }
  }

  renderWeather() {
    // Elem('.today__descr', false, this.dataWeather.list[0].weather[0].description);
    this.renderDescr();

    Elem('.weather__city', false, this.city);
    this.timerTic();
    Elem('.weather__today-icon img', 'imgs')
      .prop([['src', this.iconSrc(this.dataWeather.list[0].weather[0].id, true)]]);
    Elem('.today__wind .today__value', false, `: ${this.dataWeather.list[0].wind.speed}`);
    Elem('.today__humid .today__value', false, `: ${this.dataWeather.list[0].main.humidity}%`);

    document.querySelectorAll('.weather__day')
      .forEach((item, i) => {
        const day = new Date(this.currentDate.getTime());
        day.setDate(day.getDate() + i + 1);
        const objDay = this.dataWeather.list
          .find((one) => one.dt_txt === Weather.formSearchDate(day));
        const iconElement = item.querySelector('.weather__icon img');
        iconElement.src = this.iconSrc(objDay.weather[0].id);
        const week = item.querySelector('.weather__weekday');
        week.dataset.index = day.getDay();
        week.dataset.index1 = 0;
      });
    this.renderTemp();
    this.renderDate();
    if (this.stopTimer) {
      clearTimeout(this.stopTimer);
    }
    this.stopTimer = setInterval(() => {
      this.timerTic();
    }, 1000);
  }

  static formSearchDate(dateIn) {
    let month = dateIn.getMonth() + 1;
    month = month > 9 ? month : `0${month}`;
    let dayDate = dateIn.getDate();
    dayDate = dayDate > 9 ? dayDate : `0${dayDate}`;
    return `${dateIn.getFullYear()}-${month}-${dayDate} 12:00:00`;
  }

  renderDate() {
    Elem('.today-week').attr([['data-index', this.currentDate.getDay()], ['data-index1', '1']]);
    Elem('.today-day', false, String(this.currentDate.getDate()));
    Elem('.today-month').attr([['data-index', this.currentDate.getMonth()]]);
  }

  static deg(degInt) {
    const temp = Math.floor(window.app.header.save.cel ? degInt : degInt * 1.8 + 32);
    return `${temp}°${window.app.header.save.cel ? '' : 'F'}`;
  }
}
