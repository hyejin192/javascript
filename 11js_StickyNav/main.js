let myFunction;
// 호이스팅 : 호이스팅은 JavaScript에서 변수 및 함수 선언이 스코프의 맨 위로 "끌어올려지는" 동작
// 이름이 있는 함수는 무조건 호이스팅이 됨 메모리상에서 위로 올려짐
// myFunction 화살표함수줄은 이름이 없는 함수이기 때문에 호이스팅이 안됨 
// 그래서 window.onscroll = myFunction;를 밑으로 내려야함

let navbar = document.getElementById('navbar')
// .offsetTop : 내영역 위의 공간의 높이값
let sticky = navbar.offsetTop; 
console.log(sticky) // 124

myFunction =()=>{
    // pageYOffset 프로퍼티는 window 객체에 속하므로, window.pageYOffset 형태로 접근
    if(window.pageYOffset>sticky){
        // 124보다 크면 sticky라는 클래스명을 붙여라
        navbar.classList.add('sticky')
    }else {
        navbar.classList.remove('sticky')
    }
}


window.onscroll = myFunction;