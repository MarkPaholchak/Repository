function sendGet() {
    var a = parseInt(form1.age.value);
    if (isNaN(form1.age.value) || a <= 1 || a >= 100) {
        form1.age.value = "Неправильне число";
        return;
    } else {
        var formData = {
            lName: form1.lName.value,
            fName: form1.fName.value,
            age: form1.age.value,
            address: form1.address.value
        }

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/formGet?lName=" + formData.lName + "&fName=" + formData.fName + "&age=" + formData.age + "&address=" + formData.address);
        xhr.send();
    }
}


function sendPost() {
    var a = parseInt(form1.age.value);
    if (isNaN(form1.age.value) || a <= 1 || a >= 100) {
        form1.age.value = "Неправильне число";
        return;
    } else {
        var formData = {
            lName: form1.lName.value,
            fName: form1.fName.value,
            age: form1.age.value,
            address: form1.address.value
        }

        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/formPost");
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify(formData));
    }
}
