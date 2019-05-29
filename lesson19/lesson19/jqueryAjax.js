$(document).ready(function () {
    console.log($('form1.lName.value').serialize());
    $('input#getMeth').click(function () {
        var a = parseInt($('form1.age.value'));
        if (isNaN(form1.age.value) || a <= 1 || a >= 100) {
            form1.age.value = "Неправильне число";
            return;
        } else {
            var formData = {
                lName: form1.lName.value,
                fName: form1.fName.value,
                age: form1.age.value,
                address: form1.address.value
            };
            $.get("/formGet?lName=" + formData.lName + "&fName=" + formData.fName + "&age=" + formData.age + "&address=" + formData.address, function (data) {
                console.log('Data is succesfuly loaded bu GET method.');
            })

        }
    });

    $('input#postMeth').click(function () {
        var a = parseInt($('form1.age.value'));
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
            $.post("/formPost", formData,
                function (data) {
                    console.log('Data is succesfuly loaded by POST method.' + data);
                })

        }
    });
});
