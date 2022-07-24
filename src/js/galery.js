const categoryButtons = document.getElementsByClassName('nav-link');
const galeriesShow = document.getElementsByClassName('galeryShow');
const categoryButtonIds = [];

for (let i = 0; i < nav-link.length; i++) {
  categoryButtonIds[i] = document.getElementById(nav-link[i].id);
  categoryButtonIds[i].addEventListener('click', () => {
    hideSections(nav-link[i].id);
  })
}

const hideSections = (category) => {
  for (let i = 0; i < galeriesShow.length; i++) {
    galeriesShow[i].style.display = 'none';
    galeriesShow[category].style.display = 'flex';
  }
}
