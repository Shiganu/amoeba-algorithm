
// Target point
target = new Vec2(
	random(0, width),
	random(0, height)
);

let s = new Simplex();

function main()
{
	// Fill the screen black
	c.fillStyle = "#000000";
	c.fillRect(0, 0, width, height);

	let w = s.worst();
	let b = s.best();
	let o = s.other();

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

	s.next();
}

// Main loop
let loop = setInterval(main, 1000/10);
//main();
