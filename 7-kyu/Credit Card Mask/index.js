/**
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"
*/

// return masked string
function maskify(cc) {
  // Solution 1
  // if (cc.length < 4) {
  //   return cc;
  // } else {
  //   const lastFourCharacters = cc.slice(-4);
  //   const encodedCharacters = cc.slice(4).split("").fill("#").join("");

  //   return encodedCharacters + lastFourCharacters;
  // }

  // Solution 2
  return cc
    .split("")
    .map((letter, index, array) => {
      if (index < array.length - 4) {
        return "#";
      } else {
        return letter;
      }
    })
    .join("");
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
