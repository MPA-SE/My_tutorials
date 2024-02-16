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
- SCOPE: Variables are only in scope, when they are within the curly braces of the function. If you try to do anything with the variable after the closing brace, the error will be "...is not defined", because it's out of scope. This happens with CONST and LET, but the scoping in VAR is a little different. So what matters, is where it was created.
- BUILTIN FUNCTIONS. They are also called METHODS. Use "." So how does this work? Store it all in the variable. VS code will subject the methods/functions that can go with the object just after the dot. There are different objects that go with methods/functions. For example, the STRING object for strings, the MATH object. The INCLUDE method is really cool. It helps you know what strings are contained in other strings.
- OBJECTS: Now in talking about objects proper, they contain properties, in curly braces. For example: const person = { name: "Priscilla", sex: "female",}; So if I console.log(person), all of these properties will be displayed. If I console.log(name), only priscilla will be displayed. Name, sex are called keys. And what they contain are called values.
Values are not unique. Keys are. And variables can be used as accessors thus: const studentID  = 'name'; Now when I console.log(person[studentID]); It will display priscilla. Objects can have functions in them! Objects can nest objects.
- CONTEXT: "this" indicates the current object. understand context. it can matter in interviews...how codes can be bent or broken.
.bind(), can change the context.
- ARRAYS: While objects are unordered lists. Arrays are ordered. You can have arrays of strings, numbers, arrays, numbers&strings. in square brackets. the length method will give how many items, counting from 1. The join() builtin permits us to put something or nothing in between thd items. the push method will add an item. The pop will take out the last item. Shift takes out the first item. Unshift does what shift does.

**PUTTING IT ALL TOGETHER**
- document.querySelector(".the_class_name"); this is the way to go! Then define what you want to do to the element...the_class_name.backgroundColor = pink; The style object helps effect more things like width, etc