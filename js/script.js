// Validasi Formulir
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    var phoneRegex = /^\d{10,13}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}


// Auto Slide
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    let dots = document.querySelectorAll(".dot");

    // Pastikan slides dan dots tidak kosong
    if (!slides.length || !dots.length) {
        console.error("No slides or dots found.");
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    if (slideIndex > 0 && slideIndex <= slides.length) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    } else {
        console.error("Invalid slideIndex:", slideIndex);
    }

    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    // Jalankan showSlides setelah dokumen HTML dimuat
    showSlides();
});
