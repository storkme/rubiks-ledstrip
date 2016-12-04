function rotateSide(c1, o = 0) {
    let c = [...c1];
    c[o] = c1[o + 6];
    c[o + 1] = c1[o + 7];
    c[o + 2] = c1[o];
    c[o + 3] = c1[o + 1];
    c[o + 4] = c1[o + 2];
    c[o + 5] = c1[o + 3];
    c[o + 6] = c1[o + 4];
    c[o + 7] = c1[o + 5];
    return c;
}

function thrice(f, a) {
    //thrice
    //thrice
    //thrice
    return f(f(f(a)));
}

module.exports.moves = {
    f(c) {
        let c1 = [...c];

        c1[20] = c[36];
        c1[21] = c[37];
        c1[22] = c[38];

        c1[36] = c[51];
        c1[37] = c[52];
        c1[38] = c[45];

        c1[13] = c[20];
        c1[14] = c[21];
        c1[15] = c[22];

        c1[45] = c[15];
        c1[51] = c[13];
        c1[52] = c[14];

        c1 = rotateSide(c1, 0);

        return c1;
    },
    b(c) {
        let c1 = [...c];

        c1[9] = c[47];
        c1[10] = c[48];
        c1[11] = c[49];

        c1[18] = c[11];
        c1[24] = c[9];
        c1[25] = c[10];

        c1[40] = c[24];
        c1[41] = c[25];
        c1[42] = c[18];

        c1[47] = c[40];
        c1[48] = c[41];
        c1[49] = c[42];

        c1 = rotateSide(c1, 27);

        return c1;
    },
    u(c) {
        let c1 = [...c];

        c1[0] = c[45];
        c1[1] = c[46];
        c1[2] = c[47];
        c1[18] = c[0];
        c1[19] = c[1];
        c1[20] = c[2];
        c1[27] = c[18];
        c1[28] = c[19];
        c1[29] = c[20];
        c1[45] = c[27];
        c1[46] = c[28];
        c1[47] = c[29];
        c1 = rotateSide(c1, 9);
        return c1;
    },
    d(c) {
        let c1 = [...c];

        c1[4] = c[22];
        c1[5] = c[23];
        c1[6] = c[24];

        c1[22] = c[31];
        c1[23] = c[32];
        c1[24] = c[33];

        c1[31] = c[49];
        c1[32] = c[50];
        c1[33] = c[51];


        c1[49] = c[4];
        c1[50] = c[5];
        c1[51] = c[6];
        c1 = rotateSide(c1, 36);
        return c1;
    },
    l(c) {
        let c1 = [...c];

        c1[0] = c[9];
        c1[6] = c[15];
        c1[7] = c[16];

        c1[9] = c[31];
        c1[15] = c[29];
        c1[16] = c[30];


        c1[29] = c[42];
        c1[30] = c[43];
        c1[31] = c[36];

        c1[36] = c[0];
        c1[42] = c[6];
        c1[43] = c[7];
        c1 = rotateSide(c1, 18);
        return c1;
    },
    r(c) {
        let c1 = [...c];

        c1[2] = c[38];
        c1[3] = c[39];
        c1[4] = c[40];

        c1[11] = c[2];
        c1[12] = c[3];
        c1[13] = c[4];

        c1[27] = c[13];
        c1[33] = c[11];
        c1[34] = c[12];

        c1[38] = c[33];
        c1[39] = c[34];
        c1[40] = c[27];

        c1 = rotateSide(c1, 45);

        return c1;
    },

    //'inverse' moves - really we just call one of the above three times
    f_: c => thrice(module.exports.moves.f, c),
    b_: c => thrice(module.exports.moves.b, c),
    u_: c => thrice(module.exports.moves.u, c),
    d_: c => thrice(module.exports.moves.d, c),
    l_: c => thrice(module.exports.moves.l, c),
    r_: c => thrice(module.exports.moves.r, c),
};

module.exports.cube = () => {
    return [
        0, 0, 0, 0, 0, 0, 0, 0, 0, //front
        1, 1, 1, 1, 1, 1, 1, 1, 1, //top
        2, 2, 2, 2, 2, 2, 2, 2, 2, //left
        3, 3, 3, 3, 3, 3, 3, 3, 3, //back
        4, 4, 4, 4, 4, 4, 4, 4, 4, //bottom
        5, 5, 5, 5, 5, 5, 5, 5, 5 //right
    ];
};