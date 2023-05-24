var carouselposition = 0;
function open() {
  document.getElementsByClassName("menu").style.transform = "scale(0)";
}
function moveCarousel() {
  if (carouselposition >= -300) {
    carouselposition = carouselposition - 100;}
    else{
        carouselposition=0;
    }
    document.getElementById(
      "carousel"
    ).style.transform = `translateX(${carouselposition}vw)`;
    console.log(carouselposition);
  
}
setInterval(moveCarousel, 3000);
