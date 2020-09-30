// Here you can access the colors variable
// have fun

//Function that return random value from colors array
function randomValue() {
    return colors[Math.floor(Math.random() * colors.length)];
}

console.log(randomValue());

// get elements
let button = document.querySelector('div.control > button');
let inputColor = document.querySelector('#color');
let paintMe = document.querySelector('#pallete');

console.log(button);
console.log(inputColor);
console.log(paintMe);

// button lestner
button.addEventListener('click', function (event) {
    let randomColor = randomValue();
    inputColor.value = randomColor;
    inputColor.style.color = randomColor;
    paintMe.style.backgroundColor = randomColor;
});

// inputColor lestner
inputColor.addEventListener('keyup', function (event) {
    console.value = event.target.value;
    if(!inputColor.value.includes("#")){
        inputColor.value = "#" + event.target.value;
    }
    
    inputColor.style.color = event.target.value;
    paintMe.style.backgroundColor = event.target.value;
});