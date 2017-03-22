# Prize Strings
https://projecteuler.net/problem=191

I thought this one would be fun, since it looked like a permutations problem.  I figured, I'll just generate all the different variations of late, on time, and absent.  Then I can look at the strings and determine if they are prize worthy.  This approach worked just fine for the 4 day example.  Then I tried running it for the 30 day period.  I figured it would take under a minute, but boy was I wrong!  
 
I revized my solution to calculate prize-worthiness while generating the permutations.  Then abort generating additional permuations if it has already been determined one is not prize worthy.  While this did make the algorithm more efficient, it still was not enough for my computer to slog through generating all 30-day combinations in under a few weeks. :dizzy_face:
 
My hope that this solution would be a nice little permutations algorithm was long gone.  I did [some googling](http://jsomers.net/blog/project-euler-problem-191-or-how-i-learned-to-stop-counting-and-love-induction) and realized that, of course, this problem is must faster if you don't generate all the permutations yourself.  But that takes all the fun out of it!
 
 
