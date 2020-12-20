const CHARACTERS_URL = "https://facundocameto.github.io/HyperDBZ/json/characters.json";
const NON_HDBZ_CHARACTERS_URL = "https://facundocameto.github.io/HyperDBZ/json/non-hdbz-characters.json";
const STAGES_URL = "./json/stages.json";

var getJSONData = function(url){
    var result = {};
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        return result;
    });
}
