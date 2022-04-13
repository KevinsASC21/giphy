let giphy_url = `https://api.giphy.com/v1/gifs/search?q=puppy&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

// giphy api call test
fetch(giphy_url)
.then(function(response) {
return response.json();
})

.then(function(json) {
// console.log(json.data[0].images.original.url)
// $(".main").append(`<img src=${json.data[0].images.original.url}>`)

});

// search click handler
$(".search-button").click(function() {
let userSearch = $(".search-term").val();
console.log(userSearch);

giphy_url = `https://api.giphy.com/v1/gifs/search?q=${userSearch}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`
fetch(giphy_url)
.then(function(response) {
return response.json();
})

.then(function(json) {
// console.log(json.data[0].images.original.url)
$(".main").append(`<img src=${json.data[Math.floor(Math.random() * json.data.length)].images.original.url}>`);
$(".main").append(`<img src=${json.data[Math.floor(Math.random() * json.data.length)].images.original.url}>`);
$(".main").append(`<img src=${json.data[Math.floor(Math.random() * json.data.length)].images.original.url}>`);


});

  
});



