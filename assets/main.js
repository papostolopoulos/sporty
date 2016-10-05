"use strict"
  var sourcesArr = [
    {
      source: "ESPN",
      url: "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "Fox Sports",
      url: "https://newsapi.org/v1/articles?source=fox-sports&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "NFL News",
      url: "https://newsapi.org/v1/articles?source=nfl-news&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "SKY Sports News",
      url: "https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
    source: "BBC Sports",
    url: "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=909efd3e931c4e16bde5565b8d10f113"
  },
  {
    source: "FourFourTwo",
    url: "https://newsapi.org/v1/articles?source=four-four-two&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
  },
  {
    source: "talkSport",
    url: "https://newsapi.org/v1/articles?source=talksport&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
  },
  {
    source: "TheSPORTbible",
    url: "https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
  },
  {
    source: "Football Italia",
    url: "https://newsapi.org/v1/articles?source=football-italia&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
  }
];
// var randomSportSourcesArr = randomElementsArr(sourcesArr);
// console.log(randomSportSourcesArr);

window.onload = function() {
  // var randomOrderSources = randomElementsArr(sourcesArr);
  var sportsSection = document.getElementById("sportsSection");
  for (let i = 1; i < sourcesArr.length; i++) {
    var sourcesUrl = sourcesArr[i].url;
    var sportsArticle = document.createElement("article");
    sportsArticle.className += "sportsArticleClass";
    sourcesArr[i] = sportsArticle;
    apiData(i, sourcesUrl);
    sportsSection.appendChild(sportsArticle);
  }

  toggleArticleClasses();
};//End of onload function

//api Data retrieval
function apiData(idxForSourcesArr, url) {
  console.log("The url is: " + url);
  $.ajax({
    url: url,
    method: "GET",
    success: sportsNewsResult
    // error: bbcNewsError
  });

  // Inner function in order to close over idxForSourcesArr
  function sportsNewsResult(data) {
    let resultTitle = document.createElement("h3");
    let resultSource = document.createElement("h4");
    let imageDiv = document.createElement("div");
    let resultImage = document.createElement("img");
    let resultArticle = document.createElement("p");
    let resultAnchor = document.createElement("a");

    imageDiv.className += "imageDiv";
    resultTitle.textContent = data.articles[0].title;
    resultAnchor.setAttribute("href", data.articles[0].url);
    resultAnchor.setAttribute("target", "_blank");
    resultImage.setAttribute("alt", "Sorry, there is no image provided by the source")
    resultAnchor.innerText = "Source: " + data.source + " via newsapi.org ";
    console.log(data.articles[0].source);
    resultImage.src = data.articles[0].urlToImage;
    resultArticle.textContent = data.articles[0].description;

    //
    imageDiv.appendChild(resultImage);
    sourcesArr[idxForSourcesArr].appendChild(imageDiv);
    sourcesArr[idxForSourcesArr].appendChild(resultTitle);
    resultSource.appendChild(resultAnchor);
    sourcesArr[idxForSourcesArr].appendChild(resultSource);
    sourcesArr[idxForSourcesArr].appendChild(resultArticle);

  }
} //End of apiData function

//Get random elements inside an array;
function randomElementsArr (array) {
  var endArray = [];
  let iterator = array.length;
  for (let i = 0; i < iterator; ) {
    let counter = Math.floor(Math.random() * iterator);
    if (endArray.indexOf(array[counter]) === -1) {
      endArray.push(array.splice(counter,1));
    }
    iterator --;
  }
  return endArray;
}

// function bbcNewsError {
//
// }

//toggle between classes for expanding the article content
function toggleArticleClasses() {
  $(".sportsArticleClass").on("click", function(){
    $(this).siblings().removeClass("sportsArticleExpanded");
    $(this).toggleClass("sportsArticleExpanded");
    $(this).children("div").toggleClass("imageDivExpanded");
  });
}


//What the hell is this?
// var xhttp;
// if (window.XMLHttpRequest) {
//     xhttp = new XMLHttpRequest();
//     } else {
//     // code for IE6, IE5
//     xhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
