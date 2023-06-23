let slideIndex = 1;
showSlides(slideIndex) 

function showSlides(n){
    let slides = document.getElementsByClassName('mySlide')
    let dots = document.getElementsByClassName('dot')

    console.log(slideIndex)
    // slides.length = 3

    if(n>slides.length) {slideIndex = 1;}
    if(n<1) {slideIndex = slides.length;}

    for(let i=0; i<slides.length; i++) {
        slides[i].style.display="none"
    }

    for(let i=0; i<dots.length; i++) {
        dots[i].classList.remove('active');
    }
    
    // slides 배열에서 첫 번째 슬라이드 요소에 접근하기 위한 인덱스
    // slideIndex가 1, slideIndex - 1은 0
    slides[slideIndex - 1].style.display="block"; 
    dots[slideIndex -1].classList.add('active')
}

function plusSlides(n){
    showSlides(slideIndex += n) // slideIndex = slideIndex + 1
}

function currentSlide(n){
    showSlides(slideIndex = n)
}

// setInterval(function(){},시간)
// 3초마다 자동으로 실행
let stopSlide = setInterval(function(){
    plusSlides(1) // plusSlides(-1) : 반대로 실행
},3000)

let slidesshowCon = document.getElementById('slideshow-container');
slidesshowCon.addEventListener("click",function(){
    // 마우스를 올렸을 때 멈추게 하는 건 click부분에 mouseenter적기
    // setInterval 멈추기
    clearInterval(stopSlide)
})