console.log("This is from Algorithms projects.");

// Module // Return the remain number after division

// console.log(7 % 3); // prints: 1

// FIZZBUZZ
// my version before solution // worked fine
// const fizzbuzz = (num) => {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FIZZBUZZ");
//     } else if (i % 3 === 0) {
//       console.log("FIZZ");
//     } else if (i % 5 === 0) {
//       console.log("BUZZ")
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzbuzz(20);


// // HARMLESS RANSOME NOTE

// // Big O Notation // How fast and efficient as the algorithms is an how scalable. Does the runtime of the algorithms according to the input and how much?
// // Key is the understand runtime (constant or variable), look at the figure given by Eric.
// // Four type of d
// // Harmless Ramson Note is practical in use


// const harmlessRansomNote = (noteText, magazineText) => {
//   const noteArray = noteText.toLowerCase().split(" ");
//   const magazineArray = magazineText.toLowerCase().split(" ");

//   const magazineObject = {};

//   // my version
//   // magazineArray.forEach((word) => {
//   //   if (!magazineObject[word]) { // if element in the array is not avaiable in the object, first create that property in the object and then assign a value of 0;
//   //     // them if the object available assign 1 as value and increment if the value of the element exist;
//   //     magazineObject[word] = 0;
//   //   } else {
//   //     // not required in this situation
//   //   }

//   //   magazineObject[word] = magazineObject[word] + 1;
//   // })
//   // console.log(magazineObject);


//   // solution version
//   magazineArray.forEach(word => {
//     if (!magazineObject[word]) {
//       magazineObject[word] = 0;
//     }
//     magazineObject[word]++;
//     // console.log(magazineObject["are"]); // Key to understand!
//   });

//   let noteIsPossible = true;
//   noteArray.forEach((word) => {
//     if (magazineObject[word]) {
//       magazineObject[word]--;
//       // console.log(word + " : " + magazineObject[word]);
//       if (magazineObject[word] < 0) {
//         noteIsPossible = false;
//       }
//     } else {
//       noteIsPossible = false;
//     }
//   })
//   console.log(noteIsPossible);
//   return noteIsPossible;
// }


// harmlessRansomNote("programmer is The Programmer", "the programmer is not just coder, programmer are the problem Solvers, look at the picture");


// harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');


// Palindrome

// const isPalindrome = (string) => {
//   const charactersArray = string.toLowerCase().split("");
//   const validCharacters = "abcdefghijklmnopqsrtuvxyz".split("");

//   let lettersArray = []
//   charactersArray.forEach((letter) => {
//     if (validCharacters.indexOf(letter) > -1) {
//       lettersArray.push(letter);
//     };
//   });
//   if (lettersArray.join("") === lettersArray.reverse().join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPalindrome("madam, I'm adam"));
// console.log(isPalindrome("madam"));


// Caeser Cipher

// const ceaserCipher = (str, num) => {
//   const stringArray = str.toLowerCase().split("");
//   const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

//   const cipheredLetterPosition = [];
//   const cipheredLetterArray = [];
//   const stringLetterPosition = stringArray.forEach((letter) => {
//     let currentIndex = alphabetArray.indexOf(letter) + num;
//     if (currentIndex < 0) {
//       console.log(`Lesser < case : current index ${currentIndex}`);
//       currentIndex = (currentIndex + 26 % 26);
//       cipheredLetterPosition.push((currentIndex));
//     } else if (currentIndex => 26) {
//       currentIndex = (currentIndex - 25) % 26;
//       cipheredLetterPosition.push((currentIndex));
//       console.log(`Greater > case: currentIndex ${currentIndex}`);
//     }
//   });

//   cipheredLetterPosition.forEach((position) => {
//     cipheredLetterArray.push(alphabetArray[position]);
//   });
//   const cipheredArray = cipheredLetterArray.join("");
//   console.log(cipheredArray);
//   console.log(cipheredLetterArray);
//   return stringLetterPosition;
// };
// console.log(ceaserCipher("Lawrence", 2));