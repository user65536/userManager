
//global 
var register = document.getElementsByClassName('form')[0];
var btn = document.getElementsByClassName('submit')[0];
var tips = document.getElementsByClassName('tips')[0];
var storage = utils.storage;
var render = new Render();
var lastUser = storage.getItem('__lastUser');
//bind event
register.addEventListener('submit', submit, false);
register.addEventListener('input', input, false)

if(logManager.checkLog()) {
  window.location.href = "../index/index.html"
}
fillValue(lastUser);
function submit(e) {
  var render = new Render();
  render.byTarget(register.username)
  render.byTarget(register.password)
  e.preventDefault();
  var validator = new Validator();
  validator.add(register.username, "isNone", "用户名为空:1");
  validator.add(register.username, "checkUserExist:0", "用户名不存在:1");
  validator.add(register.password, "checkPassword:" + register.username.value, "密码不正确:4");
  var result = validator.start();
  if(result.length > 0) {
    console.log(result);
    render.byResult(result);
  } else {
    console.log('sent');
    logManager.logIn(register.username.value, register.rememberPass.checked)
    showtime(tips);
  }
}
function input(e) {
  var target = e.target;
  var render = new Render();
  render.byTarget(target)
}
function fillValue(user) {
  var userInfo = storage.getUser(user)
  if(user) {
    register.username.value = lastUser;
    if(userInfo && userInfo.rememberPass) {
      register.password.value = userInfo.password;
      register.rememberPass.checked = true;
    }
  }
}
function showtime(dom) {
  var count = 0;
  dom.innerHTML = "登录成功，1 秒后跳转至首页"
  var timer = setInterval(function () {
    if(count === 0) {
      clearInterval(timer);
      window.location.href = '../index.html'
    } else {
      dom.innerHTML = "登录成功，" + count + " 秒后跳转至首页"
      count --;
    }
  }, 1000)
}


