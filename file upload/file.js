function file(input){
				let file=input.files[0]
				
				let reader=new FileReader()
				
				reader.readAsText(file)
				
				reader.onloadstart = function (){
								console.log(reader.storage)
				}
}