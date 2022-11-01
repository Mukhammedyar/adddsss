function setup(){
				createCanvas(400,400)
				angleMode(DEGREES)
				
}

function draw() {
  translate(200,200)
  rotate(-90)

  background(0); 
  
  let sc=second()
  let mn=minute()
  let hr=hour()
 
  
  noStroke()
  fill(255)
  square(200,200,300,20)
  
  
  
  
  noFill();
  let sec=map(sc,0,60,0,360)
  strokeWeight(5)
  stroke(255,120,129)
  arc(0,0,260,260,0,sec)
  
  push()
  rotate(sec)
  stroke(255,120,129)
  line(0,0,97,0)
  pop()
  
  
   noFill();
  let min=map(mn,0,60,0,360)
  strokeWeight(5)
  stroke(100,225,200)
  arc(0,0,240,240,0,min)
  
  push()
  rotate(min)
  stroke(100,225,200)
  line(0,0,85,0)
  pop()
  
  noFill();
  let hrs=map(hr % 12,0,12,0,360)
  strokeWeight(5)
  stroke(220,100,240)
  arc(0,0,220,220,0,hrs)
 
  push()
  rotate(hrs)
  stroke(220,100,240)
  line(0,0,65,0)
  pop()
 
   
}
