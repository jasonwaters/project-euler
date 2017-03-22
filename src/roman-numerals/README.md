# Roman numerals
https://projecteuler.net/problem=89

I chose this problem because it looked interesting, and I thought it would be fun to write a roman numeral parser and generator.  

I first wrote the roman numeral parser so I could get the values of input strings.  Then I wrote a roman numeral generator that outputs the most efficient way to write a number in roman numerals.

Next, I implemented some helper methods to make it easy to run these methods on an array of values.

Finally, I wrote a `diff` method that ties everything together so that I could interpret, re-generate, and calculate the character savings in one fell swoop.

I found that my solution was not returning the correct value, and after some googling I found what the answer was supposed to be (427337).  I wrote a failing test and soon discovered that I had a bug in the way I was parsing roman numerals.  I fixed the problem and made the method more efficient in the process.
 
I read a few resources [like this one](https://projecteuler.net/about=roman_numerals) to learn all the rules of Roman Numerals.  That was enough to get the job done.

It took me about an hour.
