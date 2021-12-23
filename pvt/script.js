setTimeout(() => {
    pewdNumb.innerHTML = 65761202;
    tSerNumb.innerHTML = 60102625;
}, 1000);

$("#pewdiepie p").click(function() {
    $("#pewdGame").css("display", "block");
    $("#choose").css("display", "none");
    
    (() => {
        $(".reminder").css("display", "none");
    }, 1000);
});

$("#tseries p").click(function() {
    $("#tSerGame").css("display", "block");
    $("#choose").css("display", "none");
    setTimeout(() => {
        $(".reminder").css("display", "none");
    }, 1000);
});