
function checkCarousel() {
    import("bootstrap/dist/js/bootstrap.bundle.min").then((bootstrap) => {
        const carousel = document.querySelector("#carouselExampleIndicators");
        if (carousel) {
            new bootstrap.Carousel(carousel, {
                interval: 6000,
                ride: "carousel",
            });
        } else {
            setTimeout(checkCarousel, 100);
        }
    });
}
export default checkCarousel;