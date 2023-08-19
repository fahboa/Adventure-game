const prompt = require("prompt-sync")();
const answer = prompt("Would you like to play (y/n)? ").toLowerCase();

if (answer === "y") {
    const answer2 = prompt("Would you like to go left or go right (left/right)? ");
    
    if (answer2 === "left") {
        console.log("Nice, you go left and approach a bridge...");
        const answer3 = prompt("Would you like to cross the bridge, or turn around and find another way (cross/turn)? ");

        if (answer3 === "cross") {
            console.log("You have crossed the bridge and reached the end of the game.");
        } else {
            console.log("You turn back and trip on a log, hurting your leg. You lose.");
        }
    } else {
        console.log("You chose to go right.");
    }
} else {
    console.log("That's too bad.");
}
