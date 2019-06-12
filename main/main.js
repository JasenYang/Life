// Write your cade below:
function main(live_table) {
    var temp_table = deep_copy(live_table);
    bottom = live_table.length;
    right = live_table[0].length;
    // var lowest = 2;
    // var highest = 3;
    for (i = 0; i < bottom; i ++) {
        for (j = 0; j < right; j ++) {
            var count = 0;
            if (i === 0 && j !== 0 && j !== right - 1) {
                //todo 上边界
                count = live_table[i][j-1] + live_table[i+1][j-1] + live_table[i+1][j] + live_table[i+1][j+1] + live_table[i][j+1];
            }else if (i === bottom - 1 && j !== 0 && j !== right - 1) {
                //todo 下边界
                count = live_table[i][j-1] + live_table[i-1][j-1] + live_table[i-1][j] + live_table[i-1][j+1] + live_table[i][j+1];
            }else if (j === 0 && i !== 0 && i !== bottom - 1) {
                //todo 左边界
                count = live_table[i-1][j] + live_table[i-1][j+1] + live_table[i][j+1] + live_table[i+1][j+1] + live_table[i+1][j];
            }else if (j === right - 1 && i !== 0 && i !== bottom - 1) {
                //todo 右边界
                count = live_table[i-1][j] + live_table[i-1][j-1] + live_table[i][j-1] + live_table[i+1][j-1] + live_table[i+1][j];
            }else if (i === 0 && j === 0) {
                //todo 左上角
                count = live_table[i+1][j] + live_table[i+1][j+1] + live_table[i][j+1];
            }else if (i === 0 && j === right - 1) {
                //todo 右上角
                count = live_table[i][j-1] + live_table[i+1][j-1] + live_table[i+1][j];
            }else if (i === bottom - 1 && j === 0) {
                //todo 左下角
                count = live_table[i-1][j] + live_table[i-1][j+1] + live_table[i][j+1]
            }else if (i === bottom -1 && j === right - 1) {
                //todo 右下角
                count = live_table[i][j-1] + live_table[i-1][j-1] + live_table[i-1][j];
            }else {
                //todo 中间
                count = live_table[i-1][j-1] + live_table[i-1][j] + live_table[i-1][j+1] + live_table[i][j-1] + live_table[i][j+1] + live_table[i+1][j-1] + live_table[i+1][j] + live_table[i+1][j+1];
            }
            if (live_table[i][j] === 1 && (count === 2 || count === 3)) {
                temp_table[i][j] = 1;
            } else if (live_table[i][j] === 0 && count === 3){
                temp_table[i][j] = 1;
            } else {
                temp_table[i][j] = 0;
            }
        }
    }
    return temp_table.toString();
}

function deep_copy(arr) {
    var temp_table = [arr.length];
    for(i = 0; i < arr.length; i ++) {
        var l = arr[i];
        temp_table[i] = [l];
    }
    return temp_table;
}

module.exports = main;
