import Template from './template.js'

export default class CoordPicker extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = Template.render();
        this.dom = Template.mapDOM(this.shadowRoot);

        document.addEventListener('mousemove', e => this.eventHandler(e));
        document.addEventListener('mouseup', e => this.eventHandler(e));
        this.addEventListener('mousedown', e => this.eventHandler(e));
    }

    static get observedAttributes() {
        return ['x', 'y', 'backgroundColor'];
    }

    set x(val) {
        this.setAttribute('x', val);
    }

    get x() {
        return this.getAttribute('x');
    }

    set y(val) {
        this.setAttribute('y', val);
    }

    get y() {
        return this.getAttribute('y');
    }

    set backgroundcolor(val) {
        this.setAttribute('backgroundcolor', val);
    }

    get backgroundcolor() {
        this.getAttribute('backgroundcolor');
    }

    refreshCoordinates() {
        this.dom.thumb.style.left = (this.x / 100 * this.offsetWidth - this.dom.thumb.offsetWidth / 2) + 'px';
        this.dom.thumb.style.top = (this.y / 100 * this.offsetWidth - this.dom.thumb.offsetWidth / 2) + 'px';
    }


    setColor(color) {
        if (this.querySelector('.bg-overlay')) {
            this.querySelector('.bg-overlay').style.backgroundcolor = `linear-gradient(to right, ${color} 0%, ${color}00 100%)`
        }
    }



    updateXY(x, y) {
        let hPos = x - this.dom.thumb.offsetWidth / 2;
        let vPos = y - this.dom.thumb.offsetHeight / 2;

        if (hPos > this.offsetWidth) {
            hPos = this.offsetWidth
        }

        if (hPos < 0) {
            hPos = 0;
        }

        if (vPos > this.offsetHeight) {
            hPos = this.offsetHeight;
        }

        if (vPos < 0) {
            vPos = 0;
        }

        this.x = (hPos / this.offsetWidth) * 100;
        this.y = (vPos / this.offsetHeight) * 100;
    }

    eventHandler(e) {
        const bounds = this.getBoundingClientRect();
        const coords = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top,
        }

        switch (e.type) {
            case 'mousedown':
                this.isDragging = true;
                this.updateXY(coords.x, coords.y);
                this.refreshCoordinates();
                break;
            case 'mouseup':
                this.isDragging = false;
                break;
            case 'mousemove':
                if (this.isDragging) {
                    this.updateXY(coords.x, coords.y);
                    this.refreshCoordinates()
                }
                break;
        }
    }

    attributeChangedCallback(name, oldVal, newValue) {
        switch (name) {
            case 'x':
            case 'y':
                this.refreshCoordinates();
                break;
            case 'backgroundcolor':
                this.style.backgroundcolor = newValue;
                break;
        }
    }

}

if (!customElements.get('wcia-coord-picker')) {
    customElements.define('wcia-coord-picker', CoordPicker);
}