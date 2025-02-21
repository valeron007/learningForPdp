export default class WebHarpString extends HTMLElement {
    strum(params) {}
    stopStrum() {}
    connectedCallback() {
        this.innerHTML = `
            <div class="line"> 
            <style>
                webharp-string > .line {
                    background-color: white;
                    height: 100%;
                    width: 2px;
                }
            </style>
        `
    }
}

if (!customElements.get('webharp-string')) {
    customElements.define('webharp-string', WebHarpString);
}