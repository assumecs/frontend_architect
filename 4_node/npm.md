## 第三方模块
- 通过 npm 来进行安装 node package manager
### 全局安装 -g 
默认的安装路径是(npm root -g)
不会自动加入环境变量中 二是通过 npm 进行映射
``` shell
npm install -g nrm # 安装
nrm test # 测试连接时间
nrm ls # 显示所有可用源
nrm use xxx # 使用xxx源
npm uninstall -g nrm # 卸载
```

#### http-server
- 启动一个本地 http 服务
``` shell
npm i -g http-server
http-server -p 8800
```

#### idoc
``` shell
npm i -g idoc
```

> npm nrm nvm 


### 本地安装
- 没有 -g 参数，安装之前需要初始化，记录安装依赖的 package.json
``` shell
npm init -y
```
> package.json, 目录不能有中文，特殊字符，大写，默认先找当前目录下的 package.json，如果当前目录没有会去上级查找，找不到才认为在当前目录下安装。

> package.json 中 srcipts 可以配置一些快捷方式


### 依赖包

#### 项目依赖
- 开发时使用，上线还需要
``` shell
npm install jquery
npm install jquery@1.8.3
# 或者 老版
npm install jquery --save
npm uninstall jquery
```

#### 开发依赖
- 开发时使用，线上不使用
``` shell
npm install less webpack --save-dev
npm uninstall less --save-dev
```

### 安装全部依赖
``` shell
npm install
```

## yarn 安装 
> 缓存
- npm install -g yarn
```
yarn init
yarn add jquery
yarn add less --dev
yarn remove jquery
yarn remove less --dev
```

## 想发布包
- 先回到官方源 nrm use npm
- 包名不能和已有的包一致，不能有大写，特殊字符
- 入口文件，做整合用的
- 注册账号,如果有账号表示登录（账号，密码，邮箱），新用户需要校验邮箱
``` shell
npm addUser
```
- 发布
``` shell
npm publish
```

### 第三方模块
- 第三方模块不需要 ./ 的形式引入 可以直接通过包名将文件引入, 找 package.json 中的 main 对应的文件运行,如果当前目录下没找到会向上一级查找，找到计算机根目录为止
``` javascript
console.log(module.paths);
```

### 核心模块
