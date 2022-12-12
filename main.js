// Example1
const btnSum = document.querySelector('.btn-sum')
btnSum.onclick = () => {
    let n1 = document.querySelector('.number1').value
    let n2 = document.querySelector('.number2').value
    let total = parseInt(n1) + parseInt(n2)
    document.querySelector('.number3').value = total
}
// Example 2
const btnIncrease = document.querySelector('.btn-increase')
const btnReset = document.querySelector('.btn-reset')
const btnDescrease = document.querySelector('.btn-descrease')
const counter = document.querySelector('.counter-number')
btnIncrease.onclick = () => {
    let tamp = parseInt(counter.innerHTML) + 1
    counter.innerHTML = tamp
}
btnDescrease.onclick = () => {
    let tamp = parseInt(counter.innerHTML) - 1
    counter.innerHTML = tamp
}
btnReset.onclick = () => {
    counter.innerHTML = 0
}
// Example 3

const btnRandom = document.querySelector('.btn-random')
btnRandom.onclick = () => {
    let r1 = Math.floor(Math.random() * 6 + 1)
    let r2 = Math.floor(Math.random() * 6 + 1)
    let r3 = Math.floor(Math.random() * 6 + 1)
    document.querySelector('.random1').innerHTML = r1
    document.querySelector('.random2').innerHTML = r2
    document.querySelector('.random3').innerHTML = r3
    let total = document.querySelector('.total-random').value = r1 + r2 + r3
    console.log(total);
    if (total > 9) {
        document.querySelector('.result').innerHTML = 'Big'
    }
    else {
        document.querySelector('.result').innerHTML = 'Small'
    }
}