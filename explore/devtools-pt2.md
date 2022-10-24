1. The bug is that we aree handling the inputs 12 and 41 as strings and when we add them with + we are actually concatenating it.
2. Fix in fix.png, where I changed the line num1 + num2 to parseInt(num1) + parseInt(num2) which will convert the numbers to int and they will add correctly.
