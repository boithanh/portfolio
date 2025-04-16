import { loadBootstrap } from "./loadBoostrap";
function checkCarousel() {
    loadBootstrap().then((bootstrap) => {
        const carousel = document.querySelector("#carouselExampleIndicators");
        if (carousel) {
            new bootstrap.Carousel(carousel, {
                interval: 6000,
                ride: "carousel",
                pause: "hover",
                wrap: true,
                touch: true,
                keyboard: true,
            });
        } else {
            setTimeout(checkCarousel, 100);
        }
    }).catch((error) => {
        console.log('Error loading Bootstrap:', error);

    })

}
export default checkCarousel;