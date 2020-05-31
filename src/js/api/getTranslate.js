import { translateApi } from '../constants';

export default function getTranslate(text) {
  const lang = `lang=en-${window.app.header.save.lang}`;
  const url = `${translateApi.url}?key=${translateApi.token}&${lang}&text=${text}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(res);
      }
      return res.json();
    });
}
