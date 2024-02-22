let numClicks = 0;

$('#croc-img').on('click', function() {
    numClicks += 1;
    $('#main-div').text(`You clicked ${numClicks} times!`);
});
