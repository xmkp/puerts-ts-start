# puerts-ts-start

一键打包你的 puerts 代码。

## 用法

### 安装

```shell script
npm i 
```

### 打包 

你可以配置 webpack.build.js 的 output.filename 与 path 选项修改打包生成的文件目录和文件名。

```shell script
npm run build 
```

### watch
你可以配置 webpack.watch.js 的 output.filename 与 path 选项修改打包生成的文件目录和文件名。

在你每次更改文件**保存后**就会有自动编译并输出代码。

```shell script
npm run watch 
```

### csharp.d.ts

你需要用 puerts 生成的 index.d.ts 文件覆盖这个文件，这样你就能使用智能的代码提示了。
