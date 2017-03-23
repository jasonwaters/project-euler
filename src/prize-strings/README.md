# Prize Strings
https://projecteuler.net/problem=191

I thought this one would be fun, since it looked like a permutations problem.  I figured, I'll just generate all the different variations of late, on time, and absent.  Then I can look at the strings and determine if they are prize worthy.  This approach worked just fine for the 4 day example.  Then I tried running it for the 30 day period.  I figured it would take under a minute, but boy was I wrong!  
 
I revized my solution to calculate prize-worthiness while generating the permutations, and made the recursion stop if it has already detected the permutation is not prize worthy.  While this did make the algorithm more efficient, it still was not enough for my computer to slog through generating all 30-day combinations in under a few weeks. :dizzy_face:
 
My hope that this solution would be a nice little permutations algorithm was long gone.  I did [some googling](http://jsomers.net/blog/project-euler-problem-191-or-how-i-learned-to-stop-counting-and-love-induction) and realized that, of course, this problem can be reduced to a for loop that executes in O(n) time!  I borrowed (heavily) from the solution on that page in order to calculate the number of prize worth attendance strings for very large day counts.  But I left my permutations code, since that was more fun anyway.
 
I spent a few hours on this. 
