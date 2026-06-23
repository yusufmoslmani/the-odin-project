const display = document.querySelector('.textbox');
const ubutton = document.querySelectorAll('.button');
const dbutton = document.querySelector('.delete');
const cbutton = document.querySelector('.clear');   
let leftNum = "";
let tempLeft = "";
let rightNum = "";
let tempRight = "";
let operator = "";
let tempOperator = "";
let sum = null;
let idk = "";


function isOnlyDigits(str) {
  return /^\d+$/.test(str);
}



function evaluate (num1, operator, num2)
{
    num1 = Number(num1);
    num2 = Number(num2);
    switch (operator)
    {
        case "+":
            idk = num1 + num2;
            sum = parseFloat(idk.toFixed(4));
            break;
        case "-":
            idk = num1 - num2;
            sum = parseFloat(idk.toFixed(4));
            break;
        case "/":
            idk = num1 / num2;
            if (!(Number.isFinite(idk)))
            {
                alert("Can't divide by 0");
                display.value = "";
                leftNum = "";
                rightNum = "";
                operator = "";
                sum = null;
            }
            else if (Number.isFinite(idk))
            {
                sum = parseFloat(idk.toFixed(4));
            }
            break;
        case "×":
            idk = num1 * num2;
            sum = parseFloat(idk.toFixed(4));
            break;
    }
    tempOperator = operator;
    operator = "";
}




ubutton.forEach((button) => {
    button.addEventListener('click', () => {
        if ((Number((Number.isFinite(display.value)))) || (Number(Number.isFinite(sum))))
        {
            display.value = "Can't divide by 0"
        }
        if (button.innerText == "=")
        {
            if (leftNum && rightNum)
            {
                evaluate(leftNum, operator, rightNum)
                display.value = sum;
                leftNum = "";
                rightNum = "";
                operator = "";
            }

            
        }
        else if (!(isOnlyDigits(button.innerText)))
        {
            if (button.innerText == "CLEAR")
            {
                display.value = "";
                leftNum = "";
                rightNum = "";
                operator = "";
                sum = null;
            }
            else if (button.classList.contains("delete"))
            {
                if (operator && !(rightNum))
                {
                    operator = "";
                }
                else if (operator)
                {
                    rightNum = rightNum.slice(0, -1);
                }
                else
                {
                    leftNum = leftNum.slice(0, -1);
                }
                display.value = leftNum + operator + rightNum;
            }
            else
            {
                if (leftNum && operator && rightNum && (!(button.innerText == ".")))
                {
                    evaluate(leftNum, operator, rightNum); 
                    leftNum = String(sum); 
                    rightNum = ""; 
                    operator = button.innerText; 
                    display.value = leftNum + operator;
                }
                else if ((sum !== null) && (!(button.innerText == ".")))
                {
                    operator = button.innerText; 
                    display.value = sum + operator;
                    leftNum = sum;
                }
                else if (leftNum && !sum && (!(button.innerText == ".")))
                {
                    operator = button.innerText;
                    display.value = leftNum + operator;
                }
                else if (button.innerText == ".")
                {
                    if (rightNum)
                    {
                        if (!(rightNum.includes(".")))
                        {
                            rightNum = rightNum + ".";
                            display.value = leftNum + operator + rightNum;
                        }
                    }
                    else if (leftNum)
                    {
                        if (!(leftNum.includes(".")))
                        {
                            leftNum = leftNum + ".";
                            display.value = leftNum;
                        }
                    }
                }
            }
        }
        else if (isOnlyDigits(button.innerText))
        {
            if (operator)
            {
                rightNum = rightNum + button.innerText;
                display.value = leftNum + operator + rightNum;
            }
            else if (rightNum)
            {
                rightNum = rightNum + button.innerText;
                display.value = leftNum + operator + rightNum;
            }
            else if (sum !== null)
            {
                sum = button.innerText;
                display.value = sum;
            }
            else
            {
                leftNum = leftNum + button.innerText;
                display.value = leftNum;
            }
        }
    });
});

document.addEventListener('keydown', (event) => {
    if ((event.key == "/") || (event.key == "*") || (event.key == "-") || (event.key == "+") || (event.key == "."))
    {
        document.querySelector(`.button.\\${event.key}`).click();
    }
    else if ((event.code.includes("Digit")) || (event.code == "Backspace") || (event.code == "Escape") || (event.key == "Enter"))
    {
        if (event.code.includes("Digit"))
        {
            document.querySelector(`.button.${event.code}`).click();
        }
        else if (event.code == "Backspace")
        {
            document.querySelector('.button.delete').click();
        }
        else if (event.code == "Escape")
        {
            document.querySelector('.button.clear').click();
        }
        else if (event.code == "Enter")
        {
            document.querySelector('.button.equal').click();
        }
    }
});