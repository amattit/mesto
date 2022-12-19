
// Profile
const profile = {
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
const closeButtons = document.querySelectorAll('.popup__close');

// popup elements
const profilePopup = document.querySelector('.popup_form_profile');
const addMestoPopup = document.querySelector('.popup_form_add-mesto');
const showMestoPopup = document.querySelector('.popup_form_show-mesto');
const mestoPopupImage = showMestoPopup.querySelector('.popup__image');
const mestoPopupSubtitle = showMestoPopup.querySelector('.popup__subtitle');

// templates
const cardTemplate = document.querySelector('#galleryItemTemplate').content;

const createCard = (title, link) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.gallery__photo').src = link;
  card.querySelector('.gallery__photo').alt = title;
  card.querySelector('.gallery__title').textContent = title;
  card.querySelector('.gallery__like').addEventListener('click', addLike);
  card.querySelector('.gallery__trash').addEventListener('click', deleteCard);
  card.querySelector('.gallery__photo').addEventListener('click', () => {
    mestoPopupImage.src = link;
    mestoPopupImage.alt = title;
    mestoPopupSubtitle.textContent = title;
    openPopup(showMestoPopup);
  });
  return card
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

function appendCardToPhotoGrid(card) {
  photoGrid.append(card)
}

function prependCardToPhotoGrid(card) {
  photoGrid.prepend(card)
}

// set default user data
function setUserData() {
  username.innerText = profile.title
  profession.innerText = profile.subtitle
}

// Handlers
// handler for save button in form
function handleFormSubmit(evt) {
  evt.preventDefault();
  profile.title = nameInput.value;
  profile.subtitle = jobInput.value;
  setUserData();
  closePopup(profilePopup);
}

function addCardHandler(evt) {
  evt.preventDefault();
  const title = mestoTitleInput.value;
  const link = mestoImageInput.value;
  evt.target.reset()
  prependCardToPhotoGrid(createCard(title, link));
  closePopup(addMestoPopup);
}

function setInitialMesto() {
  places.forEach(place => {
    appendCardToPhotoGrid(createCard(place.title, place.imagePath));
  })
}

function openPopup(popup) {
  popup.classList.add('popup_opened')
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

setUserData()

setInitialMesto()

formEditElement.addEventListener('submit', handleFormSubmit);

formAddMestoElement.addEventListener('submit', addCardHandler);

editButton.addEventListener('click', () => {
  nameInput.value = profile.title;
  jobInput.value = profile.subtitle;
  openPopup(profilePopup);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup')
  button.addEventListener('click', () => closePopup(popup));
});

addMestoButton.addEventListener('click', () => {
  openPopup(addMestoPopup);
});
