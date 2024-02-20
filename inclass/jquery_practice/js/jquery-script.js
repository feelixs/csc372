let title = $('h1');
title.className = 'main-title';

title.html('<i>My jQuery Example<\/i>');

title.after('<h1>jQuery is a JavaScript Library.<br>jQuery greatly simplifies JavaScript programming.<br>jQuery is easy to learn.<\/h1>');


title.append('<ul><\/ul>')
$('ul').append('<li>HTML/DOM manipulation<\/li>').append('<li>CSS manipulation<\/li>').append('<li>HTML event methods<\/li>').append('<li>Effects and animations<\/li>')

$('ul').before('<p>The jQuery library contains the following features:<\/p>');


let html = $('html');

html.css({'background-color': 'lightgrey'});

title.css({'font-family': 'Helvetica, serif'});


$('li').css({'font-family': 'Arial, serif', 'color': 'blue'});
