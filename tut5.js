/* Question:
FizzBuzz (classic programmer test 🔥)

Using a for loop from 1 to 15, print:

"Fizz" if the number is divisible by 3

"Buzz" if the number is divisible by 5

"FizzBuzz" if divisible by both 3 and 5

Otherwise print the number itself

*/

for(let i = 1; i <= 15; i++)
    {
        if(i % 3 === 0)
            {
                console.log("Fizz");
            }
        else if(i % 5 == 0)
            {
                console.log("Buzz");
            }     
        else if(i % 3 == 0 && i % 5 == 0)
            {
                console.log("FizzBuzz");
            }
        else console.log(i);
    };
