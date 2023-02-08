const apiKeyNasa = "5nSyRV6dlCqhWgRP72cVEBRioUuHO57peU3dJO5O";
const queryURLNasa = `https://api.nasa.gov/planetary/apod?api_key=${apiKeyNasa}`;

$.ajax({
    url: queryURLNasa,
    method: "GET"
  }).then(function(response) {
    console.log("Title:", response.title);
    console.log("Description:", response.explanation);
    console.log("Image URL:", response.url);
  });
  




  const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://space-news.p.rapidapi.com/news/guardian",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "5eee59729amsh14ba8d2e0c49119p1e060fjsn0283d7f8a93c",
		"X-RapidAPI-Host": "space-news.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
