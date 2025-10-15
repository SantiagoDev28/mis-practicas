const button = document.getElementById("button")
button.addEventListener("click", changeColor)

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function changeColor() {
    let red = 0;
    let green = 0;
    let blue = 0;
    let array = [red, green, blue];
    for (let i = 0; i < array.length; i++) {
        array[i] = getRandomNum(0, 255);
    }
    console.log(array)

    const [r, g, b] = array;

    let newColor = `rgb(${r}, ${g}, ${b})`

    button.style.backgroundColor = newColor
}

