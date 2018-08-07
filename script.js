
let circleSize = 8;

// For generating algorithm points close to each other
let triMaxDist = 200;
let triCenter = new Vec2(
	random(triMaxDist+circleSize, width-triMaxDist-circleSize),
	random(triMaxDist+circleSize, height-triMaxDist-circleSize)
);

// Algorithm points
let v1 = new Vec2(
	triCenter.x + random(0, triMaxDist),
	triCenter.y + random(0, triMaxDist)
);
let v2 = new Vec2(
	triCenter.x + random(0, triMaxDist),
	triCenter.y + random(0, triMaxDist)
);
let v3 = new Vec2(
	triCenter.x + random(0, triMaxDist),
	triCenter.y + random(0, triMaxDist)
);

// Target point
let t = new Vec2(
	random(circleSize, width-circleSize),
	random(circleSize, height-circleSize)
);

// Calculating distances
let v1dist = dist(v1, t);
let v2dist = dist(v2, t);
let v3dist = dist(v3, t);

// Worst, best and other initialization
let w, b, o;

// Checking which vector is the best, worst and other
if(v1dist < v2dist && v1dist < v3dist)
{
	b = v1;
	if(v2dist < v3dist) { o = v2; w = v3; }
	else                { o = v3; w = v2; }
}
else if(v2dist < v1dist && v2dist < v3dist)
{
	b = v2;
	if(v1dist < v3dist) { o = v1; w = v3; }
	else                { o = v3; w = v1; }
}
else
{
	b = v3;
	if(v1dist < v2dist) { o = v1; w = v2; }
	else                { o = v2; w = v1; }
}

function main()
{
	// Fill the screen black
	c.fillStyle = "#000000";
	c.fillRect(0, 0, width, height);

	// Algorithm start

	// Calculating centroid
	let centroid = o.get();
	centroid.sub(b);
	centroid.mult(0.5);
	centroid.add(b);

	// Calculating expanded
	let expanded = centroid.get();
	expanded.sub(w);
	expanded.mult(2);
	expanded.add(w);

	c.fillStyle = "#ffffff";
	fillCircle(expanded.x, expanded.y, 8);

	// New points
	let v1 = o;
	let v2 = b;
	let v3 = expanded;

	// Calculating distances
	let v1dist = dist(v1, t);
	let v2dist = dist(v2, t);
	let v3dist = dist(v3, t);

	// Checking which vector is the best, worst and other
	if(v1dist < v2dist && v1dist < v3dist)
	{
		b = v1;
		if(v2dist < v3dist) { o = v2; w = v3; }
		else                { o = v3; w = v2; }
	}
	else if(v2dist < v1dist && v2dist < v3dist)
	{
		b = v2;
		if(v1dist < v3dist) { o = v1; w = v3; }
		else                { o = v3; w = v1; }
	}
	else
	{
		b = v3;
		if(v1dist < v2dist) { o = v1; w = v2; }
		else                { o = v2; w = v1; }
	}

	// Algorithm end

	// Draw the algorithm triangle
	c.strokeStyle = "#ffffff";
	line(w.x, w.y, o.x, o.y);
	line(w.x, w.y, b.x, b.y);
	line(b.x, b.y, o.x, o.y);

	// Color the points
	c.fillStyle = "#ff0000";
	fillCircle(w.x, w.y, 8);
	c.fillStyle = "#ffff00";
	fillCircle(o.x, o.y, 8);
	c.fillStyle = "#00ff00";
	fillCircle(b.x, b.y, 8);
	c.fillStyle = "#ffffff";
	fillCircle(t.x, t.y, 8);
}

// Main loop
let loop = setInterval(main, 1000/10);
