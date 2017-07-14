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
const decimal = document.querySelector('#decimal')
const equals = document.querySelector('#equals')
const clear = document.querySelector('#clear')
const operator = document.querySelectorAll('.operator')
const resultsBox = document.querySelector('.results-box')
const results = document.querySelector('.results')


// Click Effects for Clear and Equals Buttons
clear.addEventListener("mousedown", function() {
  clear.className = "btn-click"
})

equals.addEventListener("mousedown", function() {
  equals.className = "btn-click"
})

clear.addEventListener("mouseup", function() {
  clear.className = ""
})

equals.addEventListener("mouseup", function() {
  equals.className = ""
})

// Logic

function calculator() {
  // Number values added to results on click
  zero.addEventListener("mousedown", function() {
    results.append("0")
  })
  one.addEventListener("mousedown", function() {
    results.append("1")
  })
  two.addEventListener("mousedown", function() {
    results.append("2")
  })
  three.addEventListener("mousedown", function() {
    results.append("3")
  })
  four.addEventListener("mousedown", function() {
    results.append("4")
  })
  five.addEventListener("mousedown", function() {
    results.append("5")
  })
  six.addEventListener("mousedown", function() {
    results.append("6")
  })
  seven.addEventListener("mousedown", function() {
    results.append("7")
  })
  eight.addEventListener("mousedown", function() {
    results.append("8")
  })
  nine.addEventListener("mousedown", function() {
    results.append("9")
  })
  decimal.addEventListener("mousedown", function() {
    results.append(".")
  })

  // Results cleared on click
  clear.addEventListener("mousedown", function() {
    results.textContent = " "
  })

  // Operated values added to results on click
  add.addEventListener("mousedown", function() {
    results.append("+")
  })
  subtract.addEventListener("mousedown", function() {
    results.append("-")
  })
  multiply.addEventListener("mousedown", function() {
    results.append("*")
  })
  divide.addEventListener("mousedown", function() {
    results.append("/")
  })

  // Returning the answer

  result = 0
  if (results.textContent.includes(+))
    

  equals.addEventListener("mousedown", function() {
    results.textContent = result
  })
}

calculator()
