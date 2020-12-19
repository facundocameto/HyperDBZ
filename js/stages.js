
function showStagesList(stagesArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < stagesArray.length; i++){
        let stage = stagesArray[i];

//for WIP stages
        if (stage.wip == true) {

            htmlContentToAppend += `
          <a class="m-2">
            <div class="blocked-card">
                  <div style="z-index: -1; width: 122px;" class="stageImg col pt-0 pr-0 pl-0 img-thumbnail">
                    <img class="stageBkImg" src="` + stage.image + `" alt="` + stage.name + `"><div class="title-tab-stage"><h2 class="pb-1 m-0 w-100 chart-name">` + stage.name + ` (WIP)</h2></div>
                  </div>
            </div>
          </a>
          `
        }

//for current playable stages
        else {

            htmlContentToAppend += `
            <a class="m-2" href="stage-info.html?name=` + stage.name + `">
                    <div style="width: 122px;" class="stageImg col pt-0 pr-0 pl-0 img-thumbnail">
                      <img class="stageBkImg" src="` + stage.image + `" alt="` + stage.name + `"><div class="title-tab-stage"><h2 class="pb-1 m-0 w-100 chart-name">` + stage.name + `</h2></div>
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
