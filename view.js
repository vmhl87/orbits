let camera = {x: 0, y: 0, z: 1},
	trail = null; // new p5.Graphics(600, 600);

function resetTrails(){
	trail.clear();
}

function drawTrail(p, c){
	trail.fill(c, 50);
	trail.noStroke();
	trail.circle(p.x, p.y, 2);
}

function resetView(){
	//resetTrails();
	camera.x = 0;
	camera.y = 0;
	camera.z = 1;
}

let lastMouse = {x: 0, y: 0};

function updateView(){
	if(mouseIsPressed){
		camera.x += (lastMouse.x-mouseX)/camera.z;
		camera.y += (lastMouse.y-mouseY)/camera.z;
		//resetTrails();
	}
	lastMouse.x = mouseX;
	lastMouse.y = mouseY;
}

function mouseWheel(e){
	let old = camera.z;
	if(e.delta > 0.01) camera.z /= 1.04;
	if(e.delta < 0.01) camera.z *= 1.04;
	if(old != camera.z){
		let offset = {x: mouseX-300, y: mouseY-300};
		old = (camera.z-old)/old;
		camera.x += offset.x*old/camera.z;
		camera.y += offset.y*old/camera.z;
	}
	//resetTrails();
}

function applyView(){
	if(stillview){
		push();
		translate(300, 300);
		scale(camera.z);
		translate(-camera.x, -camera.y);
		if(!centered) rotate(Math.atan2(moon.p.y, moon.p.x));
		image(trail, -300, -300, 600, 600);
		pop();
	}
	translate(300, 300); trail.translate(300, 300);
	scale(camera.z); //trail.scale(camera.z);
	translate(-camera.x, -camera.y); //trail.translate(-camera.x, -camera.y);
	if(stillview){
		if(centered) rotate(-Math.atan2(moon.p.y, moon.p.x));
		trail.rotate(-Math.atan2(moon.p.y, moon.p.x));
	}
}
