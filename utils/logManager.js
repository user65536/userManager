var logManager = (function (storage, time) {
    return {
        checkLog: function () {
            var logUser = storage.getItem('__logUser')
            return logUser ? logUser : false;
        },
        hasUser: function (name) {
            var user = storage.getUser(name);
            return user ? true : false;
        },
        registIn: function (name, info) {
            if(this.hasUser(name)) {
                return false;
            } else {
                storage.addUser(name, info);
                return true;
            }
        },
        logIn: function (name, checked) {
            var user = storage.getUser(name);
            if(user) {
                storage.setItem('__logUser', name);
                storage.setItem('__lastUser', name);
                user.logTimes ++;
                user.lastLogTime = time.getTimeByDate();
                user.logIn = true;
                user.rememberPass = checked;
                storage.addUser(name, user)
                return true;
            }
            return false;
        },
        logOut: function (name) {
            var user = storage.getUser(name);
            if(this.hasUser(name)) {
                storage.setItem('__logUser', '');
                user.log = false;
                storage.addUser(name, user)
                return true;
            } else {
                return false;
            }
        },
        getPassward: function (name) {
            var user = storage.getUser(name);
            return user ? user.password : null;
        }
    }
}(utils.storage, utils.time))