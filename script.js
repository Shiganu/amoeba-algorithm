
// Target point
let target = new Vec2(random(0, width), random(0, height));
function td(v) { return dist(v, target); }

let v1 = new Vec2(random(0, width), random(0, height));
let v2 = new Vec2(random(0, width), random(0, height));
let v3 = new Vec2(random(0, width), random(0, height));
let d1 = td(v1), d2 = td(v2), d3 = td(v3);

let w, o, b;

if(d1 < d2 && d1 < d3)
{
	b = v1;
	if(d2 < d3) { o = v2; w = v3; }
	else        { o = v3; w = v2; }
}
else if(d2 < d1 && d2 < d3)
{
	b = v2;
	if(d1 < d3) { o = v1; w = v3; }
	else        { o = v3; w = v1; }
}
else if(d3 < d1 && d3 < d2)
{
	b = v3;
	if(d1 < d2) { o = v1; w = v2; }
	else        { o = v2; w = v1; }
}

function main()
{
	// Fill the screen black
	c.fillStyle = "#000000";
	c.fillRect(0, 0, width, height);

	// Draw the simplex
	c.strokeStyle = "#ffffff";
	line(w.x, w.y, o.x, o.y);
	line(o.x, o.y, b.x, b.y);
	line(b.x, b.y, w.x, w.y);

	// Color the points
	c.fillStyle = "#ff0000";
	fillCircle(w.x, w.y, 8);
	c.fillStyle = "#ffff00";
	fillCircle(o.x, o.y, 8);
	c.fillStyle = "#00ff00";
	fillCircle(b.x, b.y, 8);
	c.fillStyle = "#ffffff";
	fillCircle(target.x, target.y, 8);

	/*
	generate amoebaSize random solutions
	while not done loop
	  compute centroid
	  compute reflected
	  if reflected is better than best solution then
	    compute expanded
	    replace worst solution with better of reflected, expanded
	  else if reflected is worse than all but worst then
	    if reflected is better than worst solution then
	      replace worst solution with reflected
	    end if
	    compute contracted
	    if contracted is worse than worst
	      shrink the amoeba
	    else
	      replace worst solution with contracted
	    end if
	  else
	    replace worst solution with reflected
	  end if
	end loop
	return best solution found
	*/

	// Calculate centoid
	let ce = b.get();
	ce.sub(o);
	ce.mult(0.5);
	ce.add(o);

	// Calculate reflected
	let r = ce.get();
	r.sub(w);
	r.mult(1.5);
	r.add(w);

	// If reflected better than the best solution
	if(td(r) < td(b))
	{
		// Calculate expanded
		let e = ce.get();
		e.sub(w);
		e.mult(2);
		e.add(w);

		if(td(e) < td(r)) w = e;
		else              w = r;
	}
	// If reflected is worse than all but worst
	else if(td(r) < td(w) && td(r) > td(b) && td(r) > td(o))
	{
		if(td(r) > td(w)) w = r;

		// Calculate contracted
		let co = ce.get();
		co.sub(w);
		co.mult(0.5);
		co.add(w);

		if(td(co) > td(w))
		{
			// Shrink
			let dw = b.get();
			dw.sub(w);
			dw.mult(0.5);
			w.add(dw);

			let dio = b.get();
			dio.sub(o);
			dio.mult(0.5);
			o.add(dio);
		}
		else w = co;
	}
	else w = r;

	let v1 = w, v2 = b, v3 = o;
	let d1 = td(v1), d2 = td(v2), d3 = td(v3);

	if(d1 < d2 && d1 < d3)
	{
		b = v1;
		if(d2 < d3) { o = v2; w = v3; }
		else        { o = v3; w = v2; }
	}
	else if(d2 < d1 && d2 < d3)
	{
		b = v2;
		if(d1 < d3) { o = v1; w = v3; }
		else        { o = v3; w = v1; }
	}
	else if(d3 < d1 && d3 < d2)
	{
		b = v3;
		if(d1 < d2) { o = v1; w = v2; }
		else        { o = v2; w = v1; }
	}
}

// Main loop
let loop = setInterval(main, 1000/10);
//main();
