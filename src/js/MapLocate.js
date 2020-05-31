import Elem from './utils/Elem';
import errorOutput from './errorsOutput';
import { mapApiMapboxToken } from './constants';

import getLocation from './api/getLocation';

export default class MapLocate {
  constructor() {
    this.location = [0, 0];
  }

  init() {
    this.render();
    this.error = errorOutput('.header__error');
    // this.renderMap([27.493, 53.89]); // this mock
  }

  render() {
    const map = Elem('div', 'location__map').prop([['id', 'map']]);
    const lat = Elem('div', 'coord__lat', [
      Elem('span', 'coord__text').attr([['i18n', 'lat']]),
      Elem('span', 'coord__value'),
    ]);
    const lon = Elem('div', 'coord__lon', [
      Elem('span', 'coord__text').attr([['i18n', 'lon']]),
      Elem('span', 'coord__value')  ,
    ]);
    const coord = Elem('div', 'location__coord coord', [lat, lon]);
    Elem('div', 'location', [map, coord]).parent('.main__container');
  }

  renderMap() {
    this.location = window.app.header.location;
    console.log('loc map=', this.location);

    this.viewMap();
    this.viewCoord();
  }

  viewCoord() {
    const loc = window.app.header.location;
    let lon = loc[0].toFixed(2).split('.');
    lon[1] = Math.floor((lon[1] / 100) * 60);
    lon = `: ${lon.join('°')}' (${loc[1] > 0 ? 'E' : 'W'})`;

    let lat = loc[1].toFixed(2).split('.');
    lat[1] = Math.floor((lat[1] / 100) * 60);
    lat = `: ${lat.join('°')}' (${loc[0] > 0 ? 'N' : 'S'})`;
    Elem('.coord__lat .coord__value', false, lat);
    Elem('.coord__lon .coord__value', false, lon);
  }

  viewMap() {
    const loc = window.app.header.location;
    const mapbox = window.mapboxgl;
    mapbox.accessToken = mapApiMapboxToken;
    this.map = new mapbox.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: loc,
      zoom: 8,
    });
    new mapbox.Marker()
      .setLngLat(loc)
      .addTo(this.map);
  }

  currentCoord() {
    getLocation()
      .then((res) => {
        this.renderMap(res.loc.split(',').map((item) => parseFloat(item)).reverse());
      })
      .catch((err) => {
        // console.log('err',err);
        this.error('current location', err);
        navigator.geolocation.getCurrentPosition((response) => {
          // console.log(2, response.coords.latitude, response.coords.longitude);
          this.renderMap([response.coords.longitude, response.coords.latitude]);
        });
      });
  }
}
