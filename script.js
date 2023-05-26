var carouselposition = 0;
function open() {
  document.getElementsByClassName("menu").style.transform = "scale(0)";
}
function moveCarousel() {
  for (var i = 0; i <= 3; i++) {
    document.getElementsByClassName("text1")[
      i
    ].style.transform = `translateY(40vh)`;
  }
  for (var i = 0; i <= 3; i++) {
    document.getElementsByClassName("text2")[
      i
    ].style.transform = `translateY(40vh)`;
  }
  for (var i = 0; i <= 3; i++) {
    document.getElementsByClassName("text3")[
      i
    ].style.transform = `translateY(40vh)`;
  }
  for (var i = 0; i <= 3; i++) {
    document.getElementsByClassName("text4")[
      i
    ].style.transform = `translateY(40vh)`;
  }

  if (carouselposition >= -300) {
    carouselposition = carouselposition - 100;
  } else {
    carouselposition = 0;
  }
  if (carouselposition == 0) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text1")[
        i
      ].style.transform = `translateY(0vh)`;
    }
  } else if (carouselposition == -100) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text2")[
        i
      ].style.transform = `translateY(0vh)`;
    }
  } else if (carouselposition == -200) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text3")[
        i
      ].style.transform = `translateY(0vh)`;
    }
  } else if (carouselposition == -300) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text4")[
        i
      ].style.transform = `translateY(0vh)`;
    }
  } else pos = 5;
  document.getElementById(
    "carousel"
  ).style.transform = `translateX(${carouselposition}vw)`;
  console.log(carouselposition);
}
setInterval(moveCarousel, 6000);
