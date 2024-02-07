// print or display "I am a Software Engineer!" a hundred times
const character = "I am a Software Engineer!"
const timesToRepeat = 100;

let final = " ";

for (let i = 0; i < timesToRepeat; i++)
{
    final = final + character;
}

console.log(final);