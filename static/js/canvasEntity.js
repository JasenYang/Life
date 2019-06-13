function CanvasEntity(canvasDiv) {
  this.canvasDiv = canvasDiv;
}

// cavans 的初始化
CanvasEntity.prototype.init = function (width, height) {
  this.canvasDiv.width = width;
  this.canvasDiv.height = height;

  var ctx = this.canvasDiv.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 1;
  for (i = 0; i < width; i++) {
    for (j = 0; j < height; j++) {
      ctx.strokeRect(i * 30, j * 30, 30, 30);
    }
  }
}


// 给cavans添加监听事件
CanvasEntity.prototype.addListener = function (listenAction) {
  this.canvasDiv.addEventListener("click", listenAction)
}