import { geocodeApi } from '../constants';

export default function getGeocoder(addQuery) {
  const startVal = '&pretty=1&limit=1';
  const query = ['q', 'language']
    .reduce((res, item) => (item in addQuery ? `${res}&${item}=${addQuery[item]}` : res), startVal);
  const url = `${geocodeApi.url}?key=${geocodeApi.token}${query}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then((res) => {
      if (!res.total_results) {
        throw Error('Not found');
      }
      return res;
    });
}
