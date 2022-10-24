## Part 2
1. It will print 3. var i was declared in the for loop and it has function scope, so var will be accessible outside of the for loop and its last value where i=3 will be printed.
2. It will print 150 because var discountedPrice has function scope and its last value at the end of [100,200,300] is 300, and when var discountedPrice = prices[2] * (1-.5) was executed, we got var discountedPrice = 300 * .5 = 150.
3. It will print 150 because the last value of discountedPrice, as said in 2., was 150 and when we rounded it with discountedPrice*100/100 == 150*100/100 = 150, we got finalPrice == 150 as finalPrice's last value.
4. It will return an array [50,100,150] because when the function executed it went thru the array [100,200,300], got discountedPrice = price * (1-.5) = .5price for each price, and pushed it into the discounted array.
5. It will throw an error because let i = 0 is block scope (not function scope) so outside of the for loop, i is not defined. As a result, when we try to print i outside of the for loop, it throws an undefined error.
6. It will also throw an error because let discountPrice = {...} has block scope (not function scope) so outside of the for loop, discountPrice is undefined. As a result,  when we try to print discountPRice outside of the for loop, it throws an undefined error.
7. It will print 150. Since finalPrice was declared outside of the for loop in the function scope, finalPrice is accessible anywhere from inside the function. As a result, when finalPrice was changed in the for loop with the last value being passed in from the array of prices as 300 and subsequently discountedPrice = 300 * (.5) == 150, we got finalPrice = 150*100/100 == 150 and when we print finalPrice we get 150.
8. It will return an array [50,100,150]. discounted and finalPrice are declared outside the for loop with function scope, so returning discounted won't throw an undefined error. Furthermore, inside the for loop, we won't get an error because discountedPrice is declared and only used inside the scope of the for loop. Then  we push finalPrice which is half of the values in the array (in the same fashion as described in earlier questions).
9. It will throw an undefined error because i is not defined outside of the scope of the for loop.
10. It will print 3 because length was declared outside of the for loop with function scope, so it is accessible anywhere within the function.
11. It will return the array [50,100,150] because const discounted = [] is immutable and it was updated by the code inside the for loop.
12. a. student['name'];
    b. student['Grad Year'];
    c. student['greeting']();
    d. student['Favorite Teacher']['name'];
    e. student['courseLoad'][0];
13. A. '32' because we start with a string object and when we try to add the numeric value 2, 2 is converted to a string to match '3' and together we get '3' + '2' which concatenates to '32'.
    B. 1. Although we started with a string object '3', it wouldn't make sense to subtract a numeric value 2 from a string, so now, instead, '3' is converted to the numeric value 3 and 3-2=1.
    C. 3, here null is converted to 0 and 3 + 0 = 3.
    D. '3null'; we started with a string object '3' and to concatenate it, null gets converted to the string object 'null' and '3' + 'null' becomes '3null'.
    E. 4; here, true is converted to the integer value 1, and 1 + 3 = 4.
    F. Here, false is converted to the numeric value 0 and null is also converted to the numeric value 0. Thus, 0 + 0 = 0.
    G. '3undefined'; here, we started with a string object '3' and undefined is converted to the string object 'undefined' and concatenated to '3' to get '3' + 'undefined' = '3undefined'.
    H. NaN; here, javascript converted '3' to the numeric value 3 and is trying to convert undefined to a numeric value, but undefined's numeric value is NaN, which you can't subtract. As a result, the result is NaN.
14. A. true; here, '2' is converted to the numeric value 2, and 2>1 is true.
    B. SyntaxError; here, '2' was converted to a number but both were originally strings and they are not both converted to numbers, so '12' is still a string and we can't compare a numeric value to a string.
    C. true; here, '2' is converted to the numerical value 2 and 2==2 is true.
    D. false; here we use the strict equality comparator which sees that the numeric value 2 and string '2' are not the same type so it returns false.
    E. false; here, true is converted to the numeric value 1, and 1 == 2 is false.
    F. true; here, Boolean(true) returns the boolean value true. Thus, despite using the string equality operator, the result is we get true === true which is true.
15. A regular == cannot differentiate between different types. So, false has a numeric value of 0 and after conversion false == 0 would be equivalent and return true. However, the strict equality operator === checks the equality without type conversion so 0 === false would return false because the types are different.

