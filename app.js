let images = document.getElementsByClassName("image");

let currentSlide = 0;

buildDots();

show_image(currentSlide);

document.getElementById("prev").addEventListener("click", function () {
  console.log("prev");
  let newSlide = currentSlide - 1;
  if (newSlide < 0) {
    newSlide = images.length - 1;
  }
  show_image(newSlide);
  currentSlide = newSlide;
});

document.getElementById("next").addEventListener("click", function () {
  console.log("next");
  let newSlide = (currentSlide + 1) % images.length;
  show_image(newSlide);
  currentSlide = newSlide;
});

function show_image(newSlide) {
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }

  images[newSlide].style.display = "block";

  dots[newSlide].classList.add("active");
}

function buildDots() {
  for (let i = 0; i < images.length; i++) {
    let dot = document.createElement("span");
    dot.className = "dot";
    document.querySelector(".dots").appendChild(dot);
    dot.addEventListener("click", function () {
      show_image(i);
      currentSlide = i;
    });
  }
}
