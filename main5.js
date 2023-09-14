$(document).ready(function(){
    // $('button').click(function(){
    //     $('div').animate({left: '200px'});
    // });

    // $('button').click(function(){
    //     $('div').animate({
    //         left: "200px",
    //         width: "200px",
    //         height: "200px",
    //         opacity: "0.5"
// });

    //     });

////////-------------------

    // $('button').click(function(){
    //     $('div').animate({
    //         left: "200px",
    //         width: "+=200px",
    //         height: "+=200px",
    //         opacity: "0.5"

    //     });
    // });


    // $('button').click(function(){
    //     $('div').animate({
    //         height: "toggle"

    //     });
    // });

    // $('button').click(function(){
    //     $('div').animate({
    //         width: "toggle"

    //     });
    // });
//=============================================
    // $('button').click(function(){

    //     var name = $("div");
    //     name.animate({width: "300px" , opacity : "0.6"} , "slow");
    //     name.animate({height: "300px", opacity : "0.6"} , "slow");
    //     name.animate({width: "100px" , opacity : "0.6"} , "slow");
    //     name.animate({height: "100px" , opacity : "0.6"} , "slow");

    // });

    //-------------------------
    $('button').click(function(){

        var name = $("div");
        name.animate({left : '300px'},'slow');
        name.animate({width : '300px'},'slow');

         name.animate({fontSize: '30px'}, 'fast');
      



    });
});