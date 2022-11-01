const button = document.querySelector('.btn');


button.addEventListener('click', (e) => {
				let x=e.clientX - e.target.offsetLeft;
				let y=e.clientY - e.target.offsetTop;
				
				let ripples=document.createElement('span')
				console.log(ripples)
			ripples.style.left=x + "px";
			ripples.style.top=y + "px";
			
			button.append(ripples); 
			 
				
				setTimeout(() =>{
								ripples.remove()
				},1000)

   })
 
 
 