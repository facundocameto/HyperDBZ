
function showCharactersList(charactersArray){

    let htmlContentToAppend = "";
    for(let i = 0; i < charactersArray.length; i++){
        let character = charactersArray[i];

//for WIP characters
        if (character.wip == true) {

            htmlContentToAppend += `
          <a class="m-2">
            <div style="width: 162px;" class="blocked-card">
                  <div style="z-index: -1;" class="default-background col pr-0 pl-0 img-thumbnail">
                    <img width="160px" height="200px" src="` + character.image + `" alt="` + character.name + `"><div class="title-tab-stage" style="height: 50px;"><h2 class="pb-1 m-0 chart-name" style="background-color: #8B0000;">` + character.name + ` (WIP)</h2></div>
                  </div>
            </div>
          </a>
          `
        }

//for current playable characters
        else {

            htmlContentToAppend += `
            <a class="m-2" href="character-info.html?name=` + character.name + `">
                    <div style="width: 162px;" class="default-background col pr-0 pl-0 img-thumbnail">
                      <img width="160px" height="200px" src="` + character.image + `" alt="` + character.name + `"><div class="title-tab-stage" style="height: 50px;"><h2 class="pb-1 m-0 chart-name" style="background-color: #8B0000;">` + character.name + `</h2></div>
                    </div>
            </a>
            `
        }

        document.getElementById("characterListContainer").innerHTML = htmlContentToAppend;
    }
  }

//run showCharactersList if its all ok
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CHARACTERS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showCharactersList(resultObj.data);
        }
    });
});
