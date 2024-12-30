let bodies = [];

let DT = 10;

function setup(){
	createCanvas(600, 600);
	trail = createGraphics(600, 600);
	moon = new Body({x: 0, y: 200}, {x: -Math.sqrt(2e5/41616), y: 0}, color(255, 100, 100), 15);
	earth = new Body({x: 0, y: -4}, {x: Math.sqrt(2e5/41616)/50, y: 0}, color(255, 100, 100), 30);
	bodies.push(new Body(
		{x: -100*Math.sqrt(3), y: 100},
		{x: -Math.sqrt(5)/2, y: -Math.sqrt(15)/2},
		color(100, 100, 255, 100)
	));
	bodies.push(new Body(
		{x: -100*Math.sqrt(3), y: 96},
		{x: -Math.sqrt(5)/2, y: -Math.sqrt(15)/2},
		color(100, 175, 210, 100)
	));
	bodies.push(new Body(
		{x: -100*Math.sqrt(3), y: 92},
		{x: -Math.sqrt(5)/2, y: -Math.sqrt(15)/2},
		color(100, 210, 100, 100)
	));
	bodies.push(new Body(
		{x: 100*Math.sqrt(3), y: 100},
		{x: -Math.sqrt(2e5/41616)/2, y: Math.sqrt(6e5/41616)/2},
		color(100, 100, 255, 100)
	));
	bodies.push(new Body(
		{x: 100*Math.sqrt(3), y: 102},
		{x: -Math.sqrt(2e5/41616)/2, y: Math.sqrt(6e5/41616)/2},
		color(100, 175, 210, 100)
	));
	bodies.push(new Body(
		{x: 100*Math.sqrt(3), y: 105},
		{x: -Math.sqrt(2e5/41616)/2, y: Math.sqrt(6e5/41616)/2},
		color(100, 210, 100, 100)
	));
	bodies.push(new Body(
		{x: 0, y: 200*.821048},
		{x: -Math.sqrt(2e5/41616)*.821048, y: 0},
		color(230, 125, 100, 100)
	));
	bodies.push(new Body(
		{x: 0, y: 200*1.2025},
		{x: -Math.sqrt(2e5/41616)*1.2025, y: 0},
		color(210, 185, 100, 100)
	));
}

function draw(){
	background(230);
	for(let i=0; i<1000*DT; ++i){
		for(let b of bodies) b.update(1000*DT, DT);
		moon.update(1000*DT, DT);
		earth.update(1000*DT, DT);
	}
	push(); trail.push();
	updateView();
	applyView();
	moon.draw();
	earth.draw();
	for(let b of bodies) b.draw();
	pop(); trail.pop();
}

function keyReleased(){
	if(key == 'r') resetView();
}
