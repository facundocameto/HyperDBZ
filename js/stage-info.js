
function createCarousel(stageArray){

//get character clicked from URL
  var params = new URLSearchParams(location.search);
  var nameURL = params.get('name');

  //check what character is
    let htmlContentToAppend = "";
    for(let i = 0; i < stageArray.length; i++){
        let stage = stageArray[i];

        if (nameURL == stage.name)
        {
          createCarousel(stage.ingImg);
          function createCarousel(array)
          {
            let htmlCont = "";
            htmlCont = `
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`
                for(let i = 1; i < array.length; i++){
                    let image = array[i];

                    htmlCont += `
                  <li data-target="#carouselExampleIndicators" data-slide-to="` + i + `"></li>
                  `
                }
              htmlCont += `
              </ol>
              <div style="max-width: 1000px; min-width: 320px; margin-left:auto; margin-right:auto; background-color: black; border-top-right-radius: 20%; border-bottom-left-radius: 20%;" class="carousel-inner">
              <div style="max-height: 480px;" class="carousel-item hdbz-trailer active">
                <img style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 65%;" class="d-block img-fluid" src="` + array[0] + `" alt="First slide">
                <div class="border-trailer"></div>
              </div>
              `
              for(let i = 1; i < array.length; i++){
                  let image = array[i];

                  htmlCont += `
                <div style="max-height: 480px;" class="carousel-item hdbz-trailer">
                  <img style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 65%;" class="d-block img-fluid" src="` + image + `" alt="First slide">
                  <div class="border-trailer"></div>
                </div>
                `
              }
              htmlCont += `<a style="opacity: 100%;" class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a style="opacity: 100%;" class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a></div>
            </div>`

            document.getElementById("carouselExampleIndicators").innerHTML = htmlCont
          }
        }
      }
    }

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
            </div><div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel"></div>
            <div class="text-center ml-3 mr-3 char-sent"><p class="character-text">` + `"` + stage.sentence + `"` + `</p></div>
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
            createCarousel(resultObj.data);
        }
    });
});
