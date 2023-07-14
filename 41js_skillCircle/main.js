let counterDate=$('.box h3');
let executed = false;

$(window).scroll(function(){
    let $scroll= $(this).scrollTop() + 200;
    let $offset=$('.easypiechart').offset().top;
    if($scroll>$offset){
        pieChart()
        
        if(!executed){
            counterDate.each(function(){
                let current=$(this);
                let target = current.attr('data-rate'); // 90 85
                // A.animate({width:100%},시간,ease,끝나는 할 일)
                /* $({변수:초기값}).animate({변수:종료값},{
                    옵션
                }) */
                $({rate:0}).animate({rate:target},{
                    duration:2500,
                    progress:function(){
                        //중간중간에 할 일
                        let now = this.rate;
    
                        current.text(Math.ceil(now)+"%")
                    }
                })
            })
        }

        executed = true;

    }
})


function pieChart() {
    $('.chart').easyPieChart({
        barColor: '#13456d',
        scaleColor: false,
        trackColor: '#e8e8e8',
        lineWidth: 15,
        size: 180,
        animate: 2000,
    });
}