export default function activeLink() {
  const doc = document;
  let location = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  let links = doc.querySelectorAll('.menu__link');
    if (location == "") {
    let activeItem = doc.querySelector('.menu__item--home a');
    activeItem.removeAttribute('href');
    activeItem.parentNode.classList.add('menu__item--active');
  }
  for(let item of links){
   let link = item.getAttribute('href');
    if (location == link) {
      item.parentNode.classList.add('menu__item--active');
      item.removeAttribute('href');
    }
  }
}
