# highestHandApp

Instructions:

* Make sure that you have Node, Git and npm installed.
After npm has beeen installed run the following commands to install "require" and "mocha"(for testing)
`npm install require && npm install mocha`

* use node to execute the program:
  - on desired directory, run `git pull https://github.com/Rafael1129/highestHandApp.git` to pull app from git repository
  - on the terminal, navigate to project directory and run command `node main.js`
  - app creates new decks(default 6 for poker), and draws 5 cards. The contents of the cards and the highest hand possible are printed to the console.

* to execute tests run `npm test`


Assumptions while writing code:

#1 Assumed at beggining of project that the Node app should have a UI, which caused some time to be wasted implementing some UI work with React. By the intructions, printing to console was sufficient, so I started the app from scratch without using a web framework.
#2 Assumed that Node js would not have too much of a learning curve, from a Ruby perspective. The intructions stated that other language could be used, which I should have done instead of writing in a language I am not very familiar with.
#3 Assumed that global variables could easily be accessed when importing another class(or module in this case) or more specifically I misunderstood the best practices to do so in Node js.
#4 Greatly understimated or wrongly assumed that figuring out the hands in Poker would be more or less a matter of adding the hand. More thought should have being put in designing a proper solution before writing the code for the portion that identifies the highest hand. Starting the code before having a full picture regarding the solution caused a lot of time wasted on "solutions" that did not work.
#5 Assumed that tests would be somewhat straighforward, so writing the tests were left as last step, which goes agains't best practices of writing most of the unit tests before implementing a solution.