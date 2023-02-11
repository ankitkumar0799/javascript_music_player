console.log("asdjgasjd");




//initialize the variable
let songIndex = 0;
let audioElement = new Audio('songs/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
{songName: "SugerCrush",filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
{songName: "Stay",filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
{songName: "chamak chalo",filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
{songName: "Melody",filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
{songName: "Middle Of The Night",filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
{songName: "Something Different",filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
{songName: "DarkSide",filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
{songName: "take me to the church",filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
{songName: "gravy",filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
{songName: "momo",filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
	]



songItems.forEach((element , i) =>{
	
	element.getElementsByTagName('img')[0].src = songs[i].coverPath;
	element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})









// handle play / pause click
masterPlay.addEventListener('click',()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterPlay.classList.remove('fa-circle-play');
		masterPlay.classList.add('fa-circle-pause');
		gif.style.opacity = 1;


	}else{
		audioElement.pause();
		masterPlay.classList.remove('fa-circle-pause');
		masterPlay.classList.add('fa-circle-play');
		gif.style.opacity = 0;
	}
})



audioElement.addEventListener('timeupdate' , ()=>{
	//updaing progress bar
	progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
	
	myProgressBar.value = progress;
});


myProgressBar.addEventListener('change', ()=>{
	audioElement.currentTime = myProgressBar.value  * audioElement.duration/100;

})

const makeAllPlays = ()=>{
	
	Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
		element.classList.add('fa-play');
		element.classList.add('fa-pause');

	})
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
	element.addEventListener('click',(e)=>{
		makeAllPlays();
		
		gif.style.opacity = 1;
		masterSongName.innerText = songs[songIndex].songName;
		songIndex = parseInt(e.target.id) ;

	
		e.target.classList.remove('fa-play');
		e.target.classList.add('fa-pause');
		audioElement.duration = 0;
		audioElement.src = `songs/${songIndex+1}.mp3`;
		audioElement.play();
		masterPlay.classList.add('fa-circle-pause');
		masterPlay.classList.remove('fa-circle-play');


	})

})
document.getElementById('next').addEventListener('click' , ()=>{
	if (songIndex >= 9) {
		songIndex = 0;
	}
	else{
		songIndex += 1;
		audioElement.src = `songs/${songIndex+1}.mp3`;
		masterSongName.innerText = songs[songIndex].songName;
				audioElement.play();
		masterPlay.classList.add('fa-circle-pause');
		masterPlay.classList.remove('fa-circle-play');
	}
})


document.getElementById('previous').addEventListener('click' , ()=>{
	if (songIndex <= 0) {
		songIndex = 0;
	}
	else{
		songIndex -= 1;
		audioElement.src = `songs/${songIndex+1}.mp3`;
		masterSongName.innerText = songs[songIndex].songName;
		audioElement.play();
		masterPlay.classList.add('fa-circle-pause');
		masterPlay.classList.remove('fa-circle-play');
	}
})






