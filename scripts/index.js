const popupProfile = document.querySelector(".popup_profile");
const formProfile = popupProfile.querySelector(".popup__form");
const nameInput = formProfile.querySelector(".popup__form-name");
const aboutInput = formProfile.querySelector(".popup__form-occupation");

const closePopupProfile = popupProfile.querySelector(".popup__button-close");
const editButton = document.querySelector(".main__button_edit");

const profileName = document.querySelector(".main__paragraph_name");
const profileAbout = document.querySelector(".main__paragraph_about");

editButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;
});

closePopupProfile.addEventListener("click", function () {
  popupProfile.classList.remove("popup_opened");
});

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const aboutValue = aboutInput.value;
  if (nameValue !== "" && aboutValue !== "") {
    profileName.textContent = nameValue;
    profileAbout.textContent = aboutValue;
    popupProfile.classList.remove("popup_opened");
  }
});