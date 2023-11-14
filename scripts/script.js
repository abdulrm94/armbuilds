function burgerMenu() {
  nav = document.getElementsByTagName("nav")[0];
  burger = document.getElementById("burger");

  if (nav.classList.contains("nav-closed")) {
    nav.classList.remove("nav-closed");
    burger.classList.remove("open");
    burger.classList.add("close");

  } else {
    nav.classList.add("nav-closed");
    burger.classList.remove("close");
    burger.classList.add("open");
  }
}

window.addEventListener("resize", function () {
  nav = document.getElementsByTagName("nav")[0];
  burger = document.getElementById("burger");

  if (window.matchMedia("(min-width: 851px)").matches) {
    nav.classList.remove("nav-closed");
    burger.classList.remove("open");
    burger.classList.add("close");
    console.log("Screen width is at least 500px");
  } else {
    nav.classList.add("nav-closed");
    burger.classList.remove("close");
    burger.classList.add("open");

    console.log("Screen less than 500px");
  }
});

document.addEventListener("click", function (event) {
  var specifiedElement = document.getElementById("burger");

  var isClickInside = specifiedElement.contains(event.target);
  if (isClickInside) {
    console.log("burger menu clicked");
  } else {
    nav = document.getElementsByTagName("nav")[0];
    burger = document.getElementById("burger");

    if (!nav.classList.contains("nav-closed")) {
      nav.classList.add("nav-closed");
      burger.classList.remove("close");
      burger.classList.add("open");
      console.log("clicked outsied");
    }
  }
});

function seeMoreReviews(){
  reviewsContainer = document.getElementById("reviews");
  reviewsContainer.classList.add("expanded");
  window.scrollBy(0, 400);
}
