var videoPlayer = document.getElementById('videoPlayer')

var vArray = [
    "video/HDBZ_Buu.mp4",
    "video/HDBZ_Eighteen.mp4",
    "video/HDBZ_Freeza.mp4",
    "video/HDBZ_Krillin.mp4",
    "video/HDBZ_Majin_Vegeta.mp4",
    "video/HDBZ_Piccolo.mp4",
    "video/HDBZ_Satan.mp4",
    "video/HDBZ_SSJ_Goku.mp4",
    "video/HDBZ_Vegito.mp4",
    "video/HDBZ_Tenshinhan.mp4"
]

var newNumber = Math.floor(Math.random() * (vArray.length));
var anArrayOfUniqueNumbers = [];
anArrayOfUniqueNumbers.push(newNumber);

videoPlayer.src = vArray[newNumber];

videoPlayer.onended = function(){
    numberGenerator(anArrayOfUniqueNumbers);
    videoPlayer.src = vArray[newNumber];
}

function numberGenerator(arr) {
  newNumber = Math.floor(Math.random() * (vArray.length));
  if (arr.indexOf(newNumber) < 0)
  {
    arr.push(newNumber);
    if (arr.length >= vArray.length)
    {
      anArrayOfUniqueNumbers = [];
    }
  }
  else
  {
    numberGenerator(arr);
  }
};
