let preScrollpos=window.pageYOffset; // 이전값
console.log("이전 값 :",preScrollpos) 
// 스크롤을 화면에서 어디에 있든 위치값을 나타냄

window.onscroll=function(){
// = window.addEventListener('scroll',function(){})
let currentScrollPos = window.pageYOffset; // 현재값
console.log("현재 값 :",currentScrollPos); 
// 스크롤을 움직일 때마다 나옴
if(preScrollpos>currentScrollPos) {
    // 현재값이 이전값보다 작으면 = 스크롤을 올리면
    document.getElementById('navbar').style.top="0"
}else {
    // 현재값이 이전값보다 크면 = 스크롤을 내리면
    document.getElementById('navbar').style.top="-63px"
}
// preScrollpos(이전값)의 값이 자꾸 바껴야 현재값보다 큰지 작은지를 인식
preScrollpos=currentScrollPos;
} 
