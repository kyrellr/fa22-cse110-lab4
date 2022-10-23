## **Part 2. A Little More of a Challenge...**

1. **Line 12 will print `3`** because that is the updated value of `i` once outside of the loop. This variable can be accessed even though it is outside of the loop because it was declared using `var`.
   
2. **Line 13 will print `150`** because on the last iteration of the loop, `i` is equal to 2, and after replacing `i` and `discount` with their assigned values, we have `discountedPrice = prices[2] * (1 - 0.5)`. This simplifies to `discountedPrice = 300 * 0.5` which is just 150. Furthermore, it will print because the variable is accessable when declared using the `var` keyword.
   
3. **Line 14 will return `150`** because that is the updated value of `finalPrice` after the last iteration of the for loop. Since `finalPrice` was declared outside of the for loop, we can definitely access it and print it.
   
4. **The function will return `[50, 100, 150]`**, which is the array contained in `discounted`. Within the for loop, the values of `finalPrice` during each iteration are pushed into the array, which gives us our result.
   
5. **At line 12, there will be an error.** This is because `i` is a variable declared using the `let` keyword and cannot be accessed from outside the block in which it is declared.
   
6. Similar to the last question, **there will be an error** because `discountedPrice` uses `let` and is declared in the block above line 13.
   
7. **Line 14 will print `150`.** As in question 3, because `finalPrice` was declared outside of the loop and that is where we're calling it from, it is accessible even as a `let` variable.
   
8. **The function will return `[50, 100, 150]`.** Similar to question 7, we can access `discounted` because it is not contained in a block away from our call point.
   
9.  **At line 11, there will be an error.** `i` is an inaccessible variable because of its declaration inside of a block using `let`.
    
10. **Line 12 will print `3`**, the length of the `prices` array. It can access the `length` variable even though it was declared using `const` because the declaration location is also outside of the for loop.
    
11. **The function will return `[50, 100, 150]`.** As we saw in questions 7, 8, and 10, declaration outside of blocks allows us to access the variable we're calling.<br><br>


### **Data Types**

12. 
    A. `student.name` <br>
    B. `student['Grad Year']` <br>
    C. `student.greeting();` <br>
    D. `student['Favorite Teacher'].name` <br>
    E. `student.courseLoad[0]` <br><br>


### **Basic Operators & Type Conversion**

13. 
    A. `'3' + 2` = `'32'` because for strings, if any of the operands between `+` is a string, then the other one is converted to a string too. <br>
    B. `'3' - 2` = `1` because every operator other than `+` converts operands into numbers. Thus '3' = 3, and 3 - 2 = 1. <br>
    C. `3 + null` = `3` because null is mapped to 0 when converted into a number. <br>
    D. `'3' + null` = `'3null'` because null is converted into a string since '3' is a string and the two operands are being added. <br>
    E. `true + 3` = `4` since true converts to the number 1. <br>
    F. `false + null` = `0` because both false and null map to 0 when converted into numbers. <br>
    G. `'3' + undefined` = `'3undefined'` since undefined is converted into a string. <br>
    H. `'3' - undefined` = `NaN` because the `-` operator treats operands as numbers, and undefined maps to the NaN value. <br><br>

14. 
    A. `‘2’ > 1` = `true` because when comparing values of different types, JavaScript converts the values to numbers, and '2' = 2. <br>
    B. `‘2’ < ‘12’` = `false` since these are both strings, and you compare them character by character. '2' > '1'. <br>
    C. `2 == ‘2’` = `true` because '2' is converted into a number, giving us 2 == 2. <br>
    D. `2 === ‘2’` = `false` because the `===` stops the '2' from converting into a number, but 2 and '2' are of different types. <br>
    E. `true == 2` = `false` because true maps to the value 1, not 2. <br>
    F. `true === Boolean(2)` = `true` because Boolean() is true when the value within the parentheses is not intuitively "empty". <br><br>

15. `==` is the regular equality check, while `===` checks equality without type conversion.<br><br>


### **Functions**

17.  **After calling the function with those parameters, `[2,4,6]` is returned.** We start with `array` equal to `[1,2,3]` and `callback` equal to the `doSomething` function. The for loop takes each element in the array and puts it through the doSomething function. Namely, it takes 1 and multiplies it by 2, then 2 and multiples it by 2, then the same for 3. After each time the doSomething function finishes, the returned value is pushed into `newArr`. So, we get `[2,4,6]`. <br><br>


### **setInterval(), setTimeout(), clearTimeout()**

19. The output of the code is:
```
1
4
3
2
```


    

