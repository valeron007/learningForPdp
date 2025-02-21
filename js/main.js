import Slider from "./slider/slider.js";
import Carousel from "./carousel/carousel.js";
import MyCustomTag from "./mycustomtag/mycustomtag.js";
import CleanupComponent from "./cleanupcomponent/cleanupcomponent.js";
import SampleComponent from "./insidecomponent/insidecomponent.js";

if (!customElements.get('wcia-slider')) {
    customElements.define('wcia-slider', Slider);
}

if (!customElements.get('wcia-photo-carosel')) {
    customElements.define('wcia-photo-carosel', Carousel);
}

if (!customElements.get('my-custom-tag')) {
    customElements.define('my-custom-tag', MyCustomTag);
}


if (!customElements.get('cleanup-component')) {
    customElements.define('cleanup-component', CleanupComponent);
}

if (!customElements.get('sample-component')) {
    customElements.define('sample-component', SampleComponent);
}