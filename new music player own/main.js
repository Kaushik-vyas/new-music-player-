var c = 0;

var songs =["songs/1.mp3.mp3","songs/2.mp3.mp3","songs/3.mp3.mp3"];

var au = document.getElementById("au");
var next = document.getElementById("next");
var prev = document.getElementById("prev")

next.addEventListener("click", function(){
    c++;
    au.src=songs[c];
});

prev.addEventListener('click',function(){
    c--;
    au.src=songs[c];
})
