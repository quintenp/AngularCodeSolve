# Angular Code Solve
Site hosted via github project hosting : http://quintenp.github.io/AngularCodeSolve/#/employees

_I will give a brief summary of some of the problems I spotted and how I addressed them.  I might now have listed everything here I fixed quite a bit while working on the main principals_

# Analysis

_I refactored the application even more to get it to a much better state, modules split into seperate files, 
controllers refactored and added, logging service implemented, organogram tree implemented, ui templates added to further reduce 
duplication, routing cleaned up._

I went for a Unordered list for the organogram as time was a bit of a problem this time around, I built a light weight directive calling itself recursively until the full Object hiearchy is fully displayed.  

To solve the circular datastructure problem on the service side, I wrote a simple recursive data mapping algorithm to ensure all children gets mapped recursively until we have mapped each employee in the circular structure breaking out of the circle.


