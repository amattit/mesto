
// Profile
let profile = {
  title: 'Жак-Ив Кусто',
  subtitle: 'Исследователь океана'
}

// Places
const places = [
  {
    title: 'Архыз',
    reaction: 'like',
    imagePath: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
    alt: 'Старый каменный дом на фоне гор и леса'
  },
  {
    title: 'Челябинская область',
    reaction: 'like',
    imagePath: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
    alt: 'Вид на гору Эльбрус на закате'
  },
  {
    title: 'Иваново',
    reaction: 'like',
    imagePath: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
    alt: 'Вид на скалы и лес'
  },
  {
    title: 'Камчатка',
    reaction: 'like',
    imagePath: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
    alt: 'Вид на гору Эльбрус на закате'
  },
  {
    title: 'Холмогорский район',
    reaction: 'like',
    imagePath: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
    alt: 'Вид на скалы и лес'
  },
  {
    title: 'Байкал',
    reaction: 'like',
    imagePath: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
    alt: 'Вид на гору Эльбрус на закате'
  },
]

// place where i will write all places from placesObject
const photoGrid = document.querySelector('.gallery__items');

// name of user
const username = document.querySelector('.profile__title');

// user job title
const profession = document.querySelector('.profile__subtitle');

// form elemnts :)
const formEditElement = document.querySelector('.popup__form');
const formAddMestoElement = document.querySelector('.popup__form_type_add-mesto');

// inputs
const nameInput = formEditElement.querySelector('.popup__input_type_title');
const jobInput = formEditElement.querySelector('.popup__input_type_subtitle');
const mestoTitleInput = formAddMestoElement.querySelector('.popup__input_type_mesto');
const mestoImageInput = formAddMestoElement.querySelector('.popup__input_type_link');

// buttons
const editButton = document.querySelector('.profile__edit-button');
const addMestoButton = document.querySelector('.profile__plus-button');
const closeProfilePopupButton = document.querySelector('.popup__close_form_profile');
const closeShowMestoPopupButton = document.querySelector('.popup__close_form_show-mesto');
const closeAddMestoPopupButton = document.querySelector('.popup__close_form_add-mesto');

// popup elements
const profilePopup = document.querySelector('.popup_form_profile');
const addMestoPopup = document.querySelector('.popup_form_add-mesto');
const showMestoPopup = document.querySelector('.popup_form_show-mesto');

// templates
const cardTemplate = document.querySelector('#galleryItemTemplate').content;

const createCard = (title, link) => {
  let card = cardTemplate.cloneNode(true);
  card.querySelector('.gallery__photo').src = link;
  card.querySelector('.gallery__title').textContent = title;
  card.querySelector('.gallery__like').addEventListener('click', addLike);
  card.querySelector('.gallery__trash').addEventListener('click', deleteCard);
  card.querySelector('.gallery__photo').addEventListener('click', () => {
    showMestoPopup.querySelector('.popup__image').src = link;
    showMestoPopup.querySelector('.popup__subtitle').textContent = title;
    showShowMestoPopup()
  });
  photoGrid.prepend(card);
}

// addCard
function addCardHandler(evt) {
  evt.preventDefault();
  let title = mestoTitleInput.value;
  let link = mestoImageInput.value;
  mestoTitleInput.value = '';
  mestoImageInput.value = '';
  createCard(title, link);
  closeAddMestoPopup();
}

// set like to mesto
function addLike(evt) {
  evt
    .target
    .classList
    .toggle('gallery__like_selected');
}

// Delete mesto
function deleteCard(evt) {
  evt
    .target
    .closest('.gallery__item')
    .remove();
}

// set default user data
function setUserData() {
  username.innerText = profile.title
  profession.innerText = profile.subtitle
}

// handler for save button in form
function handleFormSubmit(evt) {
  evt.preventDefault();
  profile.title = nameInput.value;
  profile.subtitle = jobInput.value;
  setUserData();
  closeProfilePopup();
}

// MARK: - Profile popup
function showProfilePopup() {
  profilePopup.classList.add('popup_opened');
  nameInput.value = profile.title;
  jobInput.value = profile.subtitle;
}

function closeProfilePopup() {
  profilePopup.classList.remove('popup_opened');
}

// MARK: - Add mesto popup
function showAddMestoPopup() {
  addMestoPopup.classList.add('popup_opened');
}

function closeAddMestoPopup() {
  addMestoPopup.classList.remove('popup_opened');
}

// MARK: - Show mesto popup
function showShowMestoPopup() {
  console.log('showing popup')
  showMestoPopup.classList.add('popup_opened');
  nameInput.value = profile.title;
  jobInput.value = profile.subtitle;
}

function closeShowMestoPopup() {
  showMestoPopup.classList.remove('popup_opened');
}

function setInitialMesto() {
  places
  .reverse()
  .map(place => {
    createCard(place.title, place.imagePath);
  })
}

setUserData()

setInitialMesto()

formEditElement.addEventListener('submit', handleFormSubmit);

formAddMestoElement.addEventListener('submit', addCardHandler);

editButton.addEventListener('click', showProfilePopup);

closeProfilePopupButton.addEventListener('click', closeProfilePopup);

closeAddMestoPopupButton.addEventListener('click', closeAddMestoPopup);

closeShowMestoPopupButton.addEventListener('click', closeShowMestoPopup);

addMestoButton.addEventListener('click', showAddMestoPopup);
