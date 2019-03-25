
//design pattern: strategy
var Validator = function () {
  this.rules = [];
}
Validator.prototype.strategies = {
    isNone: function (value, errorMsg, errorCode) {
      if(!value.length) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    checkLong: function (value, len, errorMsg, errorCode) {
      if(value.length > len) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    checkRepeat: function (value, originValue, errorMsg, errorCode) {
      if(value !== originValue) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    isPhoneNumber: function (value, errorMsg, errorCode) {
      if(!/^1\d{10}$/.test(value)) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    isMail: function (value, errorMsg, errorCode) {
      if(!/^\w+@\w+\..+$/.test(value)) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    checkLength: function (value, len, errorMsg, errorCode) {
      if(value.length < len) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    checkComplex: function (value, errorMsg, errorCode) {
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
      return {
        code: errorCode,
        msg: errorMsg,
        target: this
      }
    }
    },
    checkUserExist: function (name, type, errorMsg, errorCode) {
      if(type == '1' && logManager.hasUser(name)) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      } 
      if(type == '0' && !logManager.hasUser(name)) {
        return {
          code: errorCode,
          msg: errorMsg,
          target: this
        }
      }
    },
    checkPassword: function (value, name, errorMsg, errorCode) {
      if(name) {
        var password = logManager.getPassward(name);
        if(password !== null && password !== value) {
          return {
            code: errorCode,
            msg: errorMsg,
            target: this
          }
        }
      }
    }
  }
  //add a rule to the validator
  Validator.prototype.add = function (dom, rule, errorMsg) {
    var ruleArr = rule.split(':');
    var self = this;
    this.rules.push(function () {
      var strategy = ruleArr.shift();
      ruleArr.unshift(dom.value);
      ruleArr = ruleArr.concat(errorMsg.split(':'));
      return self.strategies[strategy].apply(dom, ruleArr)
    })
  }
  //start to validator
  Validator.prototype.start = function () {
    var resultArr = [];
    this.rules.forEach(function(strategy, index) {
      var result = strategy();
      if(result) {
        resultArr.push(result);
      }
    })
    return resultArr;
  }