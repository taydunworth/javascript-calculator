// Variables declared for calculator
const zero = document.querySelector('#zero')
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const add = document.querySelector('#add')
const subtract = document.querySelector('#subtract')
const multiply = document.querySelector('#multiply')
const divide = document.querySelector('#divide')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const operator = document.querySelectorAll('.operator')
const results = document.querySelector('.results-box')


// Click Effects for Clear and Equals Buttons
clear.addEventListener("mousedown", function(){
  clear.className = "btn-click"
})

equals.addEventListener("mousedown", function(){
  equals.className = "btn-click"
})

clear.addEventListener("mouseup", function(){
  clear.className = ""
})

equals.addEventListener("mouseup", function(){
  equals.className = ""
})
