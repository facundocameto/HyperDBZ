
function createCarousel(characterArray){

//get character clicked from URL
  var params = new URLSearchParams(location.search);
  var nameURL = params.get('name');

  //check what character is
    let htmlContentToAppend = "";
    for(let i = 0; i < characterArray.length; i++){
        let character = characterArray[i];

        if (nameURL == character.name)
        {
          createCarousel(character.ingImg);
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
              <div style="" class="carousel-item hdbz-trailer active">
                <img style="width: 100%; height: 100%; object-fit: cover; object-position: center;" class="d-block img-fluid" src="` + array[0] + `" alt="First slide">
                <div class="border-trailer"></div>
              </div>
              `
              for(let i = 1; i < array.length; i++){
                  let image = array[i];

                  htmlCont += `
                <div style="" class="carousel-item hdbz-trailer">
                  <img style="width: 100%; height: 100%; object-fit: cover; object-position: center;" class="d-block img-fluid" src="` + image + `" alt="First slide">
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

function showCharacterInfo(characterArray){

//get character clicked from URL
  var params = new URLSearchParams(location.search);
  var nameURL = params.get('name');

  //check what character is
    let htmlContentToAppend = "";
    for(let i = 0; i < characterArray.length; i++){
        let character = characterArray[i];

        if (nameURL == character.name)
        {
//write info about the character
            htmlContentToAppend += `
            <div class="row text-center ml-3 mr-3">
              <div class="col-sm mb-3 p-0 comunity-title"> <h1 class="p-2">` + character.name + `</h1> </div>
            </div><div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel"></div>
            <div class="text-center ml-3 mr-3 char-sent"><p class="character-text">` + `"` + character.sentence + `"` + `</p></div>
            <div class="col-sm text-center char-desc character-text"><p>` + character.description + `</p></div>
            `
            function showGif(array)
            {
              htmlContentToAppend += `<div class="row justify-content-center text-center w-100 mt-3 ml-0 mr-0">`

              for(let i = 0; i < array.length; i++){
                  let gif = array[i];

                  htmlContentToAppend += `
                  <div>
                          <img class="img-fluid img-thumbnail m-2" src="` + gif + `" alt="">
                  </div>
                  `
              }
              htmlContentToAppend += `</div>`
            }
            function showBannerGif(array)
            {
              htmlContentToAppend += `<div class="row justify-content-center text-center w-100 mt-3 ml-0 mr-0">`

              for(let i = 0; i < array.length; i++){
                  let gif = array[i];

                  htmlContentToAppend += `
                  <div>
                          <img class="img-fluid mt-2 mb-2" src="` + gif + `" alt="">
                  </div>
                  `
              }
              htmlContentToAppend += `</div><div class="text-center"><a unselectable="on" class="btn movelist-button-style" href="` + character.downloadLink + `">DOWNLOAD</a></div>`
            }
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

            showGif(character.gifs);
            showBannerGif(character.bannerGif);
            showDlc(character.dlcLinks, character.dlcText);
        }

        document.getElementById("characterContainer").innerHTML = htmlContentToAppend;
    }
  }


//run showCharacterInfo if its all ok
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CHARACTERS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            showCharacterInfo(resultObj.data);
            createCarousel(resultObj.data);
        }
    });
});
