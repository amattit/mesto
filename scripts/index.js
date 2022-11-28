const profile = {
  title: 'Жак-Ив Кусто',
  subtitle: 'Исследователь океана'
}

const places = [
  {
    title: 'Карачаевск',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/karachaevsk.png',
    alt: ''
  },
  {
    title: 'Гора&nbsp;Эльбрус',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/elbrus.png'
  },
  {
    title: 'Домбай',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/dombay.png'
  },
  {
    title: 'Гора&nbsp;Эльбрус',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/elbrus.png'
  },
  {
    title: 'Домбай',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/dombay.png'
  },
  {
    title: 'Карачаево&nbsp;-&nbsp;Черкесия',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/karachaevsk.png'
  },
]

let username = document.querySelector('.profile__title')
let profession = document.querySelector('.profile__subtitle')

username.innerText = profile.title
profession.innerText = profile.subtitle

let photoGrid = document.querySelector('.gallery__items')

photoGrid.innerHTML = places.map(place => `
  <li class="gallery__item">
    <img src="${place.imagePath}" alt="Старый каменный дом на фоне гор и леса" class="gallery__photo">
    <div class="gallery__title-container">
      <h2 class="gallery__title">${place.title}</h2>
      <button class="gallery__like gallery__like_state_deselected"></button>
    </div>
  </li>
`)
.join('')

