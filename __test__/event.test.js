

const { afterEach, it, expect } = require('@jest/globals');
const events = require('../events');

describe('test', () => {
    let consoleSpy;//we use it because the result show console.log
    let output = {
        store: 'Shein',
        orderId: '8d5b48fb-d773-4961-932e-8d12b5ffe616',
        customerName: 'Keith Dickens',
        address: 'Florin'
    }
    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    it('pickup', async () => {
        events.emit('pickup', output);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

    it('in-transit', async () => {
        events.emit('in-transit', output);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })

    it('delivered', async () => {
        events.emit('delivered', output);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
})