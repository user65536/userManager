# buptsice_training_2018_1
---
#### 项目介绍 ####
登录框与输入框校验器升级版

#### 项目完成情况  ####

- 2018-10-04 16:06 完成基础版本，扩展功能除验证码外均已完成

**预览提示**
- 项目为动态页面，包含JS校验脚本，可点击按钮操作
- 表单校验结果会反映在页面上，将相应输入框变红，并显示提示信息
- 输入框没有

#### 相关技术与模式  ####

- CSS3：flex布局
- CSS伪类 active hover等
- JavaScript设计模式：单例模式，策略模式
- 浏览器localStorage

#### 其它说明  ####

- 页面功能较简单，故以文件形式体现模块化，未使用CommonJS规范
- 输入框样式及校验反馈的UI借鉴于`bootstrap`库，但并未引入`bootstrap`源文件
- 表单边框大小为绝对值，未做兼容性处理，部分浏览器中可能会发生文字溢出的情况
- 如发现bug欢迎在issue中提出

#### 预览页面 ####
[注册页](https://xjmeng.gitee.io/buptsice_training_2018_1/%E7%AC%AC%E4%B8%89%E6%AC%A1%E4%BD%9C%E4%B8%9A-JS/register/register.html)
[登录页](https://xjmeng.gitee.io/buptsice_training_2018_1/%E7%AC%AC%E4%B8%89%E6%AC%A1%E4%BD%9C%E4%B8%9A-JS/login/login.html)
[登录成功页](https://xjmeng.gitee.io/buptsice_training_2018_1/%E7%AC%AC%E4%B8%89%E6%AC%A1%E4%BD%9C%E4%B8%9A-JS/index/index.html)