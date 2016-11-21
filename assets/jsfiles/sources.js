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
var expandedSourcesArr = [];

function expandSources(arrWithSources, endArr) {
  function dataRequestFun() {
    endArr.push(this.responseText);
  }
  for (var i = 0; i < arrWithSources.length; i++) {
    let sourcesUrl = arrWithSources[i].url;
    let dataRequest = new XMLHttpRequest;
    dataRequest.addEventListener("load", dataRequestFun);
    dataRequest.open("GET", sourcesUrl);
    dataRequest.send();

    // $.getJSON(sourcesUrl, function (result) {
    //   endArr.push(result);
    //   // console.log(result);
    // });
  }
}
expandSources(sourcesArr, expandedSourcesArr);

//Parse the strings in the array into an object format
function parseString(arr){
  for (var i = 0; i < arr.length; i++) {
    arr.splice(i, 1, JSON.parse(arr[i]));
  }
}
parseString(expandedSourcesArr);

console.log(expandedSourcesArr);

var itWorks = "it works!!!";

module.exports.expandedSourcesArr = expandedSourcesArr;
module.exports.itWorks = itWorks;
