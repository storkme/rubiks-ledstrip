const sides = ['front', 'top', 'left', 'back', 'bottom', 'right']

function padStart(s,l) {
    return Array(l - s.length).join(' ') + s;
}

module.exports.printCube = c => {
    for (let i = 0; i < 6; i++) {
        console.log(padStart(sides[i],7) + ': ' + c.slice(i * 9, (i + 1) * 9).join(','));
    }
};