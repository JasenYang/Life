// canvas 对象
function CanvasEntity(canvasDiv) {
  this.canvasDiv = canvasDiv;
}

// canvas 的初始化
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


// 给 canvas 添加点击事件
CanvasEntity.prototype.addClickListener = function (listenAction) {
  this.canvasDiv.addEventListener("click", listenAction);
}

// 给 canvas 移除点击事件
CanvasEntity.prototype.removeClickListener = function (listenAction, key) {
  this.canvasDiv.removeEventListener("click", listenAction, key);
}