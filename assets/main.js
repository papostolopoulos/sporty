"use strict";
var sourcesArr = [
  {
    source: "ESPN",
    url: "https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=909efd3e931c4e16bde5565b8d10f113"
  },
  {
    source: "ESPN Cric Info",
    url: "https://newsapi.org/v1/articles?source=espn-cric-info&sortBy=latest&apiKey=909efd3e931c4e16bde5565b8d10f113",
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

//Get random elements inside an array; (creates array elements) -- Probably not needed
// function randomElementsArr (array) {
//   var endArray = [];
//   let iterator = array.length;
//   for (let i = 0; i < iterator; ) {
//     let counter = Math.floor(Math.random() * iterator);
//     if (endArray.indexOf(array[counter]) === -1) {
//       endArray.push(array[counter]);
//       iterator --;
//     }
//   }
//   return endArray;
// }

//shuffle the array
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  //Reload the page

function pageReload(time) {
  setTimeout(reloadFun, time);
}

function reloadFun() {
  window.location.reload(true);
}

window.onload = function() {
  // var randomOrderSources = randomElementsArr(sourcesArr);
  shuffleArray(sourcesArr);
  heroSectionArticles(sourcesArr);
  sportsSectionArticles(sourcesArr);

  toggleHeroClass();
  toggleArticleClasses();
  pageReload(600000);
};//End of onload function


//---------------------HERO CONTENT CREATION------------------------------
//creation and append of the article tags in the main Grid
function heroSectionArticles(arrWithSources) {
  let heroSection = document.getElementById("heroSection");
  let sourcesUrl = arrWithSources[0].url;
  let heroArticle = document.createElement("article");
  heroArticle.className += "heroArticleClass";
  // heroArticle.className += " transform"; Not needed because I am not applying special effect
  arrWithSources[0] = heroArticle;
  apiData(0, sourcesUrl);
  heroSection.appendChild(heroArticle);
}


//------------------MAIN GRID CONTENT CREATION----------------------------
//creation and append of the article tags in the main Grid
function sportsSectionArticles(arrWithSources) {
  let sportsSection = document.getElementById("sportsSection");
  for (let i = 1; i < arrWithSources.length; i++) {
    let sourcesUrl = arrWithSources[i].url;
    let sportsArticle = document.createElement("article");
    sportsArticle.className += "sportsArticleClass";
    // sportsArticle.className += " transform"; //not needed because I am not applying special effect
    arrWithSources[i] = sportsArticle;
    apiData(i, sourcesUrl);
    sportsSection.appendChild(sportsArticle);
  }
}

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
    //articles
    let resultTitle = document.createElement("h3");
    let resultSource = document.createElement("h4");
    let imageDiv = document.createElement("div");
    let heroImageDiv = document.createElement("div");//////////////////////////////
    let resultImage = document.createElement("img");
    let resultArticle = document.createElement("p");
    let articleSourceAnchor = document.createElement("a");

    let moreButtonDiv = document.createElement("div");
    let moreButtonAnchor = document.createElement("a");

    resultTitle.textContent = data.articles[0].title;
    imageDiv.className += "imageDiv";
    heroImageDiv.className += "heroImageDiv";/////////////////////////////////
    moreButtonDiv.className += "moreButtonDiv";

    articleSourceAnchor.setAttribute("href", data.articles[0].url);
    articleSourceAnchor.setAttribute("target", "_blank");
    resultImage.setAttribute("alt", "Sorry, there is no image provided by the source");
    articleSourceAnchor.innerText = "Source: " + data.source + " via newsapi.org ";
    resultImage.src = data.articles[0].urlToImage;
    resultArticle.textContent = data.articles[0].description;
    moreButtonAnchor.innerText = "More";

    //
    imageDiv.appendChild(resultImage);
    resultSource.appendChild(articleSourceAnchor);
    moreButtonDiv.appendChild(moreButtonAnchor);
    sourcesArr[idxForSourcesArr].appendChild(imageDiv);
    sourcesArr[idxForSourcesArr].appendChild(resultTitle);
    sourcesArr[idxForSourcesArr].appendChild(resultSource);
    sourcesArr[idxForSourcesArr].appendChild(resultArticle);
    sourcesArr[idxForSourcesArr].appendChild(moreButtonDiv);

  }
} //End of apiData function

// function bbcNewsError {
//
// }

//-------------------TOGGLES------------------------------
//toggle between classes for expanding the hero article content
function toggleHeroClass() {
  $(".heroArticleClass").on("click", function(){
    $(this).toggleClass("heroArticleExpanded");
    $(this).children("div").toggleClass("heroImageDivExpanded");
    $(this).children("div").toggleClass("imageDiv");
    $(this).children(".moreButtonDiv").removeClass("imageDiv");

    $(".sportsArticleExpanded").removeClass("sportsArticleExpanded");
    $(".imageDivExpanded").removeClass("imageDivExpanded");
  });
}

//toggle between classes for expanding the article content
function toggleArticleClasses() {
  $(".sportsArticleClass").on("click", function(){
    $(this).toggleClass("sportsArticleExpanded");
    $(this).children(".imageDiv").toggleClass("imageDivExpanded");

    $(this).siblings().removeClass("sportsArticleExpanded");
    $(".heroArticleExpanded").removeClass("heroArticleExpanded");
    $(".heroImageDivExpanded").addClass("heroImageDiv");
    $(".heroImageDivExpanded").removeClass("heroImageDivExpanded");
    $(this).siblings().children("div").removeClass("imageDivExpanded");
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
