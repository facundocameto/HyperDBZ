
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
            </div>
            <div style="margin-top: -2rem;" class="text-center ml-3 mr-3 char-sent"><img src="` + character.image + `"><p style="margin-top: -2rem;" class="character-text">` + `"` + character.sentence + `"` + `</p></div>
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
        }
    });
});
