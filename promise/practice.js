// function calculateSquareRoot(number) {
//     return new Promise((resolve, reject) => {
//       if (number >= 0) {
//         const result = Math.sqrt(number);
//         resolve(result);
//       } else if(result >100) {
//         reject('Invalid input. Number must be non-negative.');
//       }
//       else{}
//     });
//   }

//   calculateSquareRoot(100)
//   .then(result => console.log(result))
//   .catch(error => console.error(error));
// Output: Invalid input. Number must be non-negative.

// const a = fetch('https://jsonplaceholder.typicode.com/todos/1');
// const b = a.then(response =>response.json());
// const c = b.then(data => console.log(data));
// console.log(a);
// console.log(b);
// c;

// const a = fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response =>response.json())
// .then(data => console.log(data));

//this am example to conver the json data into string

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => {
//     console.log(JSON.stringify(data));
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });


// function getData() { 
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       //.then(data => console.log(data))
//   }
//   getData()
//   .then(data => {console.log(data);
//         // Output: {userId: 1, id: 1, title: "delectus aut autem", completed: false}
//   })

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(response) {
// return response.json();
// // response.json() extracts json from response
// // and returns new Promise
// })
// .then(function(myJson) {
// console.log(JSON.parse(myJson));
// })
// .catch(error => console.log(error.message)
// );

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(res) {return res.json()})
// .then(dat => console.log(dat));
const loadPhoto = async photoId => {
    console.log("working");
    const photoResponse =
    await fetch(`http://ex.com/photos/${photoId}`);
    const photo = await photoResponse.json();
    const albumResponse =
    await fetch(`http://ex.com/albums/${photo.albumId}`)
    const album = await albumResponse.json();
    photo.album = album;
    return photo; // automatically wrapped in a Promise object
    }
    loadPhoto('ex64168abe75bfd7.65151740')
    
    


  
  