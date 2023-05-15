
  
  
  document.getElementById("button").addEventListener("click", getDetails);
  function getDetails() {

    fetch("https://jsonplaceholder.typicode.com/todos/1")

    .then(details => {
      console.log(details.url);
      console.log(details);
       
    })
    .catch(error => {console.log(error);});  
  }