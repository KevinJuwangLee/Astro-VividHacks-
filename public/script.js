let cursor = document.getElementsByClassName("cursor");
let plotTwist = document.getElementsByClassName("plotTwist");

let plotTwists = ["Astro", "revelation"]


for(let i = 0; i < cursor.length; i++){
  let cursorOn = true;
  setInterval(function(){
    if(cursorOn){
      (cursor[i]).innerHTML = "";
    } else{ (cursor[i]).innerHTML = "|";}
    cursorOn = !cursorOn
  }, 500)
}

for(let i = 0; i < plotTwist.length; i++){
  setTimeout(function(){
    for(let j = 0; j < (plotTwist[i]).innerHTML.length; j++){
      setTimeout(function(){
        (plotTwist[i]).innerHTML = (plotTwist[i]).innerHTML.slice(0, -1)
      }, 300 * j)
    }
    setTimeout(function(){
      for(let j = 0; j < plotTwists[i].length; j++){
        setTimeout(function(){
          (plotTwist[i]).innerHTML += plotTwists[i][j];
        }, 200 * j)
      }
      setTimeout(function(){
        cursor[i].parentNode.removeChild(cursor[i])
      }, 200 * (plotTwists[i].length - 1))
    }, (plotTwist[i].innerHTML.length - 1) * 300)
  }, 3000)
}




