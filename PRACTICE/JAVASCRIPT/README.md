SOME NOTES ON JS:
- When you write codes, in general, instead of just being clever, aim to be clear. It's better to use a word that gives an insight, instead of single letter variables. In a quest to shorten the codes, it can be very unclear, when others come to read it, like years after, when codes have evolved. Check out "Code Gulf", for more explanation. it's true that people can worry about the length of the codes, however think of humans first before the computer. Computers are faster these days.
- VAR is the old way of declaring variables, since 2015; when ES6 [a new Javascript: called EcmaScript], then LET was introduced for changeable variables and CONST for unchangeable ones. Now they release new versions of JavaScript every year.
- "Camel casing" is how everyone writes variable names in JavaScript. For example: const Jansalary
- The semi-colon at the end of lines of codes that are important, like in CSS, are optional in JS.
- There is something called REPL[Read Eval Print Loop], it just let's you interact directly with your codes, right in your browser. Go to INSPECT, then CONSOLE. Or < opt command i> on Macbook. And <ctrl shift i> on WINDOWS.
- Shock alert: apart fro using single/double quotes for string of characters, you can use a backtick too! And the sweet thing about them is that it is only with them that you can put in multiple lines of text! Also with them to concatenate/ join strings, instead of using the plus sign and ensuring to add space " ", you can use the dollar sign.
- THE STATEMENT: ifs, elses, and else ifs..."===" mathematical signs, >, < , >=, <=. NB: one = is used to assign value. 
- LOOPS: While loops look like if statements. It says WHILE (this condition is true) { do this}, when it stops being true console.log/display...+= or ++ adds to the variable, -= subtracts, *= multiplies, /= divides, **= for exponents(e.g 2 ** 3 = "2 raised to the power of 3", which is 8). FOR loops have three important parts for (i = 0 //start at zero; i < 10 //condition; i++ //increment;) { do this} display...N.B - browsers are really good/fast at running FOR loops.
- FUNCTIONS: function+funct_name(parameter) {what it should return}.Or, instead of returning, it can just display(using console.log). You can also write a function by declaring the variable and assigning it to function(). Or, the new way - as of 2015- for example:
    const flag = () = > 
    { 
        console.log("Nigeria");
    };

    flag();
    /* it will display "Nigeria", when the flag function that was once a variable is called
    It can be let or even var; not necessarily const 
    */


- N.B : Even when it has no parameters, the parenthesis should be there.
- SCOPE: Variables are only in scope, when they are within the curly braces of the function. If you try to do anything with the variable after the closing brace, the error will be "...is not defined", because it's out of scope. This happens with CONST and LET, but the scoping in VAR is a little different.