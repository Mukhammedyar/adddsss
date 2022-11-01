function angleToRad(angle){
				return angle * (Math.PI/180)
}

const circle=document.querySelector('.text')
const text=circle.innerText;

let angle = -90; 
let radius=125;
let di=radius*2;

circle.style.width=`${di}px`;
circle.style.height=`${di}px`;

circle.innerText=null
textArr=text.split(',')



let delta=390/textArr.length;
console.log(delta)


textArr.forEach((char,index) => {
				const newChar=document.createElement('span')
			newChar.innerText=char;
			
			const xpos=radius *Math.cos(angleToRad(angle))
			const ypos=radius *Math.sin(angleToRad(angle))
			
			const transform=`translate(${xpos}px , ${ypos}px)`
			const rotate=`rotate(${delta*index}deg)`
			
			newChar.style.transform=`${transform} `
			
	
			angle+=delta
		newChar.style.position='absolute'

  circle.append(newChar)
		
})

const deg = 6;

const hr=document.querySelector('.hour'),
min=document.querySelector('.min'),
sec=document.querySelector('.sec');


setInterval( () =>{

			let day=new Date();
			
			let mins=day.getMinutes(),
			secs=day.getSeconds();
			
			
			
  let hh=day.getHours() * 30;
  let mm=day.getMinutes() * deg;
  let ss=day.getSeconds() * deg; 
    

hr.style.transform=`rotateZ(${(hh) + (mm/12)}deg) translateY(-40%)`
min.style.transform=`rotateZ(${mm}deg) translateY(-35%)`
sec.style.transform=`rotateZ(${ss}deg) translateY(-35%)`

},)

			
		




				
				

