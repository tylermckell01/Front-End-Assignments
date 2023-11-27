// Second try
let winnings = 300;

// tried to use this function to add a timer to display one slot character at a time,
// tried calling on line 66
// function timeout(slotCharacters) {
//   setTimeout(() => {
//     console.log(`SLOT: ${slotCharacters}`);
//   }, 2000);
// }

// i need to put ths funciton into my for loops and make a global array that contains all the symbols I
// want shown on the screen
function allSlotSymbols(slotSymbols) {
  console.clear();
  console.log(slotSymbols[0][1][2]);
}

let slot = [];

const goodSlotCharacters = ["$", "#"];

const badSlotCharacters = ["%", "!", "&"];

let slotOptionsRandomizer = ["GOOD", "BAD"];

async function playSM() {
  while (true) {
    let initialPrompt = prompt(
      `Welcome to the Slot Machine Game! Here are your options
      (1) To pull THE LEVER! You can win up to $100 per pull!
      (2) To take your winnings... 
      (3) Quit
      `
    );

    if (initialPrompt === "3") {
      break;
    } else if (initialPrompt === "1") {
      let randomNumber = Math.floor(
        Math.random() * slotOptionsRandomizer.length
      );
      let check = slotOptionsRandomizer[randomNumber];
      // console.log("");
      console.log("spinning... spinning... spinning... ");
      console.log("");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (check === "GOOD") {
        // add to their winnings
        for (i = 0; i < 3; i++) {
          let goodSlotCharacterRandomizer = Math.floor(
            Math.random() * goodSlotCharacters.length
          );
          slot.push(goodSlotCharacters[goodSlotCharacterRandomizer]);
        }
        console.log(`SLOT: ${slot}`);
        console.log("Your stash went up! That usually happens! Keep spinning!");
        slot = [];
        winnings += 100;
      } else if (check === "BAD") {
        // hurt their winnings
        if (winnings < 0) {
          console.log(`You owe me ${winnings}, game over for you`);
          break;
        } else {
          for (i = 0; i < 3; i++) {
            let badSlotCharacterRandomizer = Math.floor(
              Math.random() * badSlotCharacters.length
            );
            slot.push(badSlotCharacters[badSlotCharacterRandomizer]);
          }
          console.log(`SLOT: ${slot}`);
          // timeout(slot);
          console.log(
            "Unlucky... you barely lost anything tho! You should probably just spin again!:)"
          );
          slot = [];
          winnings -= 50;
        }
      }
      console.log(`Your current stash is $${winnings}`);
      console.log("");
    } else if (initialPrompt === "2") {
      console.log(
        `That is not a smart choice, your winnings are only $${winnings}`
      );
    }
  }
}

playSM();

// First try
// let winnings = 300;

// let slot = [];

// const goodSlotCharacters = ["$", "#"];

// const badSlotCharacters = ["%", "!", "&"];

// let slotOptionsRandomizer = ["GOOD", "BAD"];

// async function playSM() {
//   while (true) {
//     let initialPrompt = prompt(
//       `Welcome to the Slot Machine Game! Here are your options
//       (1) To pull THE LEVER!
//       (2) To take your winnings
//       (3) Quit
//       `
//     );

//     if (initialPrompt === "3") {
//       break;
//     } else if (initialPrompt === "1") {
//       let randomNumber = Math.floor(
//         Math.random() * slotOptionsRandomizer.length
//       );
//       let check = slotOptionsRandomizer[randomNumber];
//       // console.log("");
//       console.log("spinning... spinning... spinning... ");
//       console.log("");
//       await new Promise((resolve) => setTimeout(resolve, 2000));
//       if (check === "GOOD") {
//         // add to their winnings
//         for (i = 0; i < 3; i++) {
//           let goodSlotCharacterRandomizer = Math.floor(
//             Math.random() * goodSlotCharacters.length
//           );
//           slot.push(goodSlotCharacters[goodSlotCharacterRandomizer]);
//         }
//         console.log(`SLOT: ${slot}`);
//         console.log("Your stash went up! That usually happens! Keep spinning!");
//         slot = [];
//         winnings += 100;
//       } else if (check === "BAD") {
//         // hurt their winnings
//         if (winnings < 0) {
//           console.log(`You owe me ${winnings}, game over for you`);
//           break;
//         } else {
//           for (i = 0; i < 3; i++) {
//             let badSlotCharacterRandomizer = Math.floor(
//               Math.random() * badSlotCharacters.length
//             );
//             slot.push(badSlotCharacters[badSlotCharacterRandomizer]);
//           }
//           console.log(`SLOT: ${slot}`);
//           console.log(
//             "Unlucky... you barely lost anything tho! You should probably just spin again!:)"
//           );
//           slot = [];
//           winnings -= 50;
//         }
//       }
//       console.log(`Your current stash is $${winnings}`);
//       console.log("");
//     } else if (initialPrompt === "2") {
//       console.log(
//         `That is not a smart choice, your winnings are only $${winnings}`
//       );
//     }
//   }
// }

// playSM();
