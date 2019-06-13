## LifeGame

### 使用方法
#### 方法一：测试网址
- 可以使用[👉测试网址](http://101.132.147.55)
#### 方法二：下载
- 点击 `page` 下的 `index.html` 在浏览器下查看即可

### 端到端测试
- 如果改动了`index.html`，将更新后的代码放到`test_production`，修改引入路径
- [👉测试网址](http://101.132.147.55)

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
