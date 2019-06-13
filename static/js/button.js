// 创建 button 按钮
function Button(btn) {
    this.btn = btn;
}

// 添加点击事件
Button.prototype.addClickListener = function (listenAction) {
    this.btn.addEventListener("click", listenAction);
}

// 移除点击事件
Button.prototype.removeClickListener = function (listenAction, key) {
    this.btn.removeEventListener("click", listenAction, key);
}