let currentCookie = document.cookie;
let cookieCheck = currentCookie.indexOf('green')
console.log(cookieCheck)

if(cookieCheck>-1){
    document.querySelector('.notice').style.display="none";
}else {
    document.querySelector('.notice').style.display="block";
}

document.querySelector('.hide').addEventListener('click',()=>{
    let date = new Date();
    date.setDate(date.getDate() + 7);
    let setCookie = "CookieName = green; ";
        setCookie += "expires="+ date.toUTCString();

    document.cookie=setCookie;


})

document.querySelector('.close').addEventListener('click',()=>{
    document.querySelector('.notice').style.display="none"; 
    // this.parentElement.style.display="none"; // this를 쓸 땐 화살표 함수 쓰지 말기
})