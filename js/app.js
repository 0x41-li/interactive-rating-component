(function (window, document) {

  let ratingComp = document.querySelector('.rating-comp');
  let ratingNumbers = document.querySelectorAll(
    ".rating-comp__rate-numbers span"
  );
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
    ratingComp.classList.add("hide");
  });

})(window, document);
