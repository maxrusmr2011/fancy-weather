import { Elem, blurFunc } from './utils/index';
import dropdown from './dropdown';
import getPhoto from './api/getPhoto';
import errorOutput from './errorsOutput';
import { images, mainLang } from './constants';
import * as langs from './langs/index';
import getLocation from './api/getLocation';
import getGeocoder from './api/getGeocoder';

export default class Header {
  constructor() {
    this.patchPhoto = new Image();
    this.patchPhoto.src = images.patch;
    this.save = { lang: mainLang, cel: true, volume: 1 };
    this.speaking = false;
    this.Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.speaker = speechSynthesis;
    this.voiceList = this.speaker.getVoices();
    this.spText = new SpeechSynthesisUtterance();
    this.spText.volume = 1;
  }

  init() {
    this.saveStorage(true);
    this.render();
    this.renderCel();
    this.error = errorOutput('.header__error');
  }

  saveStorage(restore) {
    if (restore) {
      if (localStorage.getItem('save')) {
        this.save = JSON.parse(localStorage.getItem('save'));
      }
    } else {
      localStorage.setItem('save', JSON.stringify(this.save));
    }
  }

  render() {
    this.bodyImage = Elem('img', 'body__image').prop([['alt', 'image']]).native;
    document.body.prepend(this.bodyImage);

    const iconRefresh = Elem('img')
      .prop([['src', images.refresh], ['alt', 'refresh']]);
    const btnRefresh = Elem('button', 'btn btn-refresh', iconRefresh)
      .on('click', () => this.refreshPhoto());
    const dropdownMenu = dropdown(Object.keys(langs), this.changeLang.bind(this));
    const btnCel = Elem('button', 'btn btn-temp', '°F')
      .on('click', () => this.changeCel(false));
    const btnFar = Elem('button', 'btn btn-temp', '°C')
      .on('click', () => this.changeCel(true));
    const iconSpeak = Elem('img')
      .prop([['src', images.speak], ['alt', 'sound']]);

    let clickTimeout;
    const btnSpeak = Elem('button', 'btn btn-speak', iconSpeak)
      .on('click', () => {
        if (!clickTimeout) {
          clickTimeout = setTimeout(() => {
            this.speakWeather();
            clickTimeout = null;
          }, 500);
        }
      })
      .on('dblclick', () => {
        clearTimeout(clickTimeout);
        clickTimeout = null;
        this.changeSetupSpeak();
      });

    const buttons = Elem('div', 'header__buttons', [
      btnRefresh,
      dropdownMenu,
      Elem('div', false, [btnCel, btnFar]),
      btnSpeak,
    ]);

    this.searchInput = Elem('input', 'header__input')
      .attr([['i18n', 'input']])
      .on('keydown', (event) => {
        if (event.code === 'Enter') {
          this.getInput();
        }
      }).native;

    const btnClear = Elem('button', 'btn-clear', '✖')
      .on('click', () => {
        this.searchInput.value = '';
        this.searchInput.focus();
      });

    let btnMic;
    if (this.Recognition) {
      const icoMic = Elem('img').prop([
        ['src', images.mic],
        ['alt', 'mic'],
      ]);
      const help = Elem('div', 'header__help', 'i')
        .on('click', (event) => {
          event.stopPropagation();
          this.showHelp();
        });
      btnMic = Elem('button', 'btn-mic', [icoMic, help])
        .on('click', () => this.speak());
    } else {
      btnMic = Elem('div');
    }

    const btnSearch = Elem('button', 'btn btn-search')
      .on('click', () => this.getInput())
      .attr([['i18n', 'search']]);

    const search = Elem('div', 'header__search', [
      this.searchInput,
      btnClear,
      btnMic,
      btnSearch,
    ]);

    const placeErrors = Elem('div', 'header__error');
    Elem('div', 'header__container', [buttons, search, placeErrors])
      .parent('.header .wrapper');
  }

  showHelp() {
    const list = Object.keys(langs[this.save.lang].command)
      .map((command) => {
        const type = Elem('div', 'help__cmd', command);
        const value = Elem('div', 'help__word', `"${langs[this.save.lang].command[command]}"`);
        return Elem('div', 'help__line', [type, value]);
      });

    const title = Elem('div', 'help__title', 'Commands');

    let mainElement;
    const clear = Elem('button', 'help__clear', '✖')
      .on('click', () => {
        mainElement.remove();
        document.onclick = null;
      });

    const window = Elem('div', 'help', [clear, title, ...list]);

    mainElement = Elem('div', 'background', window).parent('.header__container').native;
    blurFunc('.help', () => {
      mainElement.remove();
    });
  }

  getInput() {
    if (this.searchInput.value) {
      this.geoQuery = this.searchInput.value;
      this.searching();
    }
  }

  changeSetupSpeak(arg = { timer: null }) {
    const stop = arg;
    let mainElement;

    const volumeText = Elem('div', 'setup__volume-text', `Volume: <span>${this.save.volume * 100}</span>%`);

    const volume = Elem('input', 'setup__volume')
      .attr([
        ['type', 'range'],
        ['min', '0'],
        ['max', '1'],
        ['step', '0.1'],
      ])
      .prop([['value', this.save.volume]])
      .on('input', (event) => {
        Elem('.setup__volume-text span', false, String(event.currentTarget.value * 100));
        if (stop.timer) {
          clearTimeout(stop.timer);
          stop.timer = null;
        }
      })
      .on('change', (event) => {
        this.save.volume = event.currentTarget.value;
        this.saveStorage();
        stop.timer = setTimeout(() => {
          mainElement.remove();
          document.onclick = null;
        }, 3000);
      });

    mainElement = Elem('div', 'setup', [volumeText, volume])
      .parent('.header__container').native;

    blurFunc('.setup', (elm) => { elm.remove(); });
    return mainElement;
  }

  searching(isCityOnly) {
    this.refreshPhoto();

    getGeocoder({ q: this.geoQuery, language: this.save.lang })
      .then((res) => {
        window.app.mainPage.weather.city = res.results[0].formatted;
        if (!isCityOnly) {
          Header.cityDate(res.results[0].annotations.timezone.offset_sec / 3600);
          this.location = [res.results[0].geometry.lng, res.results[0].geometry.lat];
          window.app.mainPage.weather.getDataWeather();
        } else {
          Elem('.weather__city', false, window.app.mainPage.weather.city);
        }
      })
      .catch((err) => {
        this.error('geocode', err);
      });
  }

  static cityDate(offsetCity) {
    const now = new Date();
    const offsetHere = now.getTimezoneOffset() / 60;

    now.setHours(now.getHours() + offsetHere + offsetCity);
    window.app.mainPage.weather.currentDate = now;
  }

  speak(startEnd) {
    if (startEnd === undefined) {
      this.speaking = !this.speaking;
    } else {
      this.speaking = startEnd;
    }

    Elem('.btn-mic').cls(`${this.speaking ? '.' : '_'}btn-mic-active`);

    if (this.speaking) {
      this.record = this.getSpeechWord();
      this.record.start();
    } else if (this.record) {
      this.record.stop();
      this.record = null;
    }
  }

  getSpeechWord() {
    const rec = new (this.Recognition)();

    rec.lang = this.save.lang;
    rec.interimResults = false;
    rec.continuous = true;
    rec.onresult = (e) => {
      this.speakResult = e.results[e.results.length - 1][0].transcript.trim();
      this.sayCommand();
    };

    rec.onerror = () => {
      this.error('speaking', Error('error1'));
    };
    rec.onend = () => {
      this.speak(false);
    };
    return rec;
  }

  sayCommand() {
    const cmd = langs[this.save.lang].command;
    const stop = {};
    let element;

    switch (this.speakResult.toLowerCase()) {
      case cmd.louder:
        this.save.volume = this.save.volume < 1 ? (this.save.volume * 10 + 1) / 10 : 1;
        this.saveStorage();
        element = this.changeSetupSpeak(stop);
        stop.timer = Header.hideTimer(element);
        break;
      case cmd.quieter:
        this.save.volume = this.save.volume > 0 ? (this.save.volume * 10 - 1) / 10 : 0;
        this.saveStorage();
        element = this.changeSetupSpeak(stop);
        stop.timer = Header.hideTimer(element);
        break;
      case cmd.weather:
        this.speakWeather();
        break;
      case cmd.photo:
        this.refreshPhoto();
        break;
      case cmd.temperature:
        this.changeCel(!this.save.cel);
        break;
      case cmd.language:
        {
          const listLangs = Object.keys(langs);
          const numLang = (listLangs.indexOf(this.save.lang) + 1) % listLangs.length;

          Elem('.btn-lang', false, listLangs[numLang]);
          this.changeLang(listLangs[numLang]);
          document.querySelectorAll('.dropdown__item').forEach((item, i) => {
            Elem(item).cls(`${i === numLang ? '.' : '_'}dropdown__item-active`);
          });
        }
        break;
      default:
        this.searchInput.value = this.speakResult;
        this.geoQuery = this.speakResult;
        this.searching();
    }
  }

  static hideTimer(element) {
    return setTimeout(() => {
      element.remove();
      document.onclick = null;
    }, 3000);
  }

  speakWeather() {
    let words = langs[this.save.lang].command.temperature;

    words += ` ${Elem('.weather__today-temp').native.textContent}`;
    words += ` ${Elem('.today__feel .today__text').native.textContent}`;
    words += Elem('.today__feel .today__value').native.textContent;
    words += `, ${Elem('.today__descr').native.textContent},`;
    words += ` ${Elem('.today__wind .today__text').native.textContent}`;
    words += Elem('.today__wind .today__value').native.textContent;
    words += `${Elem('.today__wind span[i18n=speed]').native.textContent}`;
    words += `, ${Elem('.today__humid .today__text').native.textContent}`;
    words += Elem('.today__humid .today__value').native.textContent;
    this.voice(words);
  }

  voice(text) {
    if (this.speechRec) {
      this.speak(false);
    }
    this.voiceList = this.speaker.getVoices();

    let voiceLang = this.voiceList
      .find((item) => item.lang.slice(0, 2) === this.save.lang);

    if (!voiceLang) {
      voiceLang = this.voiceList
        .find((item) => item.lang.slice(0, 2) === 'ru');
    }

    this.spText.voice = voiceLang;
    this.spText.text = text;
    this.spText.volume = this.save.volume;
    this.speaker.speak(this.spText);
  }

  refreshPhoto() {
    const date = window.app.mainPage.weather.currentDate || new Date();
    const month = date.getMonth();
    let add = '';
    if (month >= 2 && month < 5) {
      add += '+spring';
    } else if (month >= 5 && month < 8) {
      add += '+summer';
    } else if (month >= 8 && month < 11) {
      add += '+autumn';
    } else {
      add += '+winter';
    }

    const hour = date.getHours();
    if (hour >= 6 && month < 12) {
      add += '+morning';
    } else if (month >= 12 && month < 16) {
      add += '+afternoon';
    } else if (month >= 16 && month < 22) {
      add += '+evening';
    } else {
      add += '+night';
    }

    getPhoto(`weather${add}`)
      .then((blob) => {
        this.bodyImage.src = URL.createObjectURL(blob);
      })
      .catch((err) => {
        this.error('find photo', err);
        this.bodyImage.src = this.patchPhoto.src;
      });
  }

  changeLang(newLang) {
    if (this.save.lang !== newLang) {
      this.save.lang = newLang;
      this.saveStorage();
      this.renderLang();
      this.searching(true);
      window.app.mainPage.weather.renderDescr();
      if (this.record) {
        const TIMER = 1000;
        this.speak(false);
        setTimeout(() => this.speak(true), TIMER);
      }
    }
  }

  renderLang() {
    document.querySelectorAll('[i18n]').forEach((item) => {
      const element = item;
      const value = langs[this.save.lang][element.getAttribute('i18n')];

      if (value) {
        if (typeof value === 'string') {
          element.textContent = value;
        } else if (Array.isArray(value)) {
          if (element.dataset.index + 1) {
            if (element.dataset.index1 + 1) {
              element.textContent = value[element.dataset.index][element.dataset.index1];
            } else {
              element.textContent = value[element.dataset.index];
            }
          }
        } else {
          Object.keys(value).forEach((prop) => {
            element[prop] = value[prop];
          });
        }
      }
    });
  }

  changeCel(isCel) {
    if (this.save.cel !== isCel) {
      this.save.cel = isCel;
      this.refreshPhoto();
      this.renderCel();
      this.saveStorage();
      window.app.mainPage.weather.renderTemp();
    }
  }

  renderCel() {
    document.querySelectorAll('.btn-temp').forEach((item, i) => {
      if (!!i === this.save.cel) {
        Elem(item).cls('.btn-temp-active');
      } else {
        Elem(item).cls('_btn-temp-active');
      }
    });
  }

  currentCoord() {
    getLocation()
      .then((res) => {
        this.location = res.loc.split(',').map((item) => parseFloat(item)).reverse();
        this.showCurrent();
      })
      .catch((err) => {
        this.error('current location', err);
        navigator.geolocation.getCurrentPosition(
          (res) => {
            this.location = [res.coords.longitude, res.coords.latitude];
            this.showCurrent();
          },
          () => this.error('getCurrentPosition', Error('error position')),
        );
      });
  }

  showCurrent() {
    this.geoQuery = `${this.location[1]},${this.location[0]}`;
    this.searching();
  }
}
