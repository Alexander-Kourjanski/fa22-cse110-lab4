1. Line 12 prints "3" because since we declare i as a var, it will still be in the scope, even after the for-loop. Since the condition for breaking the for-loop will be when i is at least the the length of prices, that is why i=3 after the for-loop ends.
1. Line 13 prints "150" because that is the last price with the discount applied to it. It is 300 with a 0.5 discount, and since discountedPrice is a var, it is not out of scope after the for-loop.
1. Line 14 prints 150 since that is the discount and rounded answer to the last price in the array round(300 * 0.5 * 100) / 100. We are still within finalPrice's scope since its a var.
1. The function returns "[ 50, 100, 150 ]", which is the discounted price of the prices argument. The prices argument is [100, 200, 300] and if we multiply each of them by 0.5, we get [50, 100, 150]. 
1. We get a reference error because i is not defined for line 12 since it is outside of the scope we declared the variable for.
1. We get a reference error because discountedPrice is only declared inside of the for-loop because of the let, and line 13 is outside of the for-loop.
1. Line 14 prints "150" because even though finalPrice is declared with let, we are using it within the same scope it was declared in, so the value of finalPrice is the discount and rounding applied to the last price of the array, 300.
1. The function returns "[ 50, 100, 150 ]" since this is the 0.5 discount applied to the array [100, 200, 300]. That is why each index of the returned value is one half of the prices argument.
1. We get a reference error because i is not defined in the scope where line 11 is.
1. We get "3" printed at line 12 because that is the length of prices when the variable is declared. It is the length of [100, 200. 300].
1. The function returns "[ 50, 100, 150 ]"  because that is the 0.5 discount applied to each of the prices [100, 200, 300]. I thought that it wouldn't work because of the const, but because the only const variable that deals with multiple values in any sort of way gets redeclared in a new scope in order to equal a new value, the program does work.
1. Accessing within student object
    - A. student.name
    - B. student["Grad Year"]
    - C. student.greeting()
    - D. student["Favorite Teacher"].name
    - E. student.courseLoad[0]
1. Arithmetic
   - A: '32' because the int 2 maps to a string and '3' + '2' = '32'
   - B: 1 because '3' is converted to a number and 3 - 2 = 1.
   - C: 3 because null maps to 0 and 3 + 0 = 0.
   - D: '3null' because null maps to a string and '3' + 'null' = '3null'
   - E: 4 because true maps to 1 and 1 + 3 = 4
   - F: 0 because false and null both map to 0 and 0 + 0 = 0
   - G: '3undefined' because undifined gets converted to a string and '3' + 'undefined' = '3undefined'
   - H: We get Nan as the answer because '3' gets converted to a number and it is not possible to subtract undefined numerically, so we get Nan as a result.
1. Comparison
    - A: True because '2' gets converted to a number and 2 > 1 is true.
    - B: False because 2 is not greater than 1 alphabetically.
    - C: True because '2' becomes the number 2, and 2=2.
    - D: False since a string cannot equal a number.
    -  E: False because true converts to 1 and 1 != 2.
    -  F: True because the boolean of 2 is true since it is non-zero and true = true.
1. The difference between == and === is that == has type conversions of the values being compared to see if the values match each other if the types are the same and === does not convert any value being compared.
1. In the file part2-question16.js
1. The function returns [2, 4, 6]. The reason why this occurs is because we have a for loop going through the indexes of array, and push the result of calling the callback function on the value of the index. The callback argument is doSomething, which takes one argument and returns the argument times 2. That is the function returns each value in array times 2. 
1. Code in part2-question18.js
1. The function prints 1, 3, 4, and 2 on a separate line each. This is because the timeout for 2 is one second, so the function runs, prints the first three values very quickly, then when 2's delay is up, it gets printed too.