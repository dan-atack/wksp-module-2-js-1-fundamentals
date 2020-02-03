// -------------------------------------------------------------
// Control Flow Exercises
// ----------
// note: need to have covered control flow for these exercises
// -------------------------------------------------------------

// Q9
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.
//
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

let board = "";
let oddLine = true;   // to set up alternating pattern between lines we'll track if it's an odd line or not...

for (let x = 1; x <= 64; x++) {
    if (oddLine) {
        if (x % 2 === 0) {
            board += "_";
        } else {
            board += "#";
        }
    } else {    // Pattern is reversed for every alternate line.
        if (x % 2 === 0) {
            board += "#";
        } else {
            board += "_";
        }
    }
    if (x % 8 === 0) {
        board += "\n";
        if (oddLine) {
            oddLine = false;
        } else {
            oddLine = true;
        }
    }
};

console.log(board);