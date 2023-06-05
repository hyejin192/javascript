// Javascript

let acc = document.getElementsByClassName('accordion') // classname이므로 .찍지 말기

console.log(acc[1])
// console.log(acc.length)

for(let i=0; i<acc.length; i++){ //length = 3
    acc[i].addEventListener('click',function(){
        this.classList.toggle("active")
    });
} 
