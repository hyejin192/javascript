window.onscroll=()=>{
/*     let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);

    if(currentScrollPos>20) {
        document.getElementById('navbar').style.top=0;
    }else{
        document.getElementById('navbar').style.top="-64px"
    } */

    console.log("body",document.body.scrollTop) // 안 적어도 상관없지만 보통은 같이 적는다 값은 0
    console.log("Element",document.documentElement.scrollTop)
    if(document.body.scrollTop>20 || document.documentElement.scrollTop>20) {
        document.getElementById('navbar').style.top=0;
    }else {
        document.getElementById('navbar').style.top="-64px"
    }
}