const _ = require('lodash');

const {moves, cube} = require('./cube');
const keys = Object.keys(moves);


for (let i = 0; i < 1000000; i++) {
    let p = _.shuffle(_.range(5 + (Math.random() * 5)).map(i => keys[Math.floor(Math.random() * keys.length)]));
    let cs = p.reduce((a, n) => moves[n](a), cube());
    console.log(p.join(',') + '\t' + cs.join(''));
}