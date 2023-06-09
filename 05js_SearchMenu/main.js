function myFunction() {
    // id는 배열로 들어오지 않음
    let input = document.getElementById('mySearch');

    // toUpperCase() : 대문자로 변형
    // .value : input 태그에 적힌 값을 확인
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('myMenu');
    // li는 여러개이기 때문에 배열로 들어옴
    let li = ul.getElementsByTagName('li');

    // console.log(li)

    for(let i=0; i<li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        // a.innerHTML -- a태그의 text를 추출
        // console.log(a.innerHTML.toUpperCase()) 
        if(a.innerHTML.toUpperCase().indexOf(filter)>-1) {
            // 해당하는 글자가 없으면 값이 -1로 나오기 때문에 해당하는 글자가 있을 때의 조건문
            li[i].style.display="block";
        }else {
            // 해당하는 글자가 없을 때의 조건문
            li[i].style.display="none";
        }
        
    }
}