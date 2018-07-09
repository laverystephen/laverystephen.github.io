// onload
$(document).ready(function(){

//smooth scrolling
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});

// opens the lightbox
function openModal() {
	document.getElementById('engagementmodal').style.display = "block";
}

// closes the lightbox
function closeModal() {
	document.getElementById('engagementmodal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// controls navigation within the lightbox
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// controls images
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("engagementslides");
	var dots = document.getElementsByClassName("demo");
	var captionText = document.getElementById("caption");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i=0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	captionText.innerHTML = dots[slideIndex-1].alt;
}

// Open links in a new tab
function openWindow( url)
{
	window.open(url, '_blank');
	window.focus();
}