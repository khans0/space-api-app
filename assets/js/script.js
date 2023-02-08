const apiKeyNasa = "5nSyRV6dlCqhWgRP72cVEBRioUuHO57peU3dJO5O";
const queryURLNasa = `https://api.nasa.gov/planetary/apod?api_key=${apiKeyNasa}`;

$.ajax({
    url: queryURLNasa,
    method: "GET"
  }).then(function(response) {
    console.log("Title:", response.title);
    console.log("Description:", response.explanation);
    console.log("Image URL:", response.url);
    console.log(`-------------------------------------------------`)
  });



  const queryURL = `https://api.le-systeme-solaire.net/rest/`;
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log("Title:", response.info.title);
      console.log("Description:", response.info.description);
      console.log(`-------------------------------------------------`)
    });
