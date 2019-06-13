function LiveTable(row, col) {
  this.row = row;
  this.col = col;
  this.live_table = [row]
}
// LiveTable的初始化
LiveTable.prototype.init = function () {
  for (var i = 0; i < this.row; i++) {
    this.live_table[i] = [this.col]
    for (var j = 0; j < this.col; j++) {
      this.live_table[i][j] = 0
    }
  }
}