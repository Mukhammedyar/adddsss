let a=1.5,
b=2.3,
n=10,
t1=0,
t2=0,
yi=0,
h=0.08,
I=0,
xi=0,
sum1=0,
sum2=0;
console.log(a)
for(let i=0; i<=n; i++){
				a+=h;
				yi=(Math.sqrt(0.3*a + 1.2))/(1.6 + Math.sqrt(a**2 + 0.5))
				sum1+=yi-1;
				sum2+=yi
				
   //console.log(a.toFixed(3))
   
   console.log(yi.toFixed(3))
   
}
let arr="hello"

let barr=arr.split("o")
alert(barr)