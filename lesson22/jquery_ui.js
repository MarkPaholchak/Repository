$(function () {
    $(document).tooltip();
    $("input[type='button']").on("click", function () {
        function validateDOB(dob) {

            breakDob = dob.split('-');
            if (breakDob[0] < 0 || breakDob[0] > 31) {
                return false;
            } else if (breakDob[1] < 0 || breakDob[1] > 12) {
                return false;
            } else if (breakDob[2] < 1900 || breakDob[2] > 2020) {
                return false;
            } else {
                return true;
            }
        }

        //        debugger;
        var userData = {
            uName: formatica.userName.value,
            uAge: parseFloat(formatica.userAge.value),
            uDatOfBirth: formatica.userDateOfBirth.value
        };
        if (userData.uName == "") {
            alert("Введіть коректне текстове значення у поле імені.");
            $('#formi').effect('shake', 500);
        } else if (Number.isInteger(userData.uAge) == false || userData.uAge == "" || typeof userData.uAge !== 'number') {
            alert('Введіть коректне числове значення у поле віку.');
            $('#formi').effect('shake', 500);
        } else if (validateDOB(userData.uDatOfBirth) == false || userData.uDatOfBirth == "") {
            alert('Введіть дату народження корректно, використовуючи знак "-" між числами.');
            $('#formi').effect('shake', 500);
        } else {
            $('#formi').effect('blind', 500);
        };

    })
});
//else if (Number.isInteger(userData.uAge) == false || userData.uAge == "" || typeof (userData.uAge) !== 'number')
