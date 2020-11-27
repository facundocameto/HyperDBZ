
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
            `

            function showDlc(links, texts)
            {
              if (links.length == 0)
              {
                htmlContentToAppend += "";
              }
              else
              {
                htmlContentToAppend += `<div class="row text-center ml-3 mr-3 pt-3"><div class="col-sm p-0 index-title"> <h1 class="p-2">DLC'S</h1> </div></div>
                <div class="row text-center character-info-list"><ul id="dlcPlaceholder" class="list-group list-group-flush">`

              for(let i = 0; i < links.length; i++){
                  let link = links[i];
                  let text = texts[i];

                  htmlContentToAppend += `<a href="` + link + `"><li class="character-info-item">` + text + `</li></a>`
              }
              htmlContentToAppend += `</ul></div><hr class="ml-3 mr-3" style="border-bottom: 4px solid white;">`
            }
          }

          showDlc(stage.dlcLinks, stage.dlcText);

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
