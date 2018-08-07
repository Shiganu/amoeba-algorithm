
let cvs = document.getElementById("cvs"),
	c = cvs.getContext("2d"),
	width = window.innerWidth,
	height = window.innerHeight;

// Setting up the canvas
cvs.width = String(width);
cvs.height = String(height);
cvs.style.width = String(width) + "px";
cvs.style.height = String(height) + "px";

// Draws a line
function line(x1, y1, x2, y2)
{
	c.beginPath();
	c.moveTo(x1, y1);
	c.lineTo(x2, y2);
	c.stroke();
}

// Fills a circle
function fillCircle(x, y, r)
{
	c.beginPath();
	c.arc(x, y, r, -Math.PI, Math.PI);
	c.fill();
}

// Useful functions
function sqrt(n) { return Math.sqrt(n); }
function random(min, max) { return min+(Math.random()*(max-min)); }

// Distance function
function dist()
{
	if(arguments.length == 2)
	{
		let dx = arguments[0].x - arguments[1].x;
		let dy = arguments[0].y - arguments[1].y;

		return sqrt(dx*dx + dy*dy);
	}
	else if(arguments.length == 4)
	{
		let dx = arguments[0] - arguments[2];
		let dy = arguments[1] - arguments[3];

		return sqrt(dx*dx + dy*dy);
	}
}

// 2D Vector class
class Vec2
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
	}

	add(v)
	{
		this.x += v.x;
		this.y += v.y;
	}

	sub(v)
	{
		this.x -= v.x;
		this.y -= v.y;
	}

	mult(n)
	{
		this.x *= n;
		this.y *= n;
	}

	get()
	{
		return new Vec2(this.x, this.y);
	}
}
