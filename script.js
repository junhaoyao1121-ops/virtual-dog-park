const adoptionForm = document.getElementById("adoption-form");
const breedSelect = document.getElementById("dog-breed");
const nameInput = document.getElementById("dog-name");
const formError = document.getElementById("form-error");
const petPanel = document.getElementById("pet-panel");
const petName = document.getElementById("pet-name");
const petBreed = document.getElementById("pet-breed");
const petDay = document.getElementById("pet-day");
const petStage = document.getElementById("pet-stage");
const petHappiness = document.getElementById("pet-happiness");
const feedButton = document.getElementById("feed-button");
const playButton = document.getElementById("play-button");

let dog = null;

function renderDog() {
  const hasDog = dog !== null;
  adoptionForm.hidden = hasDog;
  petPanel.hidden = !hasDog;

  if (!hasDog) {
    return;
  }

  petName.textContent = dog.name;
  petBreed.textContent = dog.breed;
  petDay.textContent = String(dog.day);
  petStage.textContent = "Puppy";
  petHappiness.textContent = String(dog.happiness);
}

function changeHappiness(amount) {
  if (dog === null) {
    return;
  }

  dog.happiness = Math.min(100, dog.happiness + amount);
  renderDog();
}

adoptionForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();

  if (name.length === 0) {
    formError.textContent = "Please enter a dog name.";
    nameInput.focus();
    return;
  }

  if (name.length > 20) {
    formError.textContent = "Please use 20 characters or fewer.";
    nameInput.focus();
    return;
  }

  formError.textContent = "";
  dog = {
    name: name,
    breed: breedSelect.value,
    day: 1,
    happiness: 50
  };

  renderDog();
});

feedButton.addEventListener("click", function () {
  changeHappiness(10);
});

playButton.addEventListener("click", function () {
  changeHappiness(10);
});

renderDog();