// PROGRESS_BAR
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

// ------------------------------------------------------

// SLIDER SKILLS
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
};

// ------------------------------------------------------

// MODAL 
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = element.getElementsByClassName('modal_text');
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("caption").innerHTML = element.getElementsByClassName('modal_text');
    document.getElementById("myModal").style.display = "block";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

// ------------------------------------------------------

// ANIMATION SCROLL
function ScrollBtn() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
};

// ------------------------------------------------------

// ACTIVE PAGE DOTS !!! AJOUTER LE SCROLL TOP DOT ACTIVE
var slideSct = 1;
  showDivs(slideSct);

function plusDivs(n) {
    showDivs(slideSct += n);
};

function goToDiv(n) {
    showDivs(slideSct = n);
};

function showDivs(n) {
  var i;
  var x = document.getElementsByTagName("section");
  //get the list of dots
  var y = document.getElementsByClassName("dot_page");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "flex";
      //remove .active from all dots
      y[i].classList.remove("dot_page_active")
  }
  x[slideIndex - 1].style.display = "flex";
  //add .active to the selected dot
  y[slideIndex - 1].classList.add("dot_page_active")
};

function goToDiv(n) {
  showDivs(slideSct = n);
  var dotsid = document.getElementsByClassName('dot_page');
  for(var i = 0; i < dotsid.length; i++) {
    if (i == n - 1) {
      dotsid[i].classList.add('dot_page_active');
    } else {
      dotsid[i].classList.remove('dot_page_active');
    }
  }
};

// ------------------------------------------------------
