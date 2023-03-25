# Round 1

# Q 1: map vs forEach

forEach doesn't return a new array, it modifies the original one.
Map returns a new array with the actions applied.
forEach cannot be chained with another actions.
Map can be chained with other array methods like filter.

# Q 2: Null vs Undefined

Undefined -> variable is declared but it is not initialized yet.
Null -> it is an actual value (a value we do not know yet).

# Q 3: Event Delegation

Event Delegation is a technique for manipulating the DOM.
This technique refers to the add of an event to the parent element instead of adding the event to the every children.
Advantages: increased performance.
Bubbling and event delegation are quite related.
Bubbling is a mechanism in which an event can go up in the DOM hierarchy, from the source up to the parent and his ancestors.
Event delegation adds only one event listener to the parent element.

# Q 4: Flatten the array

flat method can be used
Also we can create a function that can do it

# Q 5: Var vs Let vs Const

Var is function scoped
Let and Const are blocked scoped

# Q 6: setTimeout

The solution of this is to use let instead of var

# Q 7: call, bind and apply

Used to manipulate the context for functions

# Q 8: Composition Polyfill

Using reduceRight

# Q 9: Implement Promise.all

Promise.all waits for all the promises to get completed and after that returns them in an array
If one of these promises failes then all the promises will fail

# Q 10: Ways to center a div

With display grid, display flex and by top and left properties (e.g. style.css file)

# Q 11: CSS Box Model

Content -> Padding -> Border -> Margin

# Round 2

# Q 12:

Small shopping cart in React

# Q 13

Panagram string checker

# Q 14

Convert 12h to 24h
