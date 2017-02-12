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

I'm first converting the board array into a string and then match that string against all possible winning patterns that I've defined as an array of regular expressions.

I'm also checking to make sure there is no more than one winning pattern and throw an error if otherwise (future enhancement: add 'Game Over' logic).

I've added a test to check that the exception is thrown.
