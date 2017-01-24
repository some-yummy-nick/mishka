export default function menu() {

  const doc = document;
  let menu = doc.querySelector('.menu');
  doc.querySelector('.menu__toggle').addEventListener('click', _doSome);

  menu.classList.remove('menu--no-js');
  function _doSome() {
    if (menu.classList.contains('menu--closed')) {
      menu.classList.remove("menu--closed");
      menu.classList.add("menu--opened");
    } else {
      menu.classList.add("menu--closed");
      menu.classList.remove("menu--opened");
    }
  }
}

