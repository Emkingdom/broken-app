### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Promesis, callbacks and Async and Await functions 

- What is a Promise?
  Promise is an object representing the eventual completion or failur of an asynchronus operation.

- What are the differences between an async function and a regular function?
  - return value 
    - async function return a promise and regular function return a specified value.
  - handle  asynchronous code,
    - async function can use the keywoord await.
    - regular function cant use 
  - Error handeling 
    - async can use try catch block 
    - regular function use tradicional try catch
  - Declaration 
    - async defined using async before the function declaration and regular without async 

- What is the difference between Node.js and Express.js?
  - node is platform that allows to run Javascript on the server and  Express ia framework tha simplifies the development of webaplication using node 

- What is the error-first callback pattern?
  - is a way to handle error in asynchronus code and commonly used in node 


- What is middleware?
 - refers to a concept where functions can be used to process incoming requests before they reach their final destination and handle outgoing responses before they are sent back to the client.

- What does the `next` function do?
  - find the 'next' matching route and execute 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  -Not error handdle 

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
