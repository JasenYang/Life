const init = require('../main/init').default;

describe('init()', () => {

    it('should calculate the remaindar', () => {
        expect(init()).toBe(0);
    });
});