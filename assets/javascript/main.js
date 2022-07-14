var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "/assets/images/pause-btn.png";
  } else {
    mySong.pause();
    icon.src = "/assets/images/play-btn.png";
  }
};

let typed = new Typed(".auto-type", {
  strings: ["#Music"],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});

let typedd = new Typed(".auto-typee", {
  strings: [
    "Ultimate web design course includes over 100 videos. It starts with everything you need to know to get started with #devTO and eases into more advanced design concepts.You'll learn the basics of HTML, how CSS classes and subclasses function, how toconstruct a page design with elements like containers, divs, flexboxes, and grids. And of course, we'll take you through how to use one of our most powerful features — #devTO. By the time you finish this course, you'll be able to build some pretty amazing stuff.",
  ],
  typeSpeed: 50,
  backSpeed: 150,
  looped: true,
});
var scroll = new SmoothScroll('a[href*="#"]');

