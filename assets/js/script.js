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
  let images = response.collection.items;

  for(let i = 0; i < 4; i++) {
    let imageURL = images[i].links[0].href;

    let galleryHTML = `
      <div class="col-3">
        <img src="${imageURL}" alt="" class="img-fluid" style="height:200px">
      </div>
    `;

    $("#today-gallery").append(galleryHTML);
  }
});
