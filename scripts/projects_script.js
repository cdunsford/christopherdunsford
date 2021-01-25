
// Get the modal
var modal = document.getElementById("myModal");

// Get the images and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("img-portfolio");
var img2 = document.getElementById("img-teacozy");
var img3 = document.getElementById("img-stuffed-animals");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){imgOnClickhelper(img);}
img2.onclick = function(){imgOnClickhelper(img2);}
img3.onclick = function(){imgOnClickhelper(img3);}

function imgOnClickhelper(_image) {
    modal.style.display = "block";
    modalImg.src = _image.src;
    captionText.innerHTML = _image.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {modal.style.display = "none";}
