export default class CleanupComponent extends HTMLElement {
    connectedCallback() {
        this.counter = 0;
        this.timer = setInterval(() => {
            this.update();
        }, 1000);
    }

    update() {
        this.innerHTML = this.counter;
        this.counter--;
        console.log(this.counter);
    }

    disconnectedCallback() {
        clearInterval(this.timer);
    }

}