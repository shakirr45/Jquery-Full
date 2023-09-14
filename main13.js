$(document).ready(function(){
    $("#btn1").click(function(){
        $("#lorem1").text("Shakir");
    });

    $("#btn2").click(function(){
        $("#lorem2").html("<h1>Shakir</h1>");
    });
    
    $("#btn3").click(function(){
        $("#lorem3").val("New name");
    });

    $("#btn4").click(function(){
        $("#cf").attr("href","https://google.com");
    });
    
});