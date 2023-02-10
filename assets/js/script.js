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
    $("#pod-title").text(response.title);
    $("#pod-description").text(response.explanation);
    $("#pod-image-url").attr("src", response.url);
  });



const queryURLNasaPhoto = `https://images-api.nasa.gov/search?q=mars`;

$.ajax({
    url: queryURLNasaPhoto,
    method: "GET"
  }).then(function(response) {
    console.log("Title:", response.collection.items[1].data[0].title);
    console.log("Description:", response.collection.items[1].data[0].description);
    console.log("Image URL:", response.collection.items[1].links[0].href);
    console.log(`-------------------------------------------------`)
  });
