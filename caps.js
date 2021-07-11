
const events = require('./events');
require('./driver');
require('./vendor');

events.on('pickup', pickUp);
events.on('in-transit', inTransit);
events.on('delivered', delivered);

function pickUp(payload) {
    let output = {
        event: 'pickup',
        time: new Date().toLocaleString(),
        payload: payload,
    };
    console.log('EVENT', output);
}


function inTransit(payload) {
    let output = {
        event: 'in-transit',
        time: new Date().toLocaleString(),
        payload: payload,
    };
    console.log('EVENT', output);
}



function delivered(payload) {
    let output = {
        event: 'delivered',
        time: new Date().toLocaleString(),
        payload: payload,
    };
    console.log('EVENT', output);
}

module.exports = {
    pickUp,
    inTransit,
    delivered,
};


