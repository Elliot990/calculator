$(document).ready(function() {
    var display = $('#display');

    $('.btn').on('click', function() {
        var value = $(this).data('value');
        
        if (value === '=') {
            try {
                display.val(eval(display.val()));
            } catch (e) {
                display.val('Error');
            }
        } else if (value === 'C') {
            display.val('');
        } else {
            display.val(display.val() + value);
        }
    });

    $('#clear').on('click', function() {
        display.val('');
    });
});
