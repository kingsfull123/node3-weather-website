console.log('Loading from the js file.');

// fetch('http://localhost:3000/weather?address=boston')
//     .then(response => {
//         response.json().then(data => {
//             if (data.error) {
//                 console.log(data.error)
//             } else {
//                 console.log(data.forecast);
//                 console.log(data.location)
//             }
//         })
//     })

const form = document.querySelector('form');
const search = document.querySelector('input');
const text = document.querySelector('.text');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';
messageTwo.textContent = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let location = search.value;
    let url = 'http://localhost:3000/weather?address=' + location;
    fetch(url).then(response => {
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