$(document).ready(function(){
    $(".shakir").click(function(){
        $('.lorem').slideDown(2000);
    });

    $("button").click(function(){
        $('.lorem').stop();
    });
});