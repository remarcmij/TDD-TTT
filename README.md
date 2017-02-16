# Test Driven Tic Tac Toe

References:
- https://jasmine.github.io
- https://nodejs.org/en/
- http://npmjs.org/

How to install:
```
npm install
```

How to run jasmine:
```
./node_modules/.bin/jasmine
```

## Jim's solution

I'm first converting the board array into a string and then match that string against all possible winning patterns that I've defined as an array of regular expressions. I do not stop upon finding the first match, but check all patterns.

If a match is found I'm saving the name in the var `nameOfWinner` which is initialized to `null`. However if `nameOfWinner` was already set because of a previous match I throw an error.

When all patterns are checked I simply return `nameOfWinner` which is either `null` or the name of the winner.

**Game Over**