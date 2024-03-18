$(document).ready(function () {
    // change color navbar when scrolling
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("nav").css("background", "#fff");
            $("nav").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
        }
        else {
            $("nav").css("background", "transparent");
            $("nav").css("box-shadow", "none");
        }
    })

    // mobile navbar
    const mobile = document.querySelector(".burger-btn");
    const mobileLink = document.querySelector(".nav-menus");

    mobile.addEventListener("click",function(){
        mobile.classList.toggle("active");
        mobileLink.classList.toggle("active");
    })

    //heart
    $(".heart").on("click", function () {
        $(this).toggleClass("is-active");
    });


    // filter
    var mixer = mixitup('.product-list', {
        selectors: {
            target: '.product-card'
        },
        animation: {
            duration: 300
        }
    });

    // swiper
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerview: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerview: 2,
                spaceBetween: 20,
            },
            768: {
                slidePerview: 3,
                spaceBetween: 40,
            },
            1024: {
                slidesPerview: 3,
                spaceBetween: 50,
            },
        }
    });
})

