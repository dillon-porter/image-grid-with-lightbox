// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block"
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none"
  }
  
  let slideIndex = 1;
  showSlides(slideIndex)
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n)
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n)
  }
  
  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides")
    let captionText = document.getElementById("caption")

    if ( n > slides.length ) {
        slideIndex = 1
    }

    if ( n < 1 ) {
        slideIndex = slides.length
    }

    for ( let i = 0; i < slides.length; i++ ) {
      slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    slides.innerHTML = image.alt
  }