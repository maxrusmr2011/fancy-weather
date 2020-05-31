export default function blurFunc(queryDelete, fn) {
  document.onclick = function eventDelete(event) {
    if (!event.target.closest(queryDelete)) {
      fn(document.querySelector(queryDelete));
      document.onclick = null;
    }
  };
}
