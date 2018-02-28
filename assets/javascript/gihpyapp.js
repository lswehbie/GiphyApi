//Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.

//Animals will be the theme---

var topics = ["pluto", "stars", "nebula", "wormhole", "uranus", "blackhole"];

var x;

for (var i = 0; i < topics.length; i++) {
  topics[i];

  //  Your app should take the topics in this array and create buttons in your HTML.
  // * Try using a loop that appends a button for each string in the array.

  var btn = document.createElement("BUTTON");
  var t = document.createTextNode(topics[i]);
  btn.appendChild(t);
  $("#space").append(btn);
}

//When the user clicks on a button, the page should grab 10 static, non-animated gif
//images from the GIPHY API and place them on the page.

// when you click the button it appears as text

$("#space").on("click", function(event) {
  x = $(event.target).text();

  //personal Giphy API key

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    x +
    "&api_key=n8iqU0pSZjIuWNBGDd3gKnhkJYo4FFy4&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var arrayOfGifs = response.data;


    for (i = 0; i < arrayOfGifs.length; i++) {
      var images = document.createElement("img");
      var stillPic = arrayOfGifs[i].images.downsized_still.url;
      var movingPic = arrayOfGifs[i].images.downsized_large.url;
      $(images).attr("src", stillPic);
      $(images).attr("class", "imageSize");
      $("#resultsWrapper").append(images);
      $("#resultsWrapper").removeData();

      console.log(stillPic);


    }

    //When the user clicks one of the still GIPHY images, the gif should animate.
    //If the user clicks the gif again, it should stop playing.

      $(document).on("click", ".imageSize", function(event) {
        console.log(arrayOfGifs[i]);
        $(this).attr("src", movingPic);
      })
  });
});

// the user will be able to search
$("#searchMore").submit(function(event) {
  event.preventDefault();

  //creating new variable from the user input
  //Add a form to your page takes the value from a user input box and adds it into your `topics` array.
  //Then make a function call that takes each topic in the array remakes the buttons on the page.

  var spacey = $("#getMore").val();

  topics.push(spacey);
  topics.splice(0, topics.length - 1);

  for (var i = 0; i < topics.length; i++) {
    topics[i];

    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(topics[i]);
    btn.appendChild(t);
    $("#space").append(btn);
  }
});

// Under every gif, display its rating (PG, G, so on).
//* This data is provided by the GIPHY API.
