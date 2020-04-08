/*Write a program that prints the numbers from 1 to 100. 
But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
For numbers which are multiples of both three and five print “FizzBuzz”.*/
for(i=0;i<100;)console.log((++i%15?'':'FizzBuzz')+(++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)