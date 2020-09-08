
const form = document.querySelector('form');
const search = document.querySelector('input');
const text = document.querySelector('.text');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';
messageTwo.textContent = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/weather?address=' + location).then(response => {
        response.json().then(data => {
            if (data.error) {
                // console.log(data.error);
                messageOne.textContent = data.error;
            } else {
                // text.innerHTML = data.location + ' ' + data.forecast;
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast;
            }
        })
    })

})