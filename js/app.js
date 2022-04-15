(function (window, document) {
  let ratingComp = document.querySelector(".rating-comp");
  let thankYouComp = document.querySelector(".thank-you-comp");

  let ratingNumbers = document.querySelectorAll(
    ".rating-comp__rate-numbers span"
  );

  let ratingSelectedNumber = document.querySelector(".rating-selected-number");

  let submitBtn = document.querySelector(".rating-comp__submit");

  ratingNumbers.forEach((number) => {
    number.addEventListener("click", () => {
      ratingNumbers.forEach((n) => {
        n.classList.remove("chosen");
      });

      number.classList.add("chosen");
    });
  });

  submitBtn.addEventListener("click", () => {

    let chosenRating = document.querySelector(".chosen");


    ratingSelectedNumber.textContent = chosenRating.textContent;
    ratingComp.classList.add("hide");
    thankYouComp.classList.remove("hide");
  });
})(window, document);
