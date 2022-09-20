                                                // Changing case             



// 1. Write a program that takes user input. Convert and show the input in capital letters.

// var a = prompt("Enter your full name" , "Enter")
// var caps = a.toUpperCase()
// alert(caps)

// 2. Write a program that takes user input. Convert and show the input in title case.

// var a = prompt("Enter")
// var b = prompt("Enter second")

// var a = capitalizeWord.slice(0, 1)
// var b = capitalizeWord.slice(1)

// a = capitalizeWord.toUpperCase()
// b = capitalizeWord.toLowerCase()

// var c = a + b
// alert(c)

// this program is based on this sentence "Sir Basit is one ofthe most intelligent teacher of this era"

// var capitalizeWord = "Sir Basit is one ofthe most intelligent teacher of this era"

// var fChar = capitalizeWord.slice(28, 29)
// var oChar = capitalizeWord.slice(29, 39)

// fChar = fChar.toUpperCase()
// oChar = oChar.toLowerCase()

// var cS = fChar + oChar

// document.write("The <b> Title Case </b> word is  &nbsp; >>> &nbsp; " +cS)




                                 // Strings: measuring length and extracting parts




// 1. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

// var mobile = prompt("Enter your favourite mobile phone")
// var len = mobile.length

// document.write(mobile+ "<br>")
// document.write(len)


// 2. Write a program to display the last character of a user input.

// var abc = "Abacus"
// var x = abc.charAt(5)
// alert(x)

// var abc = prompt("Enter any string")
// var lC = abc.slice(-1)
// alert(lC)



                                    // Strings: finding segments



// 1. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.

// var country = "Pakistani"
// var sl = country.slice(7, 8)
// var ind = country.indexOf('n')
// document.write("The index of char 'n' is: " +ind)


// 2. Write a program to take user input and store username in a variable. If the username contains any special symbol among (@ . , !), prompt the user to enter a valid username.

// var usernames = prompt("Do not use (@, ., !, ,) ")



// 3. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var letter;
// var str;
// var count = 0

// var string = prompt('Enter a string: ');
// var letterToCheck = prompt('Enter a letter to check: ');

// for (let i = 0; i < str.length; i++) {

//     // check if the character is at that position
//     if (str.charAt(i) == letter) {
//         count += 1;
//     }


                                         // Strings: finding a character at a location



// 1. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var word = "Pakistani"
//  var find = word.charAt(2)
// var find = word.slice(2, 3)
// alert(find)


                                    // Strings: replacing characters



// 1. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"
// var rep = city.replace("Hyder" , "Islam")
// alert(rep)

// 2. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "li and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g , "&")
// alert(rep)



                                            // Rounding numbers



// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number (example number: 3.45214)
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = Number( prompt("Enter Your Number") )

// a
// var positiveNumber = +prompt("Enter positive number")
// alert("the number is: " +positiveNumber)

// b
// var round = Math.round(number)
// alert("the round off number is: " +round)

// c
// var nearSmall = Math.floor(number)
// alert("The nearest small value by floor is given as: " +nearSmall)

// d
// var nearLarge = Math.ceil(number)
// alert("The nearest larger value by Ceil is given as: " +nearLarge)



// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. Number (example number: -2.678 )
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number = Number( prompt("Enter Your Number") )

// a
// var negitiveNumber = +prompt("Enter negative number")
// alert("the number is: " +negitiveNumber)

// b
// var round = Math.round(number)
// alert("the round off number is: " +round)

// c
// var nearSmall = Math.floor(number)
// alert("The nearest small value by floor is given as: " +nearSmall)

// d
// var nearLarge = Math.ceil(number)
// alert("The nearest larger value by Ceil is given as: " +nearLarge)


                                // Generating random numbers



// 1. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// var dice = Math.ceil ( Math.random() * 6 ) 
// alert(dice)

// 2. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser.
// 2 = Heads and 1 = Tails

// var toss = Math.floor( Math.random() *2 )
// alert(toss)


// 3. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var number = parseInt ( prompt("Enter a Secret number" , "Secret number") )
// var secretNum = Math.floor( Math.random() * 10 )

// alert( "Congratulation !! You got it right " +secretNum) 



                           // Converting strings to integers and decimals



// 1. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var weight = parseFloat ( prompt("Measure Your weight") )
// alert("Your measuring wait is: " +weight)



                               // Converting strings to numbers, numbers to strings



// 1. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// Hint: (use typeof())

// var str =  parseInt ("472")
// alert(str)
// alert(typeof(str))

// 2. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser

// var num = 3536 
// var x = num.toString()
// alert(x)
// alert(typeof(x))



                                      // Controlling the length of decimals



// 1. Write a program to control the length of decimals to 2. var percentage = 30 / 45 * 100; -> 66.66666666666666

// var percentage = 30 / 45 * 100;    // -> 66.66666666666666
// percentage = percentage.toFixed(2)
// alert(percentage)





                                           // DATE METHODS



// 1. Write a program that displays current date and time in your browser.

// var currentDate = new Date()
// alert(currentDate)


// 2. Write a program that alerts the current month in words. For example December

// var months = [ "jan", "feb", "mar", "apr", "may", "june", "july", "aug", "sep", "oct",  "nov", "dec" ];
// var x = new Date()
// var cM = x.getMonth()
// var mName = months[cM]
// document.write(cM+ "<br>")
// document.write("Current month: " +mName)


//3. Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun.

// var dayz = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ]
// var cDate = new Date()
// var cDay = cDate.getDay()
// var nameOfDay = dayz[cDay]
// alert("Today is " +nameOfDay)


// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var dayz = [ "sun", "mon", "tue", "wed", "thu", "fri", "sat" ]
// var cDate = new Date()
// var fun = cDate.getDay()
// var nameOfDay = dayz[fun]
// document.write("This Day is " +nameOfDay+ "<br><br>")

// if (fun == "sat") {
//     document.write("<b> It’s Fun day ^ </b>")
// }
// else {
//     document.write("<b> Today ^ </b>")
// }


// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

// var cDate = new Date()
// var month = cDate.getDate()
// document.write("Today is " +month+ "<sup>th </sup> of September <br><br> ")

// if (month < 16) {
//     document.write("First fifteen days of the month ")
// }
// else {
//     document.write("Last days of month ")
// }


// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var cDate = new Date()
// var ms = Math.floor ( cDate.getTime() ) 
// var ms_minutes = Math.floor( cDate.getTime() / 1000 / 60 ) 

// document.write("Current <b> Date</b>: " +cDate+ "<br>")
// document.write("Ellapsed <b> milliseconds </b> since January 1, 1970: " +ms+ "<br>")
// document.write("Ellapsed <b> minutes </b> since January 1, 1970: " +ms_minutes+ "<br>")

// 7. Write a program that tests whether it's before noon and  alert “Its AM” else “its PM”.

// var cDate = new Date()
// var date = cDate.getHours()

// if (date < 12) {
//     alert("It's AM ")
// }
// else {
//     alert("It's PM ");
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var d = new Date();
// d.setMonth(11);
// d.setFullYear(2020)
// d.setDate(31)
// alert("Later date: " +d)

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015

// var pastRamadan = new Date("06/18/2015");
// // var currentDate = new Date("09/15/2022");
// var currentDate = new Date(); 

// // To calculate the time difference of two dates
// var diffInTime = currentDate.getTime() - pastRamadan.getTime() 

// // To calculate the no. of days between two dates
// var DifferInDays = diffInTime / (1000 * 3600 * 24);

// document.write("<b> 1st Ramadan <b>: " +pastRamadan+ "<br><br>")
// document.write("<b> Current Date </b>: " +currentDate+ "<br><br>" )
// document.write(DifferInDays+ "<b> Days have passed since 1st Ramadan, 2015 </b>  " )


// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var pastDate = new Date("11/05/2015");
// var currentDate = new Date("09/15/2022"); 

// // To calculate the time difference of two dates
// var diffInTime = currentDate.getTime() - pastDate.getTime() 

// // To calculate the no. of Seconds between two dates
// var DifferInDays = diffInTime / (60 * 60 * 24);

// document.write("<b> Current Date </b>: " +currentDate+ "<br><br>" )
// document.write("<b> On reference date <b>" +pastDate+ "<br><br>")
// document.write(DifferInDays+ "<b> Seconds had passed since beggining of 2015 </b>  " )

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

// var date = new Date()
// var exHours = date.getHours()
// var oneHourahead = exHours + 1
// document.write("Current date: " +date+ "<br>")
// document.write(": " +oneHourahead  )

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var date = new Date("09/15/2022")
// var hundred = new Date("09/15/1922")

// // To calculate the time difference of two dates
// var diff = date.getTime() - hundred.getTime() 

// // // To calculate the no. of Years between two dates
// var back100 = diff / (1000 * 3600 * 24 * 365);

// document.write("Current date: " +date+ "<br>")
// document.write("100 years calculation " +back100+ "<br>") 
// document.write("<b> 100 years back, it was </b> " +hundred)


// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

// document.write(" <h1> Age Calculator </h1> <br><br> ")

// var x = +prompt("Enter Your Age")
// var dateOfBirth = new Date(x) 

// var dateOfBirth = new Date("08/25/2000") 
// var date = new Date ("09/16/2022")

// // Birth Year
// var birthYear = dateOfBirth.getFullYear()

// // To calculate the time difference of two dates
// var diff = date.getTime() - dateOfBirth.getTime()

// // To calculate the no. of Years between two dates
// var ageYears = diff / (1000 * 3600 * 24 * 365);
// var round = Math.round( ageYears )

// document.write("<b> Current Date </b> " +date+ "<br>")
// document.write("<b> Date of Birth is </b> " +dateOfBirth+ "<br><br>") 
// document.write("<b> Your age is </b> " +round+ "<br>")
// document.write("<b> Your birth year is </b> " +birthYear)

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)

// document.write(" <h1> K-Electric Bill </h1> <br><br> ")

// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 

// var within_due_date = new Date("02/27/2018")
// var after_due_date = new Date("02/28/2018")

// var customerName = "<b> Abdullah Mushtaq </b>"
// var currentMonth = within_due_date.getMonth()
// var month_name = months[ currentMonth]

// var numberOfUnits = 298
// var chargesPerUnit = 8.09
// var net_Amount_Payable = 3174
// var late_Payment_Surcharge = 262
// var gross_Amount_Payable = 3436

// document.write(" Customer Name: " +customerName+ "<br>")
// document.write(" Month: " +month_name+ "<br>")
// document.write(" Number of units:  " +numberOfUnits+ "<br>")
// document.write("Charges per unit: " +chargesPerUnit+ "<br><br>")
// document.write(" Net Amount Payable (within Due Date): " +net_Amount_Payable+ "<br>")
// document.write(" Late payment surcharge: " +late_Payment_Surcharge+ "<br>")
// document.write(" Gross Amount Payable (after Due Date): " +gross_Amount_Payable+ "<br>")

// Show exact time in thi format >>> 03:24:56

// var todayDate = new Date()
// var hours= todayDate.getHours()
// var minutes=todayDate.getMinutes()
// var seconds=todayDate.getSeconds()
// document.write("The exact time is: " +hours+":"+minutes+":"+seconds);



                                             // FUNCTION



// 1. Write a function that displays current date & time in your browser.

// function x () {

//     var cDate = new Date()
//     alert(cDate)
// }

// x()

// 2. Write a function that takes first & last name and then it greets the user using his full name.

// function abc () {

//     var fname = "Abdullah"
//     var lname = "Mushtaq"
//     alert(fname+ " " +lname)
// }
// abc()

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function add () {
//     var firstNum = +prompt("1st")
//     var secondNum = +prompt("2nd")
//     var sum = firstNum + secondNum
//     alert(sum)
// }
// add()

//  4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function Calculator () {
//     var num1 = parseInt ( prompt("1st") )
//     var num2 = parseInt ( prompt("2nd") )
//     var operator = prompt(" + , - , * , / , %")
//     var result;

//     if (operator == "+") {
//         alert(result = num1 + num2)
//     }
//     if (operator == "-") {
//         alert(result = num1 - num2)
//     }
//     if (operator == "*") {
//         alert(result = num1 * num2)
//     }
//     if (operator == "/") {
//         alert(result = num1 / num2)
//     }
//     if (operator == "%") {
//         alert(result = num1 % num2)
//     }
    
// }
// Calculator()


// 5. Write a function that squares its argument.

// function square(num1,num2) {
//     var root = num1 * num2
//     alert(root)
// }
// square(20,20)


// 6. Write a function that computes factorial of a number.

// function cal () {

//     // take input from the user
// var number = parseInt(prompt('Enter a positive integer: '));

// // checking if number is negative
// if (number < 0) {
//     alert("Error! Factorial for negative number does not exist");
// }

// // if number is 0
// else if (number === 0) {
//     alert("The factorial of " +number+ " is 1");

// }

// // if number is positive
// else {
//     var fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     alert("The factorial of " +number+ " is " +fact);
// }

// }
// cal()

// 7. Write a function that take start and end number as inputs & display counting in your browser.

// function count () {
//     for(i=0; i<10; i++) {
//         console.count("My Web Counting")
//     }
// }
// count()

// 8. Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2 

// function calcHypotenus(Base,  Perpendicular) { 
//     var x = ( Base*Base + Perpendicular*Perpendicular )
//     document.write("Hypotenuse<sup>2</sup> = Base<sup>2</sup> + Perpeendicular<sup>2</sup> <br><br>")
    
//     var a = +prompt("Enter the value of (A) Base: ")
//     var b = +prompt("Enter the value of (B) Perpendicular: ")
//     var c = a*a + b*b

//     document.write("The length of Hypotenuse is " +c)
// } 
// calcHypotenus()


// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function calculate (width, height, area) {

//     var width = 85
//     var height = 10
//     var area = width * height
//     document.write("The Area of Triangle with the given values, in which <br> " , " <b> Width </b> = " +width+ "<br>" , " <b> Height </b> = " +height+ "<br><br>" , " <b> Area of Tringle </b> = " +area)
// }
// calculate();


// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.


// // 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function  x (a, b, caps, c, small, res) {
//     var a = "the quick brown fox"

//     var b = a.slice(0, 1)
//     var caps = b.toUpperCase()

//     var c = a.slice(1)
//     var small = c.toLowerCase()

//     var res = caps + small

//     document.write(res)
// }
// x()

// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function findLongestWord (str) {

//      // Step 1. Split the string into an array of strings
//     var str_split = str.split('')

//       // Step 2. Initiate a variable that will hold the length of the longest word
//       var long_word = 0

//       // Steo 3. Create for loop
//       for ( var i = 0; i < str_split.length; i++ ) {
//         if ( str_split[i].length > long_word ) {
//             long_word = str_split[i].length
//         }
        
//       }
//       return long_word ;
//       document.write(long_word) 


// }

// findLongestWord("Hello guys this is geeksforgeeks where students learn programming")

// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

























