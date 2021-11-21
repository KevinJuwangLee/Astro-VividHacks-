var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var imageObj = new Image();
imageObj.onload = function(){
    context.drawImage(imageObj, 100, 0, 547.2, 591.3);
    context.scale(2, 2)
};
imageObj.src = "koreaMap.jpg"

canvas.onmousemove = function(e){
  let rgbColor = context.getImageData(e.layerX, e.layerY, 1, 1).data;
  let rgbString = "rgb(" + rgbColor[0] + "," + rgbColor[1] + "," + rgbColor[2] + ")";
  document.body.style.backgroundColor = rgbString;
  let luma = 0.2126 * rgbColor[0] + 0.7152 * rgbColor[1] + 0.0722 * rgbColor[2];
  document.querySelector("#visibility").innerHTML = `${((1 - (luma/256)) * 100).toFixed(1)}%`
  document.querySelector("#color").innerHTML = rgbString;
  document.querySelector(".title-text").style.color = rgbString;
}