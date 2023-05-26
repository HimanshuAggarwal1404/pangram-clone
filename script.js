var carouselposition;
function open() {
  document.getElementsByClassName("menu").style.transform = "scale(0)";
}
function moveCarousel() {
  

  document.getElementById("circle1").style.background = "rgba(0,0,0,0.5)";
  document.getElementById("circle2").style.background = "rgba(0,0,0,0.5)";
  document.getElementById("circle3").style.background = "rgba(0,0,0,0.5)";
  document.getElementById("circle4").style.background = "rgba(0,0,0,0.5)";
  document.getElementById("circle5").style.background = "rgba(0,0,0,0.5)";

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
    document.getElementById("circle1").style.backgroundColor = "white";
  } else if (carouselposition == -100) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text2")[
        i
      ].style.transform = `translateY(0vh)`;
    }
    document.getElementById("circle2").style.backgroundColor = "white";

  } else if (carouselposition == -200) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text3")[
        i
      ].style.transform = `translateY(0vh)`;
    }
    document.getElementById("circle3").style.backgroundColor = "white";

  } else if (carouselposition == -300) {
    for (var i = 0; i <= 3; i++) {
      document.getElementsByClassName("text4")[
        i
      ].style.transform = `translateY(0vh)`;
    }
    document.getElementById("circle4").style.backgroundColor = "white";

  } else {
    document.getElementById("circle5").style.backgroundColor = "white";

  }
  document.getElementById(
    "carousel"
  ).style.transform = `translateX(${carouselposition}vw)`;
  console.log(carouselposition);
}
setInterval(moveCarousel, 7000);
window.addEventListener("load",()=>{carouselposition=-400;moveCarousel();document.getElementById("carousel").style.transform= `translateY(0vh)`
})
document.addEventListener("click", (e)=>{
  if(e.target.id=="circle2"){carouselposition=0;moveCarousel()}
  else if(e.target.id=="circle3"){carouselposition=-100;moveCarousel()}
  else if(e.target.id=="circle4"){carouselposition=-200;moveCarousel()}
  else if(e.target.id=="circle5"){carouselposition=-300;moveCarousel()}
  else if(e.target.id=="circle1"){carouselposition=-400;moveCarousel()}



})
