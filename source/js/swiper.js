new Swiper('.image-slider', {
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    }
});
