function Table(row,col){
    this.row = row;
    this.col = col
}

Table.prototype.get = function(){
    console.log(this.row)
    console.log(this.col)
}