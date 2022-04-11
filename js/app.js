(function (window, document) {
  let ratingNumbers = document.querySelectorAll(".rating-comp__rate-numbers span");

  ratingNumbers.forEach((number) => {
    number.addEventListener("click", () => {
      console.log(number);
    });
  });
})(window, document);
