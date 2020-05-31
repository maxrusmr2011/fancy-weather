import { ipinfoApi } from '../constants';

export default function getLocation() {
  const url = `${ipinfoApi.url}?token=${ipinfoApi.token}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    });
}
