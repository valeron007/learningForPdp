import Strings from '../strings/strings';

export default class WebHarpApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<webharp-string strings="${this.getAttribute('strings')}"></webharp-string>`
    }
}

if (!customElements.get('webharp-app')) {
    customElements.define('webharp-app', WebHarpApp);
}