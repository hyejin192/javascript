let main = document.querySelector("#main");
let hero = document.querySelector(".hero");
let heroTitle = document.querySelectorAll(".hero_title>.ofh>h1");

let images = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
  "img/06.jpg",
  "img/07.jpg",
  "img/08.jpg",
  "img/09.jpg",
];

let settings = {
  inEnabled: false,
  count: 1,
  time: 50,
};
gsap.set(heroTitle, { x: "-200%", opacity:0});

const initHero = () => {
  gsap.set(heroTitle, { x: "-200%", opacity:0});
  showHero();
};

const showHero = () => {
  // stagger : 순서대로 나오게 함
  gsap.to(heroTitle, { rotation: 360, x: -3.5, duration: 1.75, stagger: 0.3, opacity:1});
};

function calcIndex(length) {
  settings.count++;
  if (settings.count == length) {
    settings.count = 0;
  }
  return settings.count;
}

function animateImages(e) {
  // 이미지 태그만들기
  let image = document.createElement("img"); // <img src="">
  let imageSize = 50;
  let countIndex = calcIndex(images.length);
  image.classList.add("hero_media");
  // src라는 속성을 image에 넣겠다
  image.setAttribute("src", images[countIndex]);
  image.style.width = `${imageSize}rem`;
  image.style.height = `${imageSize}rem`;
  hero.appendChild(image);
  let randomDeg = Math.floor(Math.random() * 15); // random() 0~1전까지의 실수를 추출
  // console.log(randomDeg)

  setTimeout(function () {
    image.style.transform = "scale(1)";
    image.style.transform = `rotate(${randomDeg}deg)`;
  }, 50);
  setTimeout(function () {
    image.style.transform = "scale(0.25)";
    image.style.filter = "blur(10px)";
    image.style.opacity = 0;
  }, 1500);
  setTimeout(function () {
    // 자식요소 없애기
    hero.removeChild(image);
  }, 2000);

  // console.log(countIndex)
  // e.page로 바꾸면 마우스가 어디에 있든 이미지가 따라오고
  // e.client는 그 영역 안에서만 작동
  image.style.top = e.clientY - imageSize * 5 + "px";
  image.style.left = e.clientX - imageSize * 5 + "px";
}

window.addEventListener("mousemove", function (e) {
  if (!settings.inEnabled) {
    settings.inEnabled = true;
    setTimeout(function () {
      settings.inEnabled = false;
    }, settings.time);
    animateImages(e);
  }
});

// onload : 문서 안에 있는 모든 요소 및 이미지 영상 등 자료가 모두
// load (업데이트)되면 실행되어라
window.onload = () => {
  window.addEventListener("scroll", function () {
    let scrollT = window.pageYOffset;
    if (scrollT >= main.offsetTop - 100) {
      console.log("실행");
      initHero();
    }
  });
};
