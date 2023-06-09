// Javascript

let acc = document.getElementsByClassName('accordion') // classname이므로 .찍지 말기

console.log(acc[i])
// console.log(acc.length)

for(let i=0; i<acc.length; i++){ //length = 3
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active")
        // nextElementSibling : 클릭한 것의 다음요소 (동생)
        let panel = this.nextElementSibling;

        // 0 --> false
        // 0을 제외한 숫자 --> true
        // scrollHeight : 화면바깥으로 삐져나간 부분까지 포함해서 전체의 글의 높이
        if(panel.style.maxHeight) {
            panel.style.maxHeight=null;
        }else {
            // 값이 0이라면 (fasle)
            panel.style.maxHeight=panel.scrollHeight+"px";
        }
    });
} 
