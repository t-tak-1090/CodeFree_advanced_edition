// フォントの読み込み
(function(d) {
    var config = {
        kitId: 'tlm3mkk',
        scriptTimeout: 3000,
        async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// ハンバーガーメニュー
const hamburger = document.querySelector('#js-hamburger');
const nav = document.querySelector('.p-nav-sp');
const navLinks = document.querySelectorAll('.p-nav-sp__item a');

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
    });
});

// 生徒さんたちの声のスライダー
const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    slidesPerView: 3,
    loop: true,
    spaceBetween: 35,
    navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        769: {
            slidesPerView: 3,
        }
    }
});

// アコーディオン
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".p-faq__accordion-item");

    items.forEach((item) => {
        const button = item.querySelector(".p-faq__accordion-question");
        const symbol = button.querySelector(".p-faq__accordion-symbol");

        button.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");

            // すべて閉じる（アコーディオン方式）
            items.forEach((el) => {
                el.classList.remove("open");
            });

            // クリックしたものだけ開ける
            if (!isOpen) {
                item.classList.add("open");
            }
        });
    });
});
