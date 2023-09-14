// //// jquery event

// $(document).ready(function(){


// // $("p").click(function(){
// //     $(this).hide();
// // });

// // $("p").dblclick(function(){ //dbl clk krle dlt
// //     $(this).hide();
// // });

// // $("p").mouseenter(function(){ //mousen nela dlt
// //     // $(this).hide();
// //     // alert ("hi");
// // });

// // $("p").mouseleave(function(){ //mousen sorale dlt
// //     // $(this).hide();
// //     alert ("hi");
// // });

// // $("p").hover(function(){ //mousen nela hover
// //     alert ("hi");
// // },
// // function(){
// //     alert ("bye");
// // }
// // );

// // $("input").focus(function(){//input e css hobe

// //      $(this).css("background","red");


// // });


// ////// on method onk event user-----------------
// //2nd p
// // $("p").on("click",function(){
// // $(this).hide();
// // });

// $("p").on({
//     mouseenter : function(){
//         $(this).css("background-color", "red");
//     },
//     mouseleave :function(){
//         $(this).css("background-color","green");
//     },
//     click : function(){
//         $(this).css("background-color","yellow");
//     }
// });

// });

////////-------------------------- hide show krte hole


$(document).ready(function(){
    // $("#hide").click(function(){
    //     $("p").hide('slow');
    // });
    // $("#show").click(function(){
    //     $("p").show('fast');
    // });


    // $("#hide").click(function(){
    //     $("p").hide(5000);
    // });
    // $("#show").click(function(){
    //     $("p").show('slow');
    // });

    $("#hide").click(function(){
        $("p").toggle();
    });//akbr show akbr show
});