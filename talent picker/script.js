var talents = ["Solve a Rubik's Cube","My Website!","An awesome animation", "Laughter Blaster"]

$("#magic8Ball").click(function(){
    $("#talentText").text(talents[Math.floor((Math.random()*talents.length))])
});
  