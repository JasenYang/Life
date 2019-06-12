## LifeGame

### 
- 将index.js中的函数抽出，因index.js中函数使用到全局对象，可能较麻烦，思考重构代码

### 测试规则
- 将功能代码放置于`main`文件夹下，以功能分组

- 在写功能代码时
    ```js
    // 定义函数
    function test(){

    }
    // 暴露函数
    module.exports = test;
    ```
- 在`spec`下写测试代码，首先引入函数，格式如下
    ```js
    const 函数名 = require('../main/实现文件.js);
    ```
- 运行测试
    ```js
    npm test
    ```

### 样例
- main-spec.js