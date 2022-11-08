var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
video = document.querySelector("#player1")
video.autoplay = false;
video.loop = false;
console.log("auto play is" + video.autoplay);
console.log("loop set to " + "video.loop")
})

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
	video.play();
 })

 document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause vid");
	video.pause(); 
 })

 document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate*= .9;
	console.log( "new speed is " + video.playbackRate)
 })

 //slow down speed up is not 5 digits within 1.0-- .97, demo brings it back to 1 tho
 document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate /= .9;
	console.log( "new speed is " + video.playbackRate)
 })

 document.querySelector("#skip").addEventListener("click", function(){
	if ((video.currentTime <= video.duration - 10)){
		video.currentTime += 10;
		console.log( "current location is " + video.currentTime)
	}
	else{
		video.currentTime = 0;
		console.log( "current location is " + video.currentTime)
	}
 })

 document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == false){
	video.muted = true; 
	document.querySelector("#mute").innerHTML = "Unmute";
}
else{
	video.muted = false;
	document.querySelector("#mute").innerHTML = "Mute";
}
 }
)

 document.querySelector("#slider").addEventListener("click", function(){
	video.volume = this.value/100
	//onRangeChange, oninput, onchange 
	document.querySelector("#volume").innerHTML = video.volume*100+"%";
	console.log("volume changes")
 })

 document.querySelector("#vintage").addEventListener("click", function(){
	console.log("changing style")
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("back to og")
	video.classList.remove("oldSchool")
})