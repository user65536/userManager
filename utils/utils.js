var utils = {
  getParent: function(dom, num) {
    var parent = dom;
    for(var i = 0; i < num && parent; i ++) {
      parent = parent.parentElement
    }
    return parent;
  },
  getSingleton: function () {
    var instance;
    return function () {
      if(!instance) {
        instance = this;
      }
      return instance;
    }
  },
  storage: {
    getUser: function (username) {
      var userInfoString = '',
          storageObj = null,
          userArray = [];
      if(username && username !== '') {
        userInfoString = window.localStorage.getItem('USER-' + username);
          return JSON.parse(userInfoString)
      } else {
        storageObj = window.localStorage;
        for(var item in storageObj) {
          if(storageObj.hasOwnProperty(item) && item.indexOf('USER-') === 0) {
            userArray.push(JSON.parse(window.localStorage.getItem(item)))
          }
        }
        return userArray
      }
    },
    addUser: function (username, infoObj) {
      window.localStorage.setItem('USER-' + username, JSON.stringify(infoObj))
    },
    getItem: function (item) {
      return window.localStorage.getItem(item)
    },
    setItem: function (item, value) {
      window.localStorage.setItem(item, value);
    }
  },
  time: {
    getCurrentTimestamp: function () {
      return new Date().getTime();
    },
    getTimeByStamp: function (stamp) {
      var date = new Date();
      date.setTime(stamp);
      return this.getTimeByDate(date);
    },
    getTimeByDate: function (date) {
      date || (date = new Date())
      var year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate(),
          hour = date.getHours(),
          minute = date.getMinutes(),
          second = date.getSeconds(),
          time = year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day)
                 + " " + (hour < 10 ? '0' + hour : hour) + ":" + (minute < 10 ? '0' + minute : minute)
                 + ":" + (second < 10 ? '0' + second : second);
          return time;
    }
  }
}
