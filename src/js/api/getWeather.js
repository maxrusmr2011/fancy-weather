import { weatherApi } from '../constants';

export default function getWeather(addQuery) {
  let query = '';
  ['q', 'lang', 'units', 'lon', 'lat'].forEach((item) => {
    if (item in addQuery) {
      query += `&${item}=${addQuery[item]}`;
    }
  });
  const url = `${weatherApi.url}?APPID=${weatherApi.token}${query}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    });
}
