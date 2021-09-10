$('section.galeria .imagens').slick({
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: false,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            centerMode: true,
            slidesToShow: 1,
        }
    }]
})