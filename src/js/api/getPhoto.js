import { photoApi } from '../constants';

export default function getPhoto(about) {
  const orient = 'orientation=landscape';
  const pages = 'per_page=1';
  const theme = `query=${about}`;
  const token = `client_id=${photoApi.token}`;
  const url = `${photoApi.url}?${orient}&${pages}&${theme}&${token}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    })
    .then((answer) => fetch(answer.urls.regular))
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.blob();
    });
}
