fetch('https://jsonplaceholder.typicode.com/todos/1', {
  credentials: 'include'
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Handle the data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error('Fetch error:', error);
  });
