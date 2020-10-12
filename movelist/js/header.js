
function loadHeader()
{
  var header = document.getElementById("header");
  header.innerHTML = `
  <div class="container-fluid d-flex flex-md-row justify-content-around text-center pt-1">
    <div> <a class="py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="index"> <img height="40rem" width="40rem" src="img/icons/home_icon.png" alt=""> <span>HOME</span></a></div>
    <div> <a class="py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="characters"> <img height="40rem" width="35rem" src="img/icons/char_icon.png" alt=""> <span>CHARACTERS</span></a></div>
    <div> <a class="py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="stages"> <img height="40rem" width="40rem" src="img/icons/stage_icon.png" alt=""> <span>STAGES</span></a></div>
    <div> <a class="py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="themes"> <img height="40rem" width="32rem" src="img/icons/themes_icon.png" alt=""> <span>THEMES</span></a></div>
    <div> <a class="hide-on-mobile py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="movelist/movelist"> <img height="40rem" width="40rem" src="img/icons/anyP.png" alt=""> <span>MOVELIST</span></a></div>
    <div> <a class="hide-on-mobile py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="credits"> <img height="40rem" width="25rem" src="img/icons/balthazar.png" alt=""> <span>CREDITS</span></a></div>
  </div>
  <hr class="show-on-mobile mt-1 mb-1">
  <div class="show-on-mobile container flex-md-row justify-content-around text-center pt-1">
  <div> <a class="py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="movelist/movelist"> <img height="40rem" width="40rem" src="img/icons/anyP.png" alt=""> <span>MOVELIST</span></a></div>
  <div> <a class="py-2 d-md-inline-block navigation-bar pl-1 pr-1" href="credits"> <img height="40rem" width="25rem" src="img/icons/balthazar.png" alt=""> <span>CREDITS</span></a></div></div>
  `;
}

loadHeader();
