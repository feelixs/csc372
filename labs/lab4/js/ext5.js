// Takes a string and returns Pig Latin version of it
var toPigLatin = function(str) {
    if (!str.replace) {
        return 'ERROR: Expected a string!';
    }
    return str.replace(/\b(\w)(\w+)\b/g, '$2-$1ay').toLowerCase();
};


let $p = $('p')

$p.each(function() {
    $(this).html(toPigLatin($(this).text()));
})
