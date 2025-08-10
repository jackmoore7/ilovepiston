rando = Math.floor(Math.random()*2+1);
  
window.onload = function() {
     if (rando == 1) {
          document.getElementById("hotbaraknight").style.display = "inline";
          document.getElementById("ilovepiston").style.display = "none";
     }
     if (rando == 2) {
          document.getElementById("hotbaraknight").style.display = "none";
          document.getElementById("ilovepiston").style.display = "inline";

     }
     
}