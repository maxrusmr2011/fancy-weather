import Elem from './utils/Elem';

export default function errorsOutput(queryTarget) {
  const target = document.querySelector(queryTarget);
  return function message(placeError, objError) {
    const DELAY = 10000;
    let strError = `Error ${placeError}`;
    if (typeof str === 'string') {
      strError += `: ${objError}`;
    } else if (objError instanceof Error) {
      strError += `: ${objError.message}`;
    } else {
      strError += `: (${objError.status}) ${objError.statusText}`;
    }
    const text = Elem('div', '.error__text', strError);
    const btn = Elem('button', '.error__clear', '✖');
    const oneMessage = Elem('div', '.error', [text, btn]).parent(target);
    const clear = setTimeout(() => {
      oneMessage.native.remove();
    }, DELAY);
    btn.on('click', () => {
      oneMessage.native.remove();
      clearTimeout(clear);
    });
  };
}
