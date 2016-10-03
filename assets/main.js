"use strict"
let bbcArticle;

window.onload = function() {
  var sportsSection = document.getElementById("sportsSection")
  bbcArticle = document.getElementById("sportsArticle");
  console.log("inside the window on load");
  bbcArticle.addEventListener("load", bbcSportsData);
  bbcSportsData();
  // document.body.appendChild(bbcArticle);
  sportsSection.appendChild(bbcArticle);
};

//Retrieval of initial data bbc sport
function bbcSportsData(event) {
  $.ajax({
    url: "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=909efd3e931c4e16bde5565b8d10f113",
    method: "GET",
    success: bbcNewsResult,
    // error: bbcNewsError
  });
}

function bbcNewsResult(data) {
  console.log("in the bbcNewsresult function with " + bbcArticle);
  console.log(data);
  let resultTitle = document.createElement("h3");
  let resultImage = document.createElement("img");
  let resultArticle = document.createElement("p");

  resultTitle.textContent = data.articles[0].title;
  resultImage.src = data.articles[0].urlToImage;
  resultArticle.textContent = data.articles[0].description;

  bbcArticle.appendChild(resultTitle);
  bbcArticle.appendChild(resultArticle);
  bbcArticle.appendChild(resultImage);

}
//
// function bbcNewsError {
//
// }

// $("document").ready(function(){
//   console.log("inside");
// });


//What the hell is this?
// var xhttp;
// if (window.XMLHttpRequest) {
//     xhttp = new XMLHttpRequest();
//     } else {
//     // code for IE6, IE5
//     xhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
