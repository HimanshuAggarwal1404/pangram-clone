var carouselposition;
var pos2 = 50;
var pos3 = 25;
var pos4 = 35;
var lastoffset = 0;
const aa1 = document.getElementsByClassName("aa1")[0];
const aa2 = document.getElementsByClassName("aa2")[0];
const aa3 = document.getElementsByClassName("aa3")[0];
const aa4 = document.getElementsByClassName("aa4")[0];
const aa5 = document.getElementsByClassName("aa5")[0];
const aa6 = document.getElementsByClassName("aa6")[0];
const aa7 = document.getElementsByClassName("aa7")[0];
const aa8 = document.getElementsByClassName("aa8")[0];
const aa9 = document.getElementsByClassName("aa9")[0];
const aa10 = document.getElementsByClassName("aa10")[0];
const aa11 = document.getElementsByClassName("aa11")[0];
const aa12 = document.getElementsByClassName("aa12")[0];


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
}
setInterval(moveCarousel, 7000);
window.addEventListener("load", () => {
  carouselposition = -400;
  moveCarousel();
  document.getElementById("carousel").style.transform = `translateY(0vh)`;
});
document.addEventListener("click", (e) => {
  if (e.target.id == "circle2") {
    carouselposition = 0;
    moveCarousel();
  } else if (e.target.id == "circle3") {
    carouselposition = -100;
    moveCarousel();
  } else if (e.target.id == "circle4") {
    carouselposition = -200;
    moveCarousel();
  } else if (e.target.id == "circle5") {
    carouselposition = -300;
    moveCarousel();
  } else if (e.target.id == "circle1") {
    carouselposition = -400;
    moveCarousel();
  }
});
function myFunction() {
  var a = document.getElementById("section3").offsetTop - 400;
  var st = window.pageYOffset;
  if (st >= a) {
    if (st > lastoffset) {
      pos3 = pos3<=0?0:pos3-0.5;
      pos4 = pos4<=0?0:pos4-0.7;
      pos2 = pos2<=0?0:pos2 - 1;
    } else if (st < lastoffset) {
      pos2= pos2>=50?50:pos2+ 1;
      pos3= pos3>=25?25:pos3+0.5;
      pos4= pos4>=35?35:pos4+0.7;
    }
    lastoffset = st <= 0 ? 0 : st;
    document.getElementsByClassName("col-2")[0].style.top = `${pos2}vh`;
    document.getElementsByClassName("col-3")[0].style.top = `${pos3}vh`;
    document.getElementsByClassName("col-4")[0].style.top = `${pos4}vh`;


  }
  


}
function box1hover(){
  aa1.innerHTML="Few Black taxis drive up major roads on quiet hazy nights";
  aa1.style.fontSize="2.2rem";
  aa1.style.justifyContent="center";
}
function box2hover(){
  aa2.innerHTML="Foxy diva Jennifer Lopez wasn’t baking my quiche.";
  aa2.style.fontSize="2.2rem";
  aa2.style.justifyContent="center";
}
function box3hover(){
  aa3.innerHTML="Foxy diva Jennifer Lopez wasn’t baking my quiche.";
  aa3.style.fontSize="2.2rem";
  aa3.style.justifyContent="center";
}
function box4hover(){
  aa4.innerHTML="My girl wove six dozen plaid jackets before she quit.";
  aa4.style.fontSize="2.2rem";
  aa4.style.justifyContent="center";
}
function box6hover(){
  aa6.innerHTML="Foxy diva Jennifer Lopez wasn’t baking my quiche.";
  aa6.style.fontSize="2.2rem";
  aa6.style.justifyContent="center";
}function box7hover(){
  aa7.innerHTML="We promptly judged antique ivory buckles for the next prize.";
  aa7.style.fontSize="2.2rem";
  aa7.style.justifyContent="center";
}function box8hover(){
  aa8.innerHTML="The explorer was frozen in his big kayak just after making queer discoveries.";
  aa8.style.fontSize="2.2rem";
  aa8.style.justifyContent="center";
}function box9hover(){
  aa9.innerHTML="Jackie will budget for the most expensive zoology equipment.";
  aa9.style.fontSize="2.2rem";
  aa9.style.justifyContent="center";
}function box10hover(){
  aa10.innerHTML="While Suez sailors wax parquet decks, Afghan jews vomit jauntily abaft.";
  aa10.style.fontSize="2.2rem";
  aa10.style.justifyContent="center";
}function box11hover(){
  aa11.innerHTML="In Baghdad, a quail gawked at a camel playing sexy lo-fi Peruvian jazz.";
  aa11.style.fontSize="2.2rem";
  aa11.style.justifyContent="center";
}function box12hover(){
  aa12.innerHTML="In Baghdad, a quail gawked at a camel playing sexy lo-fi Peruvian jazz.";
  aa12.style.fontSize="2.2rem";
  aa12.style.justifyContent="center";
}
function left1(){
  aa1.innerHTML="Aa"
  aa1.style.fontSize="9rem";
  aa1.style.justifyContent="flex-start"
}
function left2(){
  aa2.innerHTML="Aa"
  aa2.style.fontSize="9rem";
  aa2.style.justifyContent="flex-start"
}
function left3(){
  aa3.innerHTML="Aa"
  aa3.style.fontSize="9rem";
  aa3.style.justifyContent="flex-start"
}
function left4(){
  aa4.innerHTML="Aa"
  aa4.style.fontSize="9rem";
  aa4.style.justifyContent="flex-start"
}

function left6(){
  aa6.innerHTML="Aa"
  aa6.style.fontSize="9rem";
  aa6.style.justifyContent="flex-start"
}
function left7(){
  aa7.innerHTML="Aa"
  aa7.style.fontSize="9rem";
  aa7.style.justifyContent="flex-start"
}
function left8(){
  aa8.innerHTML="Aa"
  aa8.style.fontSize="9rem";
  aa8.style.justifyContent="flex-start"
}
function left9(){
  aa9.innerHTML="Aa"
  aa9.style.fontSize="9rem";
  aa9.style.justifyContent="flex-start"
}
function left10(){
  aa10.innerHTML="Aa"
  aa10.style.fontSize="9rem";
  aa10.style.justifyContent="flex-start"
}
function left11(){
  aa11.innerHTML="Aa"
  aa11.style.fontSize="9rem";
  aa11.style.justifyContent="flex-start"
}
function left12(){
  aa12.innerHTML="Aa"
  aa12.style.fontSize="9rem";
  aa12.style.justifyContent="flex-start"
}