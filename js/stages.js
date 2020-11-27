
function showStagesList(stagesArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < stagesArray.length; i++){
        let stage = stagesArray[i];

//for WIP stages
        if (stage.wip == true) {

            htmlContentToAppend += `
          <a class="m-2">
            <div style="width: 302px;" class="blocked-card">
                  <div width="300px" height="400px" style="z-index: -1;" class="stageImg col pt-0 pr-0 pl-0 img-thumbnail">
                    <img class="stageBkImg" width="300px" height="400px" src="` + stage.image + `" alt="` + stage.name + `"><div class="title-tab-stage"><h2 class="pb-1 m-0 chart-name">` + stage.name + ` (WIP)</h2></div>
                  </div>
            </div>
          </a>
          `
        }

//for current playable stages
        else {

            htmlContentToAppend += `
            <a class="m-2" href="stage-info.html?name=` + stage.name + `">
                    <div style="width: 302px;" class="stageImg col pt-0 pr-0 pl-0 img-thumbnail">
                      <img class="stageBkImg" width="300px" height="400px" src="` + stage.image + `" alt="` + stage.name + `"><div class="title-tab-stage"><h2 class="pb-1 m-0 w-100 chart-name">` + stage.name + `</h2></div>
                    </div>
            </a>
            `
        }

        document.getElementById("stageListContainer").innerHTML = htmlContentToAppend;
    }
  }

//run showStagesList if its all ok
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(STAGES_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showStagesList(resultObj.data);
        }
    });
});
