//const postsPromise = fetch('http://mywebsite.com/API'); // return Promise
// const postsPromise = fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(function(response) {
return response.text();
// response.json() extracts json from response
// and returns new Promise
})
.then(function(myJson) {
console.log(JSON.parse(myJson));
})
.catch(error => console.log(error.message)
);