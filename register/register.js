
//global dom
var register = document.getElementsByClassName('form')[0];
var tips = document.getElementsByClassName('tips')[0];
var btn = document.getElementsByClassName('submit')[0];

//bind event
register.addEventListener('submit', submit, false);
register.addEventListener('input', input, false)

var render = new Render();
function submit(e) {
  e.preventDefault();
  var validator = new Validator();
  validator.add(register.username, "isNone", "用户名为空:1");
  validator.add(register.username, "checkUserExist:1", "用户名已存在:1")
  validator.add(register.username, "checkLong:20", "用户名超过20字符:1")
  validator.add(register.phoneNumber, "isPhoneNumber", "手机号码不存在:2");
  validator.add(register.mailBox, "isMail", "邮箱不正确:3");
  validator.add(register.mailBox, "checkLong:30", "邮箱过长:3");
  validator.add(register.password, "checkLength:6", "长度小于6:4");
  // validator.add(register.password, "checkComplex", "请同时包含数字和大小写字母:4");
  validator.add(register.repassword, "checkRepeat:" + register.password.value, "密码不一致:5");
  var result = validator.start();
  if(result.length > 0) {
    console.log(result);
    var render = new Render();
    render.byResult(result);
  } else {
    var userInfo = {
      name: register.username.value,
      logTimes: 0,
      lastLogTime: '',
      registerTime: utils.time.getTimeByDate(),
      email: register.mailBox.value,
      password: register.password.value,
      log: false,
      rememberPass: true
    };
    
    if(logManager.registIn(userInfo.name, userInfo)) {
      logManager.logIn(userInfo.name)
      showtime(tips);
    }
    // var next = window.confirm('success')
    // if(next) {
    //   window.location.href = "../index.html"
    // }
  }
}
function input(e) {
  var target = e.target;
  var render = new Render();
  if(target.name == 'password') {
    render.byTarget(register.repassword)
  }
  render.byTarget(target)
}
function showtime(dom) {
  var count = 0;
  dom.innerHTML = "注册成功，1 秒后跳转至首页"
  var timer = setInterval(function () {
    if(count === 0) {
      clearInterval(timer);
      window.location.href = '../index.html'
    } else {
      dom.innerHTML = "注册成功，" + count + " 秒后跳转至首页"
      count --;
    }
  }, 1000)
}

