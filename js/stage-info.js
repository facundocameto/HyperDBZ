
function showStageInfo(stageArray){

//get stage clicked from URL
  var params = new URLSearchParams(location.search);
  var nameURL = params.get('name');

  //check what stage is
    let htmlContentToAppend = "";
    for(let i = 0; i < stageArray.length; i++){
        let stage = stageArray[i];

        if (nameURL == stage.name)
        {
//write info about the stage
            htmlContentToAppend += `
            <div class="row text-center ml-3 mr-3">
              <div class="col-sm mb-3 p-0 comunity-title"> <h1 class="p-2">` + stage.name + `</h1> </div>
            </div>
            <div class="text-center ml-3 mr-3 char-sent"><img class="img-fluid" src="` + stage.imageInfo + `"><p class="character-text">` + `"` + stage.sentence + `"` + `</p></div>
            <div class="col-sm text-center char-desc character-text"><p>` + stage.description + `</p></div>
            <div class="text-center mt-3"><a unselectable="on" class="btn movelist-button-style" href="` + stage.downloadLink + `">DOWNLOAD</a></div>
            <div class="row justify-content-center text-center w-100 mt-5 ml-0 mr-0">
            `

            htmlContentToAppend += `</div>`

        }

        document.getElementById("stageContainer").innerHTML = htmlContentToAppend;
    }
  }


//run showStageInfo if its all ok
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(STAGES_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showStageInfo(resultObj.data);
        }
    });
});
