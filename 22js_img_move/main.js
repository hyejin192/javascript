let clickImage = document.querySelector('#imgClick');
let imgElement = document.getElementById('myImage');
let main = document.getElementById('main');

let images = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
    "img/06.jpg",
    "img/07.jpg",
    "img/08.jpg",
    "img/09.jpg"
];

let mousePos = {x:0, y:0};
let currentIndex = 0;
let changeI = false;

function changeImage(e){
    if(changeI){
        return;
    }

    changeI=true;

    let currentImage = images[currentIndex]; // 0번이기 때문에 첫번째 이미지가 나옴
    imgElement.src = currentImage;
    currentIndex++;


    if(currentIndex>=images.length){
        currentIndex=0;
    }

    // setInterval(할일,시간) : 시간마다 할 일
    // setTimeout(할일,시간) : 시간이 지나고 할 일 (반복적인게 아닌 한 번 실행)

    setTimeout(() => {
        changeI = false
    }, 500); // 0.5초 지난 후에 할 일 (0.5초 기다렸다가 이미지가 바뀜)

}

imgElement.addEventListener("mousemove",changeImage);

// main으로 바꾸면 main 페이지에서만 작동되고 window로 바꾸면 window 전체에서 움직인다
main.addEventListener('mousemove',function(e){
    // e.clientX : 현재화면에서 마우스의 x축의 값을 추출
    // e.clientY : 현재화면에서 마우스의 y축의 값을 추출
    mousePos.x= (e.clientX/window.innerWidth*100);
    mousePos.y= (e.clientY/window.innerHeight*100);
    // console.log(e.clientX,e.clientY)
    clickImage.style.transform = `translateY(${mousePos.y}px) translateX(${mousePos.x}px)`;
})