

$(document).ready(function () {
  const apiKeyNasa = "5nSyRV6dlCqhWgRP72cVEBRioUuHO57peU3dJO5O";
  const queryURLNasa = `https://api.nasa.gov/planetary/apod?api_key=${apiKeyNasa}`;

  $.ajax({
    url: queryURLNasa,
    method: "GET"
  }).then(function (response) {
    //console.log("Title:", response.title);
    //console.log("Description:", response.explanation);
    //console.log("Image URL:", response.url);
    //console.log(`-------------------------------------------------`)
    $("#pod-title").text(response.title);
    $("#pod-description").text(response.explanation);
    $("#pod-image-url").attr("src", response.url);
  });



  const queryURLNasaPhoto = `https://images-api.nasa.gov/search?q=mars`;

  $.ajax({
    url: queryURLNasaPhoto,
    method: "GET"
  }).then(function (response) {
    let images = response.collection.items;

    $("#today-gallery").empty();

    for (let i = 0; i < 8; i++) {
      let randomIndex = Math.floor(Math.random() * images.length);
      let imageURL = images[randomIndex].links[0].href;
      let desc = images[randomIndex].data[0].description;
      if (desc.length > 100) {
        desc = desc.substring(0, 100) + "...";
      }
      let title = images[randomIndex].data[0].title;
      if (title.length > 15) {
        title = title.substring(0, 15) + "...";
      }

      let galleryHTML = `
        <div class="col-md-3 col-lg-3 col-sm-12">
          <img src="${imageURL}" alt="" class="img-fluid border-color gallery-img mt-3">
          <h3 class="mt-3">${title}</h3>
          <p class="mt-3">${desc}</p>
        </div>
      `;

      $("#today-gallery").append(galleryHTML);
    }
  });
  // get coordinates from postal code. 
  // https://nominatim.openstreetmap.org/

  // https://nominatim.openstreetmap.org/search?q=mk62px&format=json&polygon=1&addressdetails=1

  function getPostalCodeFromButton(postalCode) {

    $.ajax({
      url: `https://nominatim.openstreetmap.org/search?q=${postalCode}&format=json&polygon=1&addressdetails=1`,
      type: "GET",
      dataType: "json",
      success: postalCodeJSONHandler, // pass address detail
      error: errorHandler // throe error incase, 
    });

  }


  function postalCodeJSONHandler(data) {

    console.log(data)

    try {
      obj = {
        residential: data[0].address.suburb,
        lat: data[0].lat,
        lon: data[0].lon,
        city: data[0].address.city,
        postcode: data[0].address.postcode,
        country: data[0].address.country
      }

      htmlGetCoordinates(obj)

    } catch (e) {
      throw e;
    }

  }

  function errorHandler(e) {

    throw e;
  }

  function htmlGetCoordinates(obj) {
    // hide get coordinates button
    $('#get-coordinates').hide(200)

    $('#getCoordinatesDialog').modal('hide');

    // display residential details 

    // display MAP 

    let resident_data = $("#resident-data");

    console.log(obj)

    $('<h3/>', {
      class: "text-center",
      text: ` ${obj.residential}, ${obj.city} `

    }).appendTo(resident_data);


    $('<p/>', {
      html: `lat: ${obj.lat}`

    }).appendTo(resident_data);
    $('<p/>', {
      html: `lon: ${obj.lon}`

    }).appendTo(resident_data);





    openStreetMapPostCode(obj.lon, obj.lat)


  }
  // get the coordinates on MAP
  function openStreetMapPostCode(lon, lat) {
    console.log(lon, lat)
    map = new OpenLayers.Map("spaceAPIMap");
    var mapnik = new OpenLayers.Layer.OSM();

    var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
    var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
    var position = new OpenLayers.LonLat(lon, lat).transform(fromProjection, toProjection);
    var zoom = 15;

    map.addLayer(mapnik);
    var markers = new OpenLayers.Layer.Markers("Markers");
    map.addLayer(markers);
    markers.addMarker(new OpenLayers.Marker(position));
    map.setCenter(position, zoom);

    $("#spaceAPIMap").append(map.div)
    $('#showMap').show()



  }



  $(".modal-footer").on('click', "button[id='send-coordinates']", function (e) {

    e.preventDefault();

    let postCode = $("#input-text").val().trim();

    postCode = postCode.split(' ');

    let addPostCode = '';

    postCode.forEach(element => {
      addPostCode += element;

    });

    getPostalCodeFromButton(addPostCode)


  })
});

/*
const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://news-space.p.rapidapi.com/",
  "method": "GET",
  "headers": {
    "X-RapidAPI-Key": "e59f1aabebmsh9d2cde2ad55bd9ap14a2e6jsna6c5035bd8dd",
    "X-RapidAPI-Host": "news-space.p.rapidapi.com"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

$.ajax(settings).done(function (response) {
    const articles = response;
    for (let i = 0; i < 10; i++) {
      const title = articles[i].title;
      const url = articles[i].url;
      console.log(title);
      console.log(url);
    }
});

*/
