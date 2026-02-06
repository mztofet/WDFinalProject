document.addEventListener("DOMContentLoaded", function () {

  // Enable all popovers
  const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
  [...popoverTriggerList].forEach(pop => new bootstrap.Popover(pop));

  // Sorting Hat Feature
  const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"];
  const sortButton = document.getElementById("sortButton");
  const result = document.getElementById("sortingResult");

  sortButton.addEventListener("click", function () {

    let index = 0;
    result.textContent = "Sorting...";

    // Spin fast through houses
    const spin = setInterval(() => {
      result.textContent = houses[index];
      index = (index + 1) % houses.length;
    }, 100);

    // Stop spinning after 2 seconds and pick final house
    setTimeout(() => {
      clearInterval(spin);
      const finalHouse = houses[Math.floor(Math.random() * houses.length)];
      result.textContent = finalHouse;
    }, 2000);
  });

});