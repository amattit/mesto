
// Profile
let profile = {
  title: 'Жак-Ив Кусто',
  subtitle: 'Исследователь океана'
}

// Places
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
    imagePath: './images/elbrus.png',
    alt: 'Вид на гору Эльбрус на закате'
  },
  {
    title: 'Домбай',
    reaction: 'like',
    imagePath: './images/dombay.png',
    alt: 'Вид на скалы и лес'
  },
  {
    title: 'Гора&nbsp;Эльбрус',
    reaction: 'like',
    imagePath: './images/elbrus.png',
    alt: 'Вид на гору Эльбрус на закате'
  },
  {
    title: 'Домбай',
    reaction: 'like',
    imagePath: './images/dombay.png',
    alt: 'Вид на скалы и лес'
  },
  {
    title: 'Карачаево&nbsp;-&nbsp;Черкесия',
    reaction: 'like',
    imagePath: './images/karachaevsk.png',
    alt: 'Вид на гору Эльбрус на закате'
  },
]

// place where i will write all places from placesObject
let photoGrid = document.querySelector('.gallery__items')

// name of user
let username = document.querySelector('.profile__title')

// user job title
let profession = document.querySelector('.profile__subtitle')

// set default user data 
function setUserData() {
  username.innerText = profile.title
  profession.innerText = profile.subtitle
}

// formElemnt :)
let formElement = document.querySelector('.popup__form')

// input where user write name
let nameInput = formElement.querySelector('.popup__input[name="title"]')

// input where user write job title
let jobInput = formElement.querySelector('.popup__input[name="subtitle"]')

// edit button
let editButton = document.querySelector('.profile__edit-button')

// close popup button
let closePopupButton = document.querySelector('.popup__close')

// handler for save button in form
function handleFormSubmit(evt) {
  evt.preventDefault();
  profile.title = nameInput.value
  profile.subtitle = jobInput.value
  setUserData()
  closePopup()
}

// show popup window
function showPopup() {
  let popup = document.querySelector('.popup')
  popup.classList.add('popup_opened')
  nameInput.value = profile.title;
  jobInput.value = profile.subtitle;
}

// close popup window
function closePopup() {
  let popup = document.querySelector('.popup')
  popup.classList.remove('popup_opened')
}

formElement.addEventListener('submit', handleFormSubmit)

editButton.addEventListener('click', showPopup)

closePopupButton.addEventListener('click', closePopup)

setUserData()

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