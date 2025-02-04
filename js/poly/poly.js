const apiKey = 'AIzaSyC1PLW9BYYYt1A-5UBqMFpIurZVQUI_xXk';
const url = `https://poly.googleapis.com/v1/assets?keywords=parrot&apiKey=${apiKey}`;

const request = new XMLHttpRequest();
request.open('GET', url, true);
request.addEventListener('load', (event) => {
    console.log(JSON.parse(event.target.respone));
});
request.send();

