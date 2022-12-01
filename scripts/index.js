
// Профиль
let profile = {
  title: 'Жак-Ив Кусто',
  subtitle: 'Исследователь океана'
}

const places = [
  {
    title: 'Карачаевск',
    reaction: 'like',
    imagePath: './images/karachaevsk.png',
    alt: 'Старый каменный дом на фоне гор и леса'
  },
  {
    title: 'Гора&nbsp;Эльбрус',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/elbrus.png',
    alt: 'Вид на гору Эльбрус на закате'
  },
  {
    title: 'Домбай',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/dombay.png',
    alt: 'Вид на скалы и лес'
  },
  {
    title: 'Гора&nbsp;Эльбрус',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/elbrus.png',
    alt: 'Вид на гору Эльбрус на закате'
  },
  {
    title: 'Домбай',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/dombay.png',
    alt: 'Вид на скалы и лес'
  },
  {
    title: 'Карачаево&nbsp;-&nbsp;Черкесия',
    reaction: 'like',
    imagePath: 'https://amattit.github.io/mesto/images/karachaevsk.png',
    alt: 'Вид на гору Эльбрус на закате'
  },
]

function setUserData() {
  let username = document.querySelector('.profile__title')
  let profession = document.querySelector('.profile__subtitle')

  username.innerText = profile.title
  profession.innerText = profile.subtitle
}

setUserData()

let photoGrid = document.querySelector('.gallery__items')

photoGrid.innerHTML = places.map(place => `
  <li class="gallery__item">
    <img src="${place.imagePath}" alt="${place.alt}" class="gallery__photo">
    <div class="gallery__title-container">
      <h2 class="gallery__title">${place.title}</h2>
      <button class="gallery__like gallery__like_state_deselected"></button>
    </div>
  </li>
`)
  .join('')

function handleFormSubmit(evt) {
  evt.preventDefault();
  profile.title = nameInput.value
  profile.subtitle = jobInput.value
  setUserData()
  closePopup()
}

let formElement = document.querySelector('.popup__form')
let nameInput = formElement.querySelector('.popup__input[name="title"]')
let jobInput = formElement.querySelector('.popup__input[name="subtitle"]')

formElement.addEventListener('submit', handleFormSubmit)

function showPopup() {
  let popup = document.querySelector('.popup')
  popup.classList.add('popup_opened')
  nameInput.value = profile.title;
  jobInput.value = profile.subtitle;
}

function closePopup() {
  let popup = document.querySelector('.popup')
  popup.classList.remove('popup_opened')
}

let editButton = document.querySelector('.profile__edit-button')
editButton.addEventListener('click', showPopup)

let closePopupButton = document.querySelector('.popup__close')
closePopupButton.addEventListener('click', closePopup)
