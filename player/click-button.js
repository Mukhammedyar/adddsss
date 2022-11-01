let musicIndex=0;
isPlaying=false


		
image.src=datas[musicIndex].image;

musicName.innerHTML=datas[musicIndex].musicName;				author.innerHTML=datas[musicIndex].authorName;
music.src=datas[musicIndex].song;
		


async function playMusic() {
  
   image.src=datas[musicIndex].image
	musicName.innerHTML=datas[musicIndex].musicName;
author.innerHTML=datas[musicIndex].authorName;
music.src=datas[musicIndex].song;
		


				isPlaying ? pauseTrack() : playTrack()
				
}
function  playTrack(){
				music.play()
				play.innerHTML=`<i class='bx bx-pause'></i>`
				isPlaying=true;
}
function  pauseTrack(){
				music.pause()
				play.innerHTML=`<i class='bx bx-play'></i>`
				isPlaying=false;
}


play.addEventListener('click',playMusic)
next.addEventListener('click',nextMusic);
prev.addEventListener('click',prevMusic);

function nextMusic(){		
  
	 if(musicIndex==datas.length - 1){
								musicIndex=0
								playMusic()
								playTrack()
				}else if(musicIndex < datas.length-1){
								musicIndex+=1;		
								playMusic()
								playTrack()
				}
}


function prevMusic(){		
				if (musicIndex==0) {
								musicIndex=datas.length-1
								playMusic()
								playTrack()
				}else if(musicIndex > 0){
								musicIndex-=1;		
								playMusic() 
								playTrack()
				}
}

music.ontimeupdate=function (e) {	seekSlider	.style.width=(100*music.currentTime/music.duration)+"%"

 if (music.duration) {
 				var curMins=Math.floor(music.currentTime/60);
 var curSecs=Math.floor(music.currentTime-curMins*60);
 var durMins=Math.floor(music.duration/60)
 var durSecs=Math.floor(music.duration-durMins*60);
 
 if (curSecs<10) {
 				curSecs="0"+curSecs;
 }else if(curMins<10){
 				curMins="0"+curMins;
 }else if(durSecs<10){
 				durSecs="0"+durSecs;
 }else if(durMins<10){
 				durMins="0"+durMins;
 }
 
 currTime.innerHTML=curMins+":"+curSecs;
allTime.innerHTML=durMins+":"+durSecs;

 }

 
}

seekBody.onclick=function (e){
				music.currentTime=(e.offsetX/seekBody.offsetWidth)*music.duration;
}
