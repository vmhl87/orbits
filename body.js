let GRAV_CONS = 1000,
	stillview = true,
	//stillview = false,
	centered = true,
	//centered = false,
	use = true;
	//use = false;

let moon = null, earth = null;

class Body{
	constructor(p, v, c=color(100, 100, 255), r=5){
		this.p = p;
		this.v = v;
		this.t = [vcop(p)];
		this.c = c;
		this.r = r;
	}

	draw(){
		if(this.t.length > 2 && vmag(vadd(this.p, vmul(this.t[this.t.length-2], -1))) < 20)
			this.t[this.t.length-1] = vcop(this.p);
		else this.t.push(vcop(this.p));
		if(this.t.length > 60) this.t = this.t.slice(1);
		push();
		noFill();
		stroke(this.c);
		beginShape();
		for(let x of this.t)
			curveVertex(x.x, x.y);
		curveVertex(this.p.x, this.p.y);
		endShape();
		fill(255);
		stroke(0);
		circle(this.p.x, this.p.y, this.r);
		pop();
		if(use) drawTrail(this.p, this.c);
	}

	update(s, dt){
		this.p.x += this.v.x/s*dt;
		this.p.y += this.v.y/s*dt;
		if(this !== earth){
			let o = vadd(this.p, vmul(earth.p, -1)),
				d = vmag(o),
				g = vmul(o, GRAV_CONS/(d*d*d));
			this.v.x -= g.x/s*dt;
			this.v.y -= g.y/s*dt;
		}
		if(this !== moon){
			let o = vadd(this.p, vmul(moon.p, -1)),
				d = vmag(o),
				g = vmul(o, GRAV_CONS/(d*d*d*50));
			this.v.x -= g.x/s*dt;
			this.v.y -= g.y/s*dt;
		}
	}
}
