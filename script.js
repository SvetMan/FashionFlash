window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1100);
}


mybutton = document.getElementById("icontop");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("icontop").style.display = "block";
    } else {
        document.getElementById("icontop").style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}



var slideIndex = 1;
showSlides();

function plusSlide() {
    slideIndex = slideIndex + 1;
    showSlides();
}

function minusSlide() {
    slideIndex = slideIndex - 1;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides()
}

function showSlides() {
    var slides = document.getElementsByClassName('item');
    var dots = document.getElementsByClassName('slider-dots_item');

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}