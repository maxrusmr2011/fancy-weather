const ipinfoApi = {
  url: 'https://ipinfo.io/json',
  token: '720b5d732dcf97',
};
const geocodeApi = {
  url: 'https://api.opencagedata.com/geocode/v1/json',
  token: 'b7d85b0ed426411cbaba7a2d62d575dc',
};
const weatherApi = {
  url: 'https://api.openweathermap.org/data/2.5/forecast',
  token: '50d5c38b01dfe0b10a1a4ff714cdd3d1',
};
const photoApi = {
  url: '_https://api.unsplash.com/photos/random',
  token: 'ToCg_dlprnchoDQzAFEdnUjGWwARHG_yYld-JuEYFqk',
};
const translateApi = {
  url: 'https://translate.yandex.net/api/v1.5/tr.json/translate',
  token: 'trnsl.1.1.20200422T111801Z.e0d39b73a715a384.a2a2b921649e23f209f29f7200aebd93340f4270',
};
// const mapApiGoogle = {
//   url: 'https://maps.googleapis.com/maps/api/js',
//   token: 'AIzaSyDn_gIbGSdCoGt7J26p_capXd8MKnDzvYM',
// };

const mapApiMapboxToken = 'pk.eyJ1IjoibWF4cnVzbXIyMDExIiwiYSI6ImNrYTQwcnFmNzA5ZjYzZm12ZXQzbXFhN2QifQ.uSxrGMLSQh-0N0QECC_3iQ';
const images = {
  refresh: './src/assets/img/refresh.svg',
  mic: './src/assets/img/microphone.png',
  patch: './src/assets/img/patchPhoto.png',
  speak: './src/assets/img/sound.png',
};
const mainLang = 'en';

export {
  ipinfoApi,
  weatherApi,
  photoApi,
  mapApiMapboxToken,
  geocodeApi,
  translateApi,
  images,
  mainLang,
};
