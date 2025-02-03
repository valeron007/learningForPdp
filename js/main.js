import Slider from "./slider/slider.js";
import Carousel from "./carousel/carousel.js";

if (!customElements.get('wcia-slider')) {
    customElements.define('wcia-slider', Slider);
}

if (!customElements.get('wcia-photo-carosel')) {
    customElements.define('wcia-photo-carosel', Carousel);
}