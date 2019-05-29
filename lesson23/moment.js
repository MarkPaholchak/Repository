$(function() {
    $('.divToShow').hide();
    $(document).tooltip();
    console.log(moment().format());
    console.log(moment.locale());
    moment.locale('uk');
    console.log(moment.locale());
    $("input[type='button']").on("click", function () {
        $('.divToShow').show('slide', 1000);
        
        var userBirth = formatica.userDateOfBirth.value;
        if (formatica.userDateOfBirth.value == ''){
            $('.divToShow').html('Введіть дату народження, будь ласка.')
            setTimeout(function() {
               $('.divToShow').hide('slide', 1000); 
            }, 3000);
        } else {
            var dateAfterT = moment(userBirth, ['DD-MM-YYYY, MM-DD-YYYY, DD-MM, MM-DD']).add('year', 20).format('dddd');
            
            $('.divToShow').html("День тижня, в якому ти зустрінеш свій 20ий день народження  буде " + dateAfterT + ".");
            console.log(dateAfterT);
        };
        
    });
})