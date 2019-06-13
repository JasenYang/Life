const init = require('../main/main');

describe('init()', () => {
    it('should calculate the remaindar', () => {
        expect(init([
            [0,0,1],
            [0,0,1],
            [0,0,1]
        ])).toBe([
            [0,0,0],
            [0,1,1],
            [0,0,0]
        ].toString());
    });
    it('should calculate', function () {
        expect(init([
            [0,0,1],
            [0,1,0],
            [0,0,1]
        ])).toBe([
            [0,0,0],
            [0,1,1],
            [0,0,0]
        ].toString());
    });
});
