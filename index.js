var logOutBtn = document.getElementsByClassName('btn-logout')[0],
    userContent = document.getElementsByClassName('username')[0],
    tableBody = document.getElementsByClassName('table-body')[0],
    username = logManager.checkLog(),
    storage = utils.storage;
logOutBtn.addEventListener('click', logOut, false);
if(username) {
    userContent.innerText = username;
} else {
    window.location.href = './login/login.html'
}
console.log(storage.getUser())
renderTable(storage.getUser())

function logOut() {
    logManager.logOut(username);
    window.location.href = './login/login.html'
}

function renderTable(users) {
    var str = '';
    users.forEach(function (user, index) {
        str += '<tr><th scope="row">' + (index + 1) +
        '</th><td>' + user.name + 
        '</td><td>' + user.email + 
        '</td><td>' + user.registerTime + 
        '</td><td>' + user.lastLogTime + 
        '</td><td>' + user.logTimes + 
        '</td></tr>'
    })
    tableBody.innerHTML = str;
}