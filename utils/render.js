//design pattern: singleton
var Render = utils.getSingleton();
Render.prototype.byResult = function (result) {
  var self = this;
  var status = [];
  result.forEach(function (errorObj, index) {
    if(errorObj.code > 0 && !status[errorObj.code]) {
      self.byTarget(errorObj.target, 'error', errorObj.msg);
      status[errorObj.code] = errorObj.target;
    }
  })
}
Render.prototype.byTarget = function (target, type, msg) {
  var root = utils.getParent(target, 2);
  if(type && type !== 'defalut') {
    root.classList.add('with-' + type);
    root.getElementsByClassName('help-block')[0].innerText = msg;
  } else {
    root.classList.remove('with-error', 'with-success');
    root.getElementsByClassName('help-block')[0].innerText = '';
  }
}