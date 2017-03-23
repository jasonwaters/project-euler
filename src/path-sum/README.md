# Path sum: two ways
https://projecteuler.net/problem=81

I chose this problem because I thought it would be interesting to do a path finding problem.  I originally thought it would be easier than it was.  First I started a simple traversal of the matrix, selecting the smallest of the two nodes.  But I quickly learned it's not that simple.  You actually have to consider the total cost of taking that path.  And in some cases one path is more efficient even though that element's value is larger than the other.

Ultimately, I ended up generating a cost matrix from the bottom up, with each node in the matrix representing the total ideal cost of that node.  That way the value in cell(0,0) is the smallest path sum.

For fun, I reused my traverse method to generate the path of values based on the total cost.

I did some googling after my initial effort was too simplistic.  [This page](http://www.mathblog.dk/project-euler-81-find-the-minimal-path-sum-from-the-top-left-to-the-bottom-right-by-moving-right-and-down/) helped me to think of a better solution.

I spent couple hours on this.
