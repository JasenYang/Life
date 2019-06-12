const main = require('../main/main');

describe('main()', () => {

    it('should calculate the remaindar', () => {
        expect(main([
            [0,0,1],
            [0,0,1],
            [0,0,1]
        ])).toBe([
            [0,0,0],
            [0,1,1],
            [0,0,0]
        ].toString());
    });
});
