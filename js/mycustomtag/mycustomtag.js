export default class MyCustomTag extends HTMLElement {

    constructor() {
        super();
        alert('constructor');
    }

    connectedCallback() {
        alert('hi from my tag');
        this.innerHTML = `<h2>${this.getAttribute('title')}</h2><button>Click me</button>`;
    }
}