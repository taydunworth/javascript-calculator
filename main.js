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
const buttons = document.querySelectorAll('button')
const value = document.querySelectorAll("button").value


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

    // Buttons appending to results box

    const resultsArray = Array.from(results)
    let length = buttons.length

    // Clear results "C" is clicked
    for (i = 0; i < length; i++) {
      let value = buttons[i].value
      if (value == "c") {
        buttons[i].addEventListener("mousedown", function() {
          results.textContent= " "
        })

      // Adds number value when button is clicked
    } else if (value != "=" && value != "+" && value!= "-" && value != "/" && value != "*") {
        buttons[i].addEventListener("mousedown", function() {
          num = this.value
          results.append(parseInt(num, 10))
          // need to store values somewhere to recall for equation
        })

      // Adds operator when button is clicked and does not allow the "=" to append
    } else if (value != "="){
        buttons[i].addEventListener("mousedown", function() {
          num = this.value
          results.append(value)
      })
      }
    }

    // Do the actual equations when "=" is clicked based on if the operator exists

    for (i = 0; i < length; i++) {
      if (buttons[i].value == "=") {
        if (results.includes("+")) {
          num += num
        } else if (results.includes("-")) {
          num -= num
        } else if (results.includes("/")) {
          num /= num
        } else if (results.includes("*")) {
          num *= num
        }
      }
    }
  }

calculator()
