let mathBook = document.querySelector(".mathBookLink");
let CountMathBookClicks = 0;

mathBook.addEventListener("click", function() {
  CountMathBookClicks += 1;
  document.getElementById('mathBook').innerHTML='Downloded ' + CountMathBookClicks + ' Times';
});