// window.onscroll=()=>{scrollFuntion()}
let scrollFuntion;

// window.onscroll=function(){
//    console.log("실행")
// }


scrollFuntion=()=>{
    // 둘 중 하나라도 true면 true
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80) {
        document.getElementById('navbar').style.padding="30px 10px"
        document.getElementById('logo').style.fontSize="25px"
    }else {
        document.getElementById('navbar').style.padding="90px 10px"
        document.getElementById('logo').style.fontSize="35px"
    }
}

window.onscroll=scrollFuntion;