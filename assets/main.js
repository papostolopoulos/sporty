"use strict"
let sportSourcesArr;

var sportSources = [
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
// var randomSportSourcesArr = randomElementsArr(sportSourcesArr);
// console.log(randomSportSourcesArr);

window.onload = function() {
  var sportsSection = document.getElementById("sportsSection");
  sportSourcesArr = new Array(2);
  for (let i = 0; i < sportSourcesArr.length; i++) {
    var sportsArticle = document.createElement("article");
    sportsArticle.className += "sportsArticleClass";
    sportSourcesArr[i] = sportsArticle;
    bbcSportsData(i);
    // sportSourcesArr[i].addEventListener("load", bbcSportsData);
    //function for adding the content goes here;
    sportsArticle.textContent = "article area " + i; //remove this when ready
    sportsSection.appendChild(sportsArticle);
  }
  // bbcArticle = document.getElementById("sportsArticle");
  // console.log("inside the window on load");
  // bbcArticle.addEventListener("load", bbcSportsData);
  // bbcSportsData();
  // document.body.appendChild(bbcArticle);
  // sportsSection.appendChild(bbcArticle);
};

//Retrieval of initial data bbc sport
function bbcSportsData(indexForSportsArr) {
  $.ajax({
    url: "https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=909efd3e931c4e16bde5565b8d10f113",
    method: "GET",
    success: bbcNewsResult
    // error: bbcNewsError
  });

  // Inner function in order to close over indexForSportsArr
  function bbcNewsResult(data) {
    console.log(data);
    let resultTitle = document.createElement("h3");
    let resultImage = document.createElement("img");
    let resultArticle = document.createElement("p");

    resultTitle.textContent = data.articles[0].title;
    resultImage.src = data.articles[0].urlToImage;
    resultArticle.textContent = data.articles[0].description;

    //
    console.log(sportSourcesArr[indexForSportsArr]);
    sportSourcesArr[indexForSportsArr].appendChild(resultTitle);
    sportSourcesArr[indexForSportsArr].appendChild(resultArticle);
    sportSourcesArr[indexForSportsArr].appendChild(resultImage);

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
  sportSourcesArr = new Array(2);
  for (let i = 0; i < sportSourcesArr.length; i++) {
    var sportsArticle = document.createElement("article");
    sportsArticle.className += "sportsArticleClass";
    sportSourcesArr[i] = sportsArticle;
    bbcSportsData(i);
    // sportSourcesArr[i].addEventListener("load", bbcSportsData);
    //function for adding the content goes here;
    sportsArticle.textContent = "article area " + i; //remove this when ready
    sportsSection.appendChild(sportsArticle);
  }
  // bbcArticle = document.getElementById("sportsArticle");
  // console.log("inside the window on load");
  // bbcArticle.addEventListener("load", bbcSportsData);
  // bbcSportsData();
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
