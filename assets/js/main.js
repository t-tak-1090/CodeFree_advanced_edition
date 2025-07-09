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

// TOPへ戻るボタン
const backToTopBtn = document.querySelector("#js-backToTop");
const contactBtn = document.querySelector(".p-btn__contact");
const footer = document.querySelector("#js-footer");

function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}
backToTopBtn.addEventListener("click", scroll_top);

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const footerTop = footer.getBoundingClientRect().top + scrollY;
    const footerHeight = footer.offsetHeight;

    // 表示制御
    if (scrollY > 100) {
        backToTopBtn.classList.add('is-active');
        contactBtn.classList.add('is-active');
    } else {
        backToTopBtn.classList.remove('is-active');
        contactBtn.classList.remove('is-active');
    }

    // フッターとの重複を防ぐ
    const contactBottom = scrollY + windowHeight;
    const contactHeight = contactBtn.offsetHeight;

    if (contactBottom >= footerTop) {
        // フッターと重複する場合、フッターの上に配置
        contactBtn.classList.add('is-stopped');
        const offset = contactBottom - footerTop; // 20pxの余白を追加
        contactBtn.style.bottom = `${offset}px`;
    } else {
        // 通常の位置に戻す
        contactBtn.classList.remove('is-stopped');
        contactBtn.style.bottom = `0px`;
    }
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

// scrollhint
new ScrollHint(".js-scroll", {
    i18n: {
        scrollable: "横スクロール",
    },
});