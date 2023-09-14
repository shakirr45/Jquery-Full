$(document).ready(function(){


// $("span").parent().css({
//     "color": "green",
//     "border": "2px solid green"
// });

// $("span").parents().css({
//     "color": "green",
//     "border": "2px solid green"
// });

// $("span").parents("ul").css({
//     "color": "green",
//     "border": "2px solid green"
// });

$("span").parentsUntil("div").css({
    "color": "green",
    "border": "2px solid green"
});
    
});