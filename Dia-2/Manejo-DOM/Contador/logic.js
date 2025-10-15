const buttonRes = document.getElementById("btnRes")
const buttonSum = document.getElementById("btnSum")
const buttonReset = document.getElementById("btnReset")
const number = document.getElementById("num")


buttonRes.addEventListener('click', res)
buttonSum.addEventListener('click', sum)
buttonReset.addEventListener('click', reset)

let count = 0

function res(){
    if(count === 0 ){
        return
    }
    count--
    number.innerText = count

}

function sum(){
    count++
    number.innerText = count
}

function reset(){
    count = 0 
    number.innerText = count
}