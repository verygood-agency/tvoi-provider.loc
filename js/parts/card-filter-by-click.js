
const sortingButtons = Array.from(document.querySelectorAll(".sorting-tabs__button"));
const cards = Array.from(document.querySelectorAll(".custom-card"));

function removeActiveClass() {
  sortingButtons.forEach((button) => {
    button.classList.remove("active");
  });
}

function filterCards(filterValue) {
  cards.forEach((card) => {
    if (filterValue === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.dataset.category === filterValue ? "block" : "none";
    }
  });
}

sortingButtons[0].classList.add("active");
sortingButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    removeActiveClass();
    button.classList.add("active");
    filterCards(button.dataset.filter);
  });
});

