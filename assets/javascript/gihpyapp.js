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
$("BUTTON").click(function() {
  x = $(this).text();



  //personal Giphy API key

  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    x +
    "&api_key=n8iqU0pSZjIuWNBGDd3gKnhkJYo4FFy4&limit=10";

  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var arrayOfGifs = response.data;

    for (i = 0; i < arrayOfGifs.length; i++) {
      console.log(arrayOfGifs[i]);

      var images = document.createElement("img");
      $(images).attr("src", arrayOfGifs[i].images.original.url);
      $("#resultsWrapper").append(images);
      $("#resultsWrapper").removeData();


      console.log(images);


    }


  });



});

//event.preventDefault()  FOR THE SEARCH BAR !!!!! LOOK IT UP

//When the user clicks one of the still GIPHY images, the gif should animate.
//If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).
//* This data is provided by the GIPHY API.
//* Only once you get images displaying with button presses should you move on to the next step.

//Add a form to your page takes the value from a user input box and adds it into your `topics` array.
//Then make a function call that takes each topic in the array remakes the buttons on the page.