[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


## Answer
The complexity for the outer for loop is $\log_2(n)$ because of the i = 1 and i *= 2. The middle nested for loop has a complexity of $n$ because it is just iterating through the entire array. In the inner for loop we are again just looping through the subarrays which gives us $n$. When we combine these we get $\Theta(n * n * \log_2(n))$ which can be simplified to $\Theta(n^2 \log_2(n))$. So our final answer for our asymptotic complexity is $\Theta(n^2 \log_2(n))$. This also makes sense intuitively as we are essentially trading speed for less memory.