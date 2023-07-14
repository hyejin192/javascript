let panoWrap = document.querySelector('.sj_panorama .pano_wrap');
let listWrap = panoWrap.querySelector('.list');
let item = listWrap.children; // listWrap의 자식


let listClone = null; // 강제로 비워놓겠다
let itemWidth = item[0].offsetWidth; // 이미지 하나의 넓이 => 300
let itemLength = item.length // 10
let listWidth = itemWidth * itemLength; // 300 * 10
console.log(listWidth) // 3000
let move = 0;
// let controls = document.querySelector('.sj_panorama .controls');
let controls = panoWrap.parentElement.querySelector('.controls'); // 부모 입장에서 controls를 부른다
let timer;


// 셋 다 동일
// function init(){}
// var init =function(){}
// var init =()=>{}
function init() {
    panoWrap.style.width = listWidth * 2 + "px";
    listWrap.style.width = listWidth + "px";
    panoWrap.appendChild(listWrap.cloneNode(true))
    // 막내자식으로 첨부하겠다 -> listWrap를 복사하되 자식까지 다 포함해서 복사
    // ul이 두개가 생김
    listClone = panoWrap.children; // listClone에 집어넣음
    console.log(listClone) // 유사배열 (배열처럼 보이지만 한계가 있음 실제 배열처럼 쓸 수 없음
    render();
    add();
    event();

}

let render=()=>{
    move += 1;
    // console.log(Array.from(listClone)) // 실제배열
    Array.from(listClone).forEach(function (clone) {
        clone.style.transform = `translateX(${-move}px)`;
    })

    timer=window.requestAnimationFrame(render)
}

let add = function(){
    setInterval(function(){
        panoWrap.appendChild(listWrap.cloneNode(true));
        listClone = panoWrap.children;
    },10000); // 10초마다 ul 전체가 복사

}

let event=function(){
    controls.querySelector('.play_on').addEventListener('click',function(e){
        e.preventDefault();
        //console.log(this)
        if(this.classList.contains('active')){
            this.classList.remove('active')
            window.cancelAnimationFrame(timer)
        }else{
            this.classList.add('active')
            render();
        }

    })
}



window.addEventListener('load', function () {
    init();
})