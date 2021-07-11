
const events = require('./events');


events.on('pickup', pickup);
function pickup(payload) {
    setTimeout(() => {
        console.log(`DRIVER: picked up ${payload.orderId}`);
        events.emit('in-transit', payload);
    }, 1000);
    setTimeout(() => {
        console.log(`DRIVER: delivered up ${payload.orderId}`);
        events.emit('delivered', payload);
    }, 3000);
}

module.exports = pickup;