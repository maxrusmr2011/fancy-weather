import { Elem, blurFunc } from './utils/index';

export default function dropdown(listMenu, fn) {
  const defaultLang = window.app.header.save.lang;
  let btnLang;
  const list = listMenu
    .map((item) => Elem('a', `dropdown__item${item === defaultLang ? ' dropdown__item-active' : ''}`, item).attr([['href', '#']]));

  const menu = Elem('div', 'dropdown__menu', list)
    .on('click', (event) => {
      document.querySelectorAll('.dropdown__item').forEach((item, i) => {
        if (item === event.target) {
          Elem(item).cls('.dropdown__item-active');
          btnLang.child(listMenu[i]);
          fn(listMenu[i]);
        } else {
          Elem(item).cls('_dropdown__item-active');
        }
        document.onclick = null;
      });
      menu.cls('_dropdown__menu-active');
    });

  btnLang = Elem('button', 'btn btn-lang', defaultLang)
    .on('click', (event) => {
      event.stopPropagation();
      menu.cls('.dropdown__menu-active');
      blurFunc('.dropdown__menu', (el) => el.classList.remove('dropdown__menu-active'));
    });

  return Elem('div', 'dropdown', [btnLang, menu]);
}
