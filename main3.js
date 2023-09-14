$(document).ready(function(){
    // $('button').click(function(){
    //     $('.box1').fadeIn(); //show o use kra 
    //     $('.box2').fadeIn(5000);
    //     $('.box3').fadeIn('slow');

    // });

    // $('button').click(function(){
    //     $('.box1').fadeOut(); //show o use kra jabe
    //     $('.box2').fadeOut(2000);
    //     $('.box3').fadeOut('slow');

    // }); 

    // $('button').click(function(){
    //     $('.box1').fadeToggle(); 
    //     $('.box2').fadeToggle(2000);
    //     $('.box3').fadeToggle('slow');

    // }); 

    $('button').click(function(){
        $('.box1').fadeTo('slow', 0.3); 
        $('.box2').fadeTo('slow', 0.5);
        $('.box3').fadeTo('slow', 0.9);

    }); 
});