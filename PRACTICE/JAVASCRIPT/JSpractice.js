// print or display "I am a Software Engineer!" a hundred times
const character = "I am a Software Engineer!"
const timesToRepeat = 100;

let final = " ";

for (let i = 0; i < timesToRepeat; i++)
{
    final = final + character;
}

console.log(final);

/* This is an intro into reactivity. So when someone clicks(which is an
    event), we listen and an alert saying COUCOU pops up. I can make it a TOUCH function; if I am 
    building for mobiles* So the addEventListener method takes two parameters:
    the event to listen for and the callback function with what you want it to carry out. */

const FirstEvent = document.querySelector(".first-event");
FirstEvent.addEventListener("click", function () {
    alert("Coucou!"); //for some strange reason, this has stopped
});

/* There are so many other events we can listen for. There's key up[referring to
when someone hits the key and comes back up; literally when you press and let go], key down, touch start, touch end,
cut, paste, right click, etc*/
//Now here's a keyup example:

const inputText = document.querySelector(".second-event");
const paragraph = document.querySelector(".second-eventB");
inputText.addEventListener("keyup", function() {
    paragraph.innerText = inputText.value;
});

// Now I do a CHANGE event

const box = document.querySelector(".color-box");
const inputColor = document.querySelector(".color-text");

box.addEventListener("change", function () {
    inputColor.style.backgroundColor = box.value; 
}); //I wonder why this is not working

/* Now let's work on EVENT DELEGATION OR EVENT BUBBLING. Instead of listening for multiple events one at a time,
it can be done in one 'container'*/

document
    .querySelector(".the-buttons")
    .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
 }); //THIS IS NOT WORKING! WHY?! 