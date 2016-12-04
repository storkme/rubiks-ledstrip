const {moves} = require('./cube');
const {printCube} = require('./util');
const assert = require('assert');

const sum = a => a.reduce((i, j) => i + j, 0);
const cubeSum = 135;
const c = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, //front
    1, 1, 1, 1, 1, 1, 1, 1, 1, //top
    2, 2, 2, 2, 2, 2, 2, 2, 2, //left
    3, 3, 3, 3, 3, 3, 3, 3, 3, //back
    4, 4, 4, 4, 4, 4, 4, 4, 4, //bottom
    5, 5, 5, 5, 5, 5, 5, 5, 5 //right
];


describe('basic 1-move transformations flrbud', () => {
    it('f', () => {
        const c2 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, //front
            1, 1, 1, 1, 2, 2, 2, 1, 1, //top
            2, 2, 4, 4, 4, 2, 2, 2, 2, //left
            3, 3, 3, 3, 3, 3, 3, 3, 3, //back
            5, 5, 5, 4, 4, 4, 4, 4, 4, //bottom
            1, 5, 5, 5, 5, 5, 1, 1, 5 //right
        ];

        //sanity check - make sure our solution cube has the right sum
        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.f(c), c2);
    });

    it('r', () => {

        const c2 = [
            0, 0, 4, 4, 4, 0, 0, 0, 0, //front
            1, 1, 0, 0, 0, 1, 1, 1, 1, //top
            2, 2, 2, 2, 2, 2, 2, 2, 2, //left
            1, 3, 3, 3, 3, 3, 1, 1, 3, //back
            4, 4, 3, 3, 3, 4, 4, 4, 4, //bottom
            5, 5, 5, 5, 5, 5, 5, 5, 5 //right
        ];


        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.r(c), c2);
    });

    it('l', () => {


        const c2 = [
            1, 0, 0, 0, 0, 0, 1, 1, 0, //front
            3, 1, 1, 1, 1, 1, 3, 3, 1, //top
            2, 2, 2, 2, 2, 2, 2, 2, 2, //left
            3, 3, 4, 4, 4, 3, 3, 3, 3, //back
            0, 4, 4, 4, 4, 4, 0, 0, 4, //bottom
            5, 5, 5, 5, 5, 5, 5, 5, 5 //right
        ];


        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.l(c), c2);
    });
    it('b', () => {


        const c2 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, //front
            5, 5, 5, 1, 1, 1, 1, 1, 1, //top
            1, 2, 2, 2, 2, 2, 1, 1, 2, //left
            3, 3, 3, 3, 3, 3, 3, 3, 3, //back
            4, 4, 4, 4, 2, 2, 2, 4, 4, //bottom
            5, 5, 4, 4, 4, 5, 5, 5, 5 //right
        ];

        //sanity check - make sure our solution cube has the right sum
        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.b(c), c2);
    });

    it('d', () => {
        const c2 = [
            0, 0, 0, 0, 2, 2, 2, 0, 0, //front
            1, 1, 1, 1, 1, 1, 1, 1, 1, //top
            2, 2, 2, 2, 3, 3, 3, 2, 2, //left
            3, 3, 3, 3, 5, 5, 5, 3, 3, //back
            4, 4, 4, 4, 4, 4, 4, 4, 4, //bottom
            5, 5, 5, 5, 0, 0, 0, 5, 5 //right
        ];

        //sanity check - make sure our solution cube has the right sum
        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.d(c), c2);
    });


    it('u', () => {

        const c2 = [
            5, 5, 5, 0, 0, 0, 0, 0, 0, //front
            1, 1, 1, 1, 1, 1, 1, 1, 1, //top
            0, 0, 0, 2, 2, 2, 2, 2, 2, //left
            2, 2, 2, 3, 3, 3, 3, 3, 3, //back
            4, 4, 4, 4, 4, 4, 4, 4, 4, //bottom
            3, 3, 3, 5, 5, 5, 5, 5, 5 //right
        ];

        //sanity check - make sure our solution cube has the right sum
        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.u(c), c2);
    });

});


describe('a sampling of 2-moves', () => {
    it('ff', () => {
        const c2 = [
            0, 0, 0, 0, 0, 0, 0, 0, 0, //front
            1, 1, 1, 1, 4, 4, 4, 1, 1, //top
            2, 2, 5, 5, 5, 2, 2, 2, 2, //left
            3, 3, 3, 3, 3, 3, 3, 3, 3, //back
            1, 1, 1, 4, 4, 4, 4, 4, 4, //bottom
            2, 5, 5, 5, 5, 5, 2, 2, 5 //right
        ];

        //sanity check - make sure our solution cube has the right sum
        assert.equal(sum(c2), cubeSum, 'solution cube sum should = ' + cubeSum);

        assert.deepEqual(moves.f(moves.f(c)), c2);
    });
});

describe('calling a move and its inverse should cancel out', () => {
    const checkMove = m => it(m, () => assert.deepEqual(moves[m](moves[`${m}_`](c)), c));

    'frulbd'.split('').forEach(checkMove);
});

describe('calling a single function four times should have no effect', () => {
    it('f', () => {
        let c1 = c.slice();
        let f = moves.f;

        assert.deepEqual(f(f(f(f(c)))), c1);
    });
    it('r', () => {
        let c1 = c.slice();
        let f = moves.r;

        assert.deepEqual(f(f(f(f(c)))), c1);
    });
    it('u', () => {
        let c1 = c.slice();
        let f = moves.u;

        assert.deepEqual(f(f(f(f(c)))), c1);
    });
    it('d', () => {
        let c1 = c.slice();
        let f = moves.d;

        assert.deepEqual(f(f(f(f(c)))), c1);
    });
    it('l', () => {
        let c1 = c.slice();
        let f = moves.l;

        assert.deepEqual(f(f(f(f(c)))), c1);
    });
    it('b', () => {
        let c1 = c.slice();
        let f = moves.b;

        assert.deepEqual(f(f(f(f(c)))), c1);
    });
});

describe('manually entered sequences...', () => {

    it('frl', () => {
        const expected = [
            1, 0, 5, 4, 4, 0, 2, 1, 0,
            3, 1, 0, 0, 0, 2, 3, 3, 1,
            2, 2, 2, 2, 4, 4, 4, 2, 2,
            2, 3, 4, 4, 5, 3, 1, 1, 3,
            0, 5, 3, 3, 3, 4, 0, 0, 4,
            1, 1, 1, 5, 5, 5, 5, 5, 5
        ];
        let result = 'frl'.split('').reduce((a, n) => {
            return moves[n](a);
        }, c);

        assert.deepEqual(result, expected);
    });
    it('frld', () => {
        const expected = [
            1, 0, 5, 4, 4, 4, 4, 1, 0,
            3, 1, 0, 0, 0, 2, 3, 3, 1,
            2, 2, 2, 2, 5, 3, 1, 2, 2,
            2, 3, 4, 4, 5, 5, 5, 1, 3,
            0, 0, 0, 5, 3, 3, 3, 4, 4,
            1, 1, 1, 5, 4, 0, 2, 5, 5
        ];
        let result = 'frld'.split('').reduce((a, n) => {
            return moves[n](a);
        }, c);

        assert.deepEqual(result, expected);
    });
    it('frldu', () => {
        const expected = [
            1, 1, 1, 4, 4, 4, 4, 1, 0,
            3, 3, 3, 1, 0, 0, 0, 2, 1,
            1, 0, 5, 2, 5, 3, 1, 2, 2,
            2, 2, 2, 4, 5, 5, 5, 1, 3,
            0, 0, 0, 5, 3, 3, 3, 4, 4,
            2, 3, 4, 5, 4, 0, 2, 5, 5
        ];
        let result = 'frldu'.split('').reduce((a, n) => {
            // console.log('calling ' + n + ' on: ');
            // printCube(a);
            // console.log('  result: ');
            let r = moves[n](a);
            // printCube(r);

            if (sum(r) !== cubeSum) {
                // console.log('warning that is wrong!! cube sum was not correct!!!!');
                throw new Error('cube sum incorrect');
            }

            // console.log();
            return r;
        }, c);

        // console.log();
        // console.log('expected:');
        // printCube(expected);
        // console.log();

        assert.deepEqual(result, expected);
    });
    it('llllrrrr', () => {
        let result = 'llllrrrr'.split('').reduce((a, n) => {
            return moves[n](a);
        }, c);
        assert.deepEqual(result, c);
    });

    it('uurr', () => {
        const expected = [
            3, 3, 3, 3, 0, 0, 0, 0, 0,
            1, 1, 4, 4, 4, 1, 1, 1, 1,
            5, 5, 5, 2, 2, 2, 2, 2, 2,
            0, 0, 0, 3, 3, 3, 3, 0, 3,
            4, 4, 1, 1, 1, 4, 4, 4, 4,
            5, 5, 5, 5, 2, 2, 2, 5, 5
        ];
        let {u, r} = moves;

        let result = 'uurr'.split('').reduce((a, n) => {
            return moves[n](a);
        }, c);
        assert.deepEqual(result, expected);
    });
    it('uu', () => {
        let {u, r} = moves;
        assert.deepEqual(u(u(r(r(r(r(u(u(c)))))))), c);
    });
});

describe('some identity seq sum1 gave me', () => {
    // R' U' R' F' U F U' R' F R F' U' R U2 R

    it('rrruuurrrfffufuuurrrfrfffuuuruur', () => {
        let result = 'rrruuurrrfffufuuurrrfrfffuuuruur'.split('').reduce((a, n) => {

            let r = moves[n](a)

            return r;
        }, c);

        assert.deepEqual(result, c);
    });

    it('r_u_r_f_ufu_r_frf_u_ruur', () => {
        let result = ['r_', 'u_', 'r_', 'f_', 'u', 'f', 'u_', 'r_', 'f', 'r', 'f_', 'u_', 'r', 'u', 'u', 'r']
            .reduce((a, n) => moves[n](a), c);

        assert.deepEqual(result, c);
    })
});