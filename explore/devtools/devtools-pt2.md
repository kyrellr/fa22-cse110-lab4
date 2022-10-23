## DevTools - Debugging

Screenshots:\
[result-calculateSum.png](result-calculateSum.png)\
[result-dataType.png](result-dataType.png)
[fix.png](fix.png)

1. What was the bug?
    > The bug was that the result was of the wrong data type. It should be a number, but it is a string. 

2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)
    > The important thing is to make sure that when being added, num1 and num2 are numbers, making result a number as well. I'd do it like this:\
    [let result = +num1 + +num2](fix.png)