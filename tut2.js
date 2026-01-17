// Write a for loop to print only even numbers from 1 to 10.

for(let i = 1; i <=10; i++)
    {
        if(i%2 === 0)
            {
                console.log(`${i} is even.`);
            };
    };

// Second way to do the same without using if/else statements.

for(let i = 2; i <=10; i+2)
{
  console.log(i);
}
