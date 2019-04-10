[![Build Status](https://travis-ci.org/pengliheng/pengliheng.github.io.svg?branch=master)](https://travis-ci.org/pengliheng/pengliheng.github.io)
[![author](https://img.shields.io/badge/author-peng-blue.svg)](https://github.com/pengliheng/pengliheng.github.io)
[![Node.js Version](https://img.shields.io/badge/node.js-8.7.0-blue.svg)](http://nodejs.org/download)
[![Size](https://github-size-badge.herokuapp.com/pengliheng/pengliheng.github.io.svg)](https://github.com/pengliheng/pengliheng.github.io)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/pengliheng/pengliheng.github.io)

### 欢迎光临我的博客

###### [本站](https://pipk.top)托管于 Github，所有数据来源于[ISSUE](https://github.com/pengliheng/pengliheng.github.io/issues)，通过 GitHub API 动态加载数据渲染页面。

### 我的技术栈

- JavaScript(React Vue)
- Node
- HTTP(http1.1 https http2)
- RegExp
- Nginx
- Python
- Graphql

### TODO

- [x] 引入 jest 单元测试,覆盖率 > 50%
  - reducer 测试
  - component 测试
  - container 测试
- [x] `redux-saga` 替代 `redux-thunk`
- [ ] 将所有组件转化成 `useState` 函数式组件
- [ ] 引入 typescript, 这样每个组件就都有提示了,非常爽

### redux-thunk

使用`redux-thunk`原因在于下面报错内容,允许 action 返回一个函数.

```bash
Uncaught Error: Actions must be plain objects. Use custom middleware for async actions.
```

### docker 构建项目

```bash
./build.sh # 用于构建image,镜像内部运行`yarn build`,构建的dist文件在镜像内部
./run.sh   # 用于运行镜像 `CMD serve -s dist` 运行服务
```

### React 开发原则

尽可能使用 PureComponent,增强性能...
尽可能细化组件.

### React Router

- `<Link />`: 普通链接
- `<NavLink />`: 带 toggleClass 的链接
- `<Prompt />`: 满足条件的时候提示用户是否离开页面
- `<Redirect />`: 重定向
- `<Route />`: 路由匹配核心,匹配则显示的组件
- `<Switch />`: 只匹配第一个路由
- `exact`, 默认匹配的一个路由

### 看过的书

- [x] [网络是怎样连接的](https://book.douban.com/subject/26941639/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/40)

![](https://static.pipk.top/api/public/images/6075462533216409.png)

---

- [x] [HTTP 权威指南](https://book.douban.com/subject/10746113/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/45) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/52)

![](https://static.pipk.top/api/public/images/2376380500856452.png)

---

- [x] [JavaScript 面向对象精要](https://book.douban.com/subject/26352658/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/29) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/31)

![](https://static.pipk.top/api/public/images/7833702919612766.png)

---

- [x] [现代前端技术解析](https://book.douban.com/subject/27021790/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/28) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/58)

---

- [x] [深入理解 ES6](https://book.douban.com/subject/27072230/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/32) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/51)

---

- [x] [ES6 标准入门](https://book.douban.com/subject/26708954/) - [笔记一](https://github.com/pengliheng/pengliheng.github.io/issues/23) - [笔记二](https://github.com/pengliheng/pengliheng.github.io/issues/26)

---

- [x] [高性能的 JavaScript](https://book.douban.com/subject/5362856/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/15)

---

- [x] [JavaScript 语言精粹](https://book.douban.com/subject/3590768/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/10)

---

- [x] [数据结构与算法 JavaScript 描述](https://book.douban.com/subject/25945449/) - [笔记](https://github.com/pengliheng/pengliheng.github.io/issues/6)
