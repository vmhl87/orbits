function vcop(v){
	return {x: v.x, y: v.y};
}

function vmag(v){
	return Math.sqrt(v.x*v.x + v.y*v.y);
}

function vmul(v, f){
	return {x: v.x*f, y: v.y*f};
}

function vadd(a, b){
	return {x: a.x+b.x, y: a.y+b.y};
}
