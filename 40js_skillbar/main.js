// jquery 기반
let offset = $('.main').offset().top - 400; // 문서에서 .main 위의 높이값 (main이 천장에 닿는 지점)
let executed = false;

$(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    console.log(wScroll)
    if (wScroll > offset) {
        if (!executed) {
            // jquery는 자동으로 for문이 돌아간다
            $('.skill-per').each(function () {
                let $this = $(this);
                let per = $this.attr('per');
                // A.attr(B) A가 가지고 있는 B라는 속성의 값을 가져옴
                // A.attr(B,C) A가 가지고 있는 B를 C로 바꾸라는 의미
                console.log(per)

                $this.css({width: per + "%"})
                $({aniValue: 0}).animate({
                    aniValue: per
                }, {duration: 1000,
                    step: function () {
                        // 애니메이션 사이사이에 할 일
                        $this.attr("per", Math.ceil(this.aniValue) + "%") // this -> animate를 의미
                    }
                })
            });
            executed = true;
        }

    }
})