从零构建webpack-react项目流程
1.创建webpack-demo项目目录文件夹

安装各种包文件：
2.执行：npm int -y 命令，初始化package.json文件
3.执行：npm i webpack webpack-cli --save-dev 安装webpack包
4.执行：cnpm i react react-dom 安装react相应的包文件

创建必须得基础文件：
1.在文件夹根目录下创建webpack.config.js文件（可以使用最初始的官方文档上的内容）
2.创建src文件夹，在文件夹下创建index.js文件
3.创建dist文件夹，在dist文件夹下创建一个index.html文件
4.修改package.json文件 "start": "webpack"，这个时候执行npm run start 在dist文件夹下就会生成一个main.js文件，这个文件内容此时为空

增加react文件
1.我们可以先用一个react create app 创建一个相应的react项目，然后可以参照这个项目，复制相应的文件到我们的webpack-demo项目中
2.把入口文件改成index.tsx
3.执行命令npm install -D babel-loader @babel/core @babel/preset-env，@babel/preset-react 安装babel，处理jsx  @babel/preset-react 必须安装
4.在webpack.config.js中加入相应的rules，配置loader bebel presets @babel/preset-react 必须添加


更改为tsx
1.执行命令：npm install @types/react @types/react-dom，安装tsx
2.新增tsconfig.json文件


配置相应的babel runtime 可以不用引入react