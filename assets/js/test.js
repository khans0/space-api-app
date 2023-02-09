// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '87c77dd491mshb218f6e9a25c636p13311ajsneb08a28b3831',
//         'X-RapidAPI-Host': 'space-news.p.rapidapi.com'
//     }
// };

// fetch('https://space-news.p.rapidapi.com/news/guardian', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Host': 'jokes-by-api-ninjas.p.rapidapi.com',
//         'X-RapidAPI-Key': '87c77dd491mshb218f6e9a25c636p13311ajsneb08a28b3831'
//     }
// };

// fetch('https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b338d78336msh39230d8dda32025p13962fjsne2bdb23a26d8',
// 		'X-RapidAPI-Host': 'space-news.p.rapidapi.com'
// 	}
// };

// fetch('https://space-news.p.rapidapi.com/news/guardian', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://chatgpt-and-openai-news-api.p.rapidapi.com/news",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "87c77dd491mshb218f6e9a25c636p13311ajsneb08a28b3831",
// 		"X-RapidAPI-Host": "chatgpt-and-openai-news-api.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&apiKey=c19e2c5ae8864f5cbeed246c640321a3

const API_KEY = "nTFSejbcCGsWOTHuGx8uYTf4rUfp9rOmzXad6Y1q";
const API_URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-01-08&sortBy=publishedAt&";

fetch(`${API_URL}?apiKey=c19e2c5ae8864f5cbeed246c640321a3`, {
    "x-api-key":"c19e2c5ae8864f5cbeed246c640321a3"
})
  .then(response => response.json())
  .then(data => {
    console.log("Title:", data.title);
    console.log("Explanation:", data.explanation);
    console.log("Image URL:", data.url);
  })
  .catch(error => console.error(error));

// const API_KEY = "87c77dd491mshb218f6e9a25c636p13311ajsneb08a28b3831";
// const API_URL = "https://space-news.p.rapidapi.com/news/search";

// fetch(`${API_URL}?category=science&sources=space`, {
//   headers: {
//     "X-RapidAPI-Host": "space-news.p.rapidapi.com",
//     "X-RapidAPI-Key": API_KEY
//   }
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log("News:", data.articles);
//   })
//   .catch(error => console.error(error));
