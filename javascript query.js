$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color","silver")
    });
    $("input").blur(function(){
        alert(" THIS INPUT FIELD HAS LOST ITS FOCUS");
    });
    $("input").change(function(){
        $(this).css("background-color","grey");
    });
    $("input").change(function(){
        alert(" THIS IS CHANGE METHOD");
    });
});