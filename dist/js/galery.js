const categoryButtons = document.getElementsByClassName('nav-link categoryButton');
const galeriesShow = document.getElementsByClassName('galeryShow');
const categoryButtonIds = [];

for (let i = 0; i < categoryButtons.length; i++) {
  categoryButtonIds[i] = document.getElementById(categoryButtons[i].id);
  categoryButtonIds[i].addEventListener('click', () => {
    hideSections(categoryButtons[i].id);
  })
}

const hideSections = (category) => {
  for (let i = 0; i < galeriesShow.length; i++) {
    galeriesShow[i].style.display = 'none';
    galeriesShow[category].style.display = 'flex';
  }
}
