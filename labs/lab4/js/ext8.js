let $snake = $('#snake-img');

$snake.hide();

$snake.slideDown(1000, function() { $('body').append('<p>Hello World!<\/p>'); });
