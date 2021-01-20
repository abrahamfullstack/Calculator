window.onload = function StarUp (){

    const calculator = document.querySelector('.calculator')
    const keys = calculator.querySelector('.calculator__keys')
    const display = calculator.querySelector('.calculator__display')
    
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target
            const action = key.dataset.action
            const keyContent = key.textContent
            const displayedNum = display.textContent
            //Use this constant to check custome attribute for last type of key pressed
            const previousKeyType = calculator.dataset.previousKeyType
            
            //replace or add number to calculator display
            if (action) {
                if (displayedNum === '0' || previousKeyType === 'operator') {
                    display.textContent = keyContent
                }else {
                    display.textContent = displayedNum + keyContent
                }
            }

            // get the clicked button function
            if (action) {
                if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {

                    //Custm attributo to get previous key typed
                    calculator.dataset.previousKeyType = 'operator'
                    //custom attribute to get first value entered
                    calculator.dataset.firstValue = displayedNum
                    //custom attribute to store the operation
                    calculator.dataset.operator = action

                }else if (action === 'clear') {
                    display.textContent = '0'
                }else if (action === '.') {
                    display.textContent = displayedNum + '.'
                }else if (action === 'number'){
                    console.log('Number')
                }else if (action === 'calculate') {
                    
                    const firstValue = calculator.dataset.firstValue
                    const operator = calculator.dataset.operator
                    const secondValue = displayedNum

                    //call function to calculate the result
                    display.textContent = calculate(firstValue, operator, secondValue)
                    console.log(calculate(firstValue, operator, secondValue))
                }
            }

            
        }
    })
}

//calculate function
function calculate (n1, operator, n2) {

    let result = ''

    if (operator === 'add') {
        result = n1 + n2
    }else if (operator === 'subtract') {
        result = n1 - n2
    }else if (operator === 'multiply') {
        result = n1 * n2
    }else if (operator === 'divide') {
        result = n1 / n2
    }

    return result
}