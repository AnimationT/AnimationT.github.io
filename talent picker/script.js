var talents = ["Solve a Rubik's Cube","Sing a Song","An awesome animation", "Laughter Blaster"]

$("#magic8Ball").click(function(){
    $("#talentText").text(talents[Math.floor((Math.random()*talents.length))])
});
  