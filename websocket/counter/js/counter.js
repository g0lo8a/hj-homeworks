'use strict';

const connect = new WebSocket('wss://neto-api.herokuapp.com/counter');

const counter = document.querySelector('.counter');
const output = document.querySelector('output.errors');

connect.addEventListener('message', event => {
    counter.textContent = JSON.parse(event.data).connections;
    output.value = JSON.parse(event.data).errors;
});

window.addEventListener('beforeunload', event => connect.close(1000));
