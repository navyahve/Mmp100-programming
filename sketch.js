var diam1=0;

function setup() {
	createCanvas (500,500);
	background("#66abe5");
}

 function draw () {
 	
 	fill("#add8e6");
 	stroke("#ffff00");
 	strokeWeight(5);
 	ellipse (250,250,diam1,diam1);
 	fill("#ff0000");
 	(random(width),random(height),100,100);
 	stroke("#add8e6");
 	fill("#42f55a");
 	strokeWeight(1);
 	textSize(40);
 	textFont("Georgia");
 	textStyle(ITALIC);
 	textAlign(CENTER);
 	text("Good morning", 130,60);
 }
function mousePressed() {
	if(diam1>200){
		diam1=0;
	}else{diam1=diam1+5;
	}
  // put drawing code here
}


