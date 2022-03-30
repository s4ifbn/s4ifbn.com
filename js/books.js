let mathBook = document.querySelector(".mathBookLink");
var CountMathBookClicks = localStorage.getItem('mathcounter');
if (CountMathBookClicks === null) {
    CountMathBookClicks = 0;
} else {

    mathBook.addEventListener("click", function() {
        CountMathBookClicks += 1;
        localStorage.setItem('mathcounter', CountMathBookClicks);
        document.getElementById('mathBook').innerHTML='Downloded ' + CountMathBookClicks + ' Times';
      });
}


