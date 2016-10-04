"use strict"
let sourcesArr;
var sourcesUrl;

// var randomSportSourcesArr = randomElementsArr(sourcesArr);
// console.log(randomSportSourcesArr);

window.onload = function() {
  var sportsSection = document.getElementById("sportsSection");
  sourcesArr = [
    {
      source: "BBC Sports",
      url: "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "ESPN",
      url: "https://newsapi.org/v1/articles?source=espn&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "Football Italia",
      url: "https://newsapi.org/v1/articles?source=football-italia&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "FourFourTwo",
      url: "https://newsapi.org/v1/articles?source=four-four-two&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
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
      source: "talkSport",
      url: "https://newsapi.org/v1/articles?source=talksport&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    },
    {
      source: "TheSPORTbible",
      url: "https://newsapi.org/v1/articles?source=the-sport-bible&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113"
    }
  ];
  for (let i = 0; i < sourcesArr.length; i++) {
    var sourcesUrl = sourcesArr[i].url;
    var sportsArticle = document.createElement("article");
    sportsArticle.className += "sportsArticleClass";
    sourcesArr[i] = sportsArticle;
    console.log(sourcesUrl);
    apiData(i, sourcesUrl);
    // sourcesArr[i].addEventListener("load", apiData);
    //function for adding the content goes here;
    sportsArticle.textContent = "article area " + i; //remove this when ready
    sportsSection.appendChild(sportsArticle);
  }
};

//Retrieval of initial data bbc sport
function apiData(idxForSourcesArr, url) {
  //Set a different var that returns the url and have it as the var that is going
  //to render the url in the url key
  console.log("The url is: " + url);
  $.ajax({
    url: url,
    // url: sourcesArr[idxForSourcesArr]['url'],
    method: "GET",
    success: sportsNewsResult
    // error: bbcNewsError
  });

  // Inner function in order to close over idxForSourcesArr
  function sportsNewsResult(data) {
    console.log(data);
    let resultTitle = document.createElement("h3");
    let resultImage = document.createElement("img");
    let resultArticle = document.createElement("p");

    resultTitle.textContent = data.articles[0].title;
    resultImage.src = data.articles[0].urlToImage;
    resultArticle.textContent = data.articles[0].description;

    //
    console.log(sourcesArr[idxForSourcesArr]);
    sourcesArr[idxForSourcesArr].appendChild(resultTitle);
    sourcesArr[idxForSourcesArr].appendChild(resultArticle);
    sourcesArr[idxForSourcesArr].appendChild(resultImage);

  }
}



//Get random elements inside an array;
function randomElementsArr (array) {
  let endArray = [];
  let iterator = array.length;
  for (let i = 0; i < iterator; ) {
    let counter = Math.floor(Math.random() * iterator);
    if (endArray.indexOf(array[counter]) === -1) {
        endArray.push(array.splice(counter,1));
    }
    // array.splice(counter,1);
    iterator --;
  }
  return endArray;
};
//
// function bbcNewsError {
//
// }

// $("document").ready(function(){
//   console.log("inside");
// });



/*--------------------------
Working as of Monday
window.onload = function() {
  var sportsSection = document.getElementById("sportsSection");
  sourcesArr = new Array(2);
  for (let i = 0; i < sourcesArr.length; i++) {
    var sportsArticle = document.createElement("article");
    sportsArticle.className += "sportsArticleClass";
    sourcesArr[i] = sportsArticle;
    apiData(i);
    // sourcesArr[i].addEventListener("load", apiData);
    //function for adding the content goes here;
    sportsArticle.textContent = "article area " + i; //remove this when ready
    sportsSection.appendChild(sportsArticle);
  }
  // bbcArticle = document.getElementById("sportsArticle");
  // console.log("inside the window on load");
  // bbcArticle.addEventListener("load", apiData);
  // apiData();
  // document.body.appendChild(bbcArticle);
  // sportsSection.appendChild(bbcArticle);
};

----------------------------*/


//What the hell is this?
// var xhttp;
// if (window.XMLHttpRequest) {
//     xhttp = new XMLHttpRequest();
//     } else {
//     // code for IE6, IE5
//     xhttp = new ActiveXObject("Microsoft.XMLHTTP");
// }
