


let x1,y1=null

 let display=document.querySelector('.how'),
  one=document.querySelector('.one'),
  two=document.querySelector('.two'),
  three=document.querySelector('.three'),
  par=document.querySelector('p'),
  down=document.querySelector('.down'),
  body=document.querySelector('body'),
  music=document.querySelector('audio'),
  musicMain=document.querySelector('.music'),
  bodyMusic=document.querySelector('.main');

window.addEventListener('touchstart',(e)=>{
				let firstTouch=e.touches[0]
				x1=firstTouch.clientX
				y1=firstTouch.clientY
				
})



window.addEventListener('touchmove',(e)=>{
				if (!x1 || !y1) {
								return false
				}
						let x2=e.touches[0].clientX;
				 let y2=e.touches[0].clientY;
				 
				 let diffX=x2-x1;
				 let diffY=y2-y1
 
 
    				
			 	
				
				//console.log(x2)
				
				if (Math.abs(diffX) > Math.abs(diffY)) {
								if (diffX < 0){ 
								console.log("left")
							}	else {
						 	console.log('right')
							}
				}
				if (Math.abs(diffX) < Math.abs(diffY)) {
								if (diffY < 0){
										console.log('up')	
										musicMain.classList.remove('active-top')
										bodyMusic.classList.remove('active-body')
								}
								else {
								 console.log('down')
								 musicMain.classList.add('active-top')
								 bodyMusic.classList.add('active-body') 
			
						}
				}
				
})


window.addEventListener('touchend',(e)=>{
				console.log("mouseUp")
})
   

let textType=[
				'My Love❤️',
				'You are My life💯🙂',
				'I Miss You😢',
				'I Love You❤️🫀'
]
 

 
 
 
 //tab.style.background=

 
  
  display.addEventListener('dblclick', (e) =>{
     
     if (dblHandle()) {
     				return false
     }else{
     				
										dblHandle()
     }
     
     
     
    async function dblHandle(){             
             			
   			three.classList.add('active')
  			 one.style.background='#fff'
  			 two.style.background='#fff'
  			 
  			 par.style.display='none'
     
     let text=document.createElement('h3');
   
   let musics=["My Baby Love .mp3","Contact Ringtone .mp3"];
   
   let math=Math.floor(10*Math.random(10))%2
  
   
   if (math<=1) {
   				music.src=musics[math]
   }else{
   				music.src=musics[0]
   				
   }
   
   music.play()  
   
   
				text.innerText='Hello🙋🏻‍♂️';
				text.className='text'
   display.append(text)
   
   
   


     setTimeout(()=>{
     			one.style.transform='translateY(150px) rotateZ(-45deg) translateX(47%)'
								 two.style.transform='translateY(150px) rotateZ(45deg) translateX(-47%)'
								three.style.transform='translateY(110px)'
			three.classList.remove('active')	
			
				
   },2500)
   
   	setTimeout(()=>{
								TypingOne(textType,text)
				},4000)
				
				setTimeout(()=>{
								TypingTwo(textType,text)						
				},5500)
				
				setTimeout(()=>{
								TypingThree(textType,text)						
				},7000)
				setTimeout(()=>{
								TypingFour(textType,text)						
				},8500)
				
				setTimeout(()=>{
								one.style.transform='translateY(0px) rotateZ(-45deg) translateX(47%)'
								 two.style.transform='translateY(0px) rotateZ(45deg) translateX(-47%)'
								three.style.transform='translateY(-40px)'
				text.innerHTML=''
				},10000)
				setTimeout(()=>{
							one.style.background='tomato'
							two.style.background='tomato'
							three.classList.add('active')
							par.style.display='block'
     
				},10700)
				setTimeout(()=>{
								music.pause()
								three.classList.remove('active')
				},12500)
				
  
   				
   }  
  			 			 
  })
  
   
function TypingOne(text,note){
				note.innerHTML=''
				note.innerText=''	
				 
			note.innerHTML=text[0]
									
}
function TypingTwo(text,note){
				note.innerHTML=''
				note.innerText=''	
				 
			note.innerHTML=text[1]
									
}
function TypingThree(text,note){
				note.innerHTML=''
				note.innerText=''	
				 
			 note.innerHTML=text[2]									
}
function TypingFour(text,note){
				note.innerHTML=''
				note.innerText=''	
				 
			 note.innerHTML=text[3]									
}

 function setData(){
 				let hour=document.querySelector('.hour'),
 				date=document.querySelector('.date')
 				
 				
 				
 			 
 				hour.innerHTML=''
 				let dt=new Date(),
 								hr=dt.getHours(),
 								mn=dt.getMinutes(),
 								sc=dt.getSeconds(),
 								day=dt.getDate(),
 								mnth=dt.getMonth(),
 								wk=dt.getDay(),
 								yr=dt.getFullYear();
 								
 								
 								
 				
 				//hours
 				if (hr<10) {
 							hr=`0${hr}`	
 				}else if(mn<10){
 								mn=`0${mn}`
 				}else if(sc<10){
 								sc=`0${sc}`
 				}
 				
 				//month
 				if (mnth<10) {
 							mnth=`0${mnth}`	
 				}
 				
 				//weeks
 				if(wk==1){
 								wk='Mon'
 				}else if(wk==2){
 								wk='Tue'
 				}else if(wk==3){
 								wk='Wen'
 				}else if(wk==4){
 								wk='Thu'
 				}else if(wk==5){
 								wk='Fri'
 				}else if(wk==6){
 								wk='Sat'
 				}else if(wk==7){
 								wk='Sun'
 				}
 				
 				
 				
 				hour.innerText=`${hr}:${mn}`
 				date.innerText=`${wk} ${day}.${mnth}.${yr}`
 } 
 
 setInterval(() =>{
 								setData()
    },1000) 
 
 
 
 
 
 
  
let mas=[
 'linear-gradient(90deg, #FFC1C3 30% , #FFDEA1 100%)',
 'linear-gradient(90deg,#E0A9FF 30% , #FFA5CD 100%)',
 'linear-gradient(90deg,#B2E2FF 30% , #CDFFCE 100%)',
 'linear-gradient(90deg,#FF6B9F 30% , #9FA1FF 100%)',
 'linear-gradient(90deg,#765AFF 30% , #BB19FF 100%)'
  ]
  
  
  
 
 
