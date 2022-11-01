let musicIndex=0;
isPlaying=false


		

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
