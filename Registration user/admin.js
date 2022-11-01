let nameAdmin=document.querySelector('#name'),
table=document.querySelector('.table'),
edit=document.querySelector('#edit'),
add=document.querySelector('#add'),
outAdd=document.querySelector('.out-add'),
closeBtn=document.querySelector('.button-close'),
addName=document.querySelector('#addName'),
addUser=document.querySelector('#addUser'),
addAdmin=document.querySelector('#addAdmin'),
addPass=document.querySelector('#addPass'),
addBtn=document.querySelector('#addBtn');


let mailName=localStorage.getItem('name')
nameAdmin.innerHTML=mailName




/*btn.addEventListener('click',(e) =>{			
 addUser()
 })
*/


for(let k=0; k<data.length; k++){
				let tr=document.createElement('tr');
				
				tr.innerHTML=`
				<td class="mx-3">${k}</td>
				<td>${data[k].name}</td>
				<td>${data[k].user}</td>
				<td>${data[k].admin}</td>
				<td>${data[k].pass}</td>
				<button class="btn btn-danger delete">delete</button>
				`;
				table.append(tr)
			
			
				
				function addUserBtn(){
			let addTr=document.createElement('tr')
			addTr.innerHTML=`
			 <td>${k+=1}</td>
			 <td>${addName.value}</td>
			 <td>${addUser.value}</td>
			 <td>${addAdmin.value}</td>
			 <td>${addPass.value}</td>
			 <button class="btn btn-danger delete">delete</button>
			`
			
			table.append(addTr)
}
 			
}

add.addEventListener('click',(e)=>{
			outAdd.classList.remove('d-none')	
})
closeBtn.addEventListener('click',(e)=>{
				outAdd.classList.add('d-none')
})



addBtn.onclick=(e)=>{
 
   addUserBtn()
				outAdd.classList.add('d-none')
				let arrInput=[addName,addUser,addAdmin,addPass]
				arrInput.map((input) =>{
								input.value=""
				})
}
