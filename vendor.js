require('dotenv').config();
const events = require('./events');
const faker = require('faker');//create fake data
const store = process.env.STORE;


class Order {
    constructor(store) {
        this.store = store;
        this.orderId = faker.datatype.uuid();
        this.customerName = faker.name.findName();
        this.address = faker.address.cityName();
    }
}
setTimeout(() => {
    let fake = new Order(store);
    events.emit('pickup', fake);
}, 5000);

events.on('delivered', (payload) => {
    console.log(`VENDOR: thank you delever ${payload.orderId}`);
})

module.exports = Order;