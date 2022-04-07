/*
The BOPE is the squad of special forces of police that usually handles the operations in the Favelas in Rio de Janeiro.

In this Kata you have to write a function that determine the number of magazines that every soldier has to have in his bag.

You will receive the weapon and the number of streets that they have to cross. Considering that every street the officer shoots 3 times. Bellow there is the relation of weapons:

PT92 - 17 bullets
M4A1 - 30 bullets
M16A2 - 30 bullets
PSG1 - 5 bullets

Example:

["PT92", 6] => 2 (6 streets 3 bullets each)
["M4A1", 6] => 1

The return Will always be an integer so as the params.
*/

function magNumber(info){
    const weapons = {
      PT92: 17,
      M4A1: 30,
      M16A2: 30,
      PSG1: 5
    }

    switch(info[0]) {
        case 'PT92':
        // return Math.ceil(weapons.PT92 / (info[1] * 3))
        return Math.round((info[1] * 3) > weapons.PT92 ? weapons.PT92 / (info[1] * 3) + 1 : weapons.PT92 / (info[1] * 3))
        break;
        case 'M4A1':
        return Math.round((info[1] * 3) > weapons.M4A1 ? weapons.M4A1 / (info[1] * 3) + 1 : weapons.M4A1 / (info[1] * 3))
        break;
        case 'M16A2':
        return Math.round((info[1] * 3) > weapons.M16A2 ? weapons.M16A2 / (info[1] * 3) + 1 : weapons.M16A2 / (info[1] * 3))
        break;
        case 'PSG1':
        return Math.round((info[1] * 3) > weapons.PSG1 ? weapons.PSG1 / (info[1] * 3) + 1 : weapons.PSG1 / (info[1] * 3))
        break;
    }
}
console.log(magNumber(["PT92", 6]));
console.log(magNumber(["M4A1", 8]));
console.log(magNumber(["M16A2", 19]));
console.log(magNumber(["PSG1", 31]));