export default class Slider extends HTMLElement {
    static get observedAttributes() {
        return ['value', 'backgroundColor'];
    }

    set value(val) {
        this.setAttribute('value', val);
    }

    get value() {
        return this.getAttribute('value');
    }

    set backgroundcolor(val) {
        this.setAttribute('backgroundcolor', val);
    }

    get backgroundcolor() {
        this.getAttribute('backgroundcolor');
    }

    refreshSlider(value) {
        if (this.querySelector('.thumb')) {
            console.log('ref this.offsetWidth=', this.offsetWidth);
            console.log('ref value=', value);
            console.log('value new=', (value / 100 *
                this.offsetWidth - this.querySelector('.thumb').offsetWidth / 2) + 'px');

            this.querySelector('.thumb').style.left = (value / 100 *
                this.offsetWidth - this.querySelector('.thumb').offsetWidth / 2) + 'px';
        }
    }

    setColor(color) {
        if (this.querySelector('.bg-overlay')) {
            this.querySelector('.bg-overlay').style.backgroundcolor = `linear-gradient(to right, ${color} 0%, ${color}00 100%)`
        }
    }

    connectedCallback() {
        this.innerHTML = '<div class="bg-overlay"></div><div class="thumb"></div>';

        document.addEventListener('mousemove', e => this.eventHandler(e));
        document.addEventListener('mouseup', e => this.eventHandler(e));
        document.addEventListener('mousedown', e => this.eventHandler(e));
        this.refreshSlider(this.value);
        this.setColor(this.backgroundcolor);
    }

    updateX(x) {
        console.log('x=', x);
        console.log('thumb.offsetWidth=' + this.querySelector('.thumb').offsetWidth);
        let hPos = x - this.querySelector('.thumb').offsetWidth / 2;
        console.log('hPos=', hPos);
        console.log('this.offsetWidth=', this.offsetWidth);
        if (hPos > this.offsetWidth) {
            hPos = this.offsetWidth
        }

        if (hPos < 0) {
            hPos = 0;
        }
        this.value = (hPos / this.offsetWidth) * 100;
        console.log('value=', this.value);
    }

    eventHandler(e) {
        const bounds = this.getBoundingClientRect();
        const x = e.clientX - bounds.left;

        switch (e.type) {
            case 'mousedown':
                this.isDragging = true;
                this.updateX(x);
                this.refreshSlider(this.value);
                break;
            case 'mouseup':
                this.isDragging = false;
                break;
            case 'mousemove':
                if (this.isDragging) {
                    this.updateX(x);
                    this.refreshSlider(this.value)
                }
                break;
        }
    }

    attributeChangedCallback(name, oldVal, newValue) {
        switch (name) {
            case 'value':
                this.refreshSlider(newValue);
                break;

            case 'backgroundcolor':
                this.setColor(newValue);
                break;
        }
    }

}