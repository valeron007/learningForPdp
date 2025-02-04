export default class Carousel extends HTMLElement {
    connectedCallback() {
        this._photoIndex = 0;
        this._photos = this.getAttribute('photos').split(',');

        this.innerHTML = `
            <h2>${this.getAttribute('title')}</h2>
            <h4>${this.getAttribute('author')}</h4>
            <div class="image-container"></div>
            <button class="back">&lt</button>
            <button class="forward">&gt</button>
        `;
        this.showPhoto();

        this.querySelector('button.back').addEventListener('click', event => {
            this.onBackButtonCklick(event);
        });

        this.querySelector('button.forward').addEventListener('click', event => {
            this.onForwardButtonCklick(event);
        })

    }

    showPhoto() {
        this.querySelector('.image-container').style.backgroundImage = `url(${this._photos[this._photoIndex]})`;
    }

    onBackButtonCklick(event) {
        this._photoIndex--;

        if (this._photoIndex < 0) {
            this._photoIndex = 0;
            return;
        }

        this.showPhoto();
    }

    onForwardButtonCklick(event) {
        this._photoIndex++;

        if (this._photoIndex >= this._photos.length) {
            this._photoIndex = this._photos.length - 1;
            return;
        }

        this.showPhoto();
    }
}