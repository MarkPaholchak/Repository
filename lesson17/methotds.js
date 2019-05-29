function promiseGetDataSend(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        xhr.onload = function () {
            if (this.status == 200) {
                resolve(this.response);
            } else {
                var error = new Error(this.statusText);
                error.code = this.status;
                reject(error);
            }
        }
        xhr.onerror = function () {
            reject(new Error('Network Error'));
        }
        xhr.send();
    });
}

function getSend() {
    var userFirstName = form1.fName.value;
    var userLastName = form1.lName.value;

    url = "/userDataGet?fName=" + userFirstName + "&lName=" + userLastName;
    promiseGetDataSend(url).then(
        function (response) {
            alert(userFirstName + userLastName + "@gmail.com");
        },
        function (error) {
            alert(error);
        }
    )
}
