
$('#quiz-select').on('submit', function (event) {
    event.preventDefault();
    if ($('#selection').val() === 'John Resig') {
        $('#feedback-div').text('CORRECT');
    } else {
        $('#feedback-div').text('WRONG');
    }
})