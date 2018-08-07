function s(e)  { return String(e);   }
function px(n) { return	s(n) + "px"; }

let cvs = document.getElementById("cvs"),
	c = cvs.getContext("2d"),
	width = window.innerWidth,
	height = window.innerHeight;

cvs.width = s(width);
cvs.height = s(height);
cvs.style.width = px(width);
cvs.style.height = px(height);

function line(x1, y1, x2, y2)
{
	c.beginPath();
	c.moveTo(x1, y1);
	c.lineTo(x2, y2);
	c.stroke();
}

function fillCircle(x, y, r)
{
	c.beginPath();
	c.arc(x, y, r, -Math.PI, Math.PI);
	c.fill();
}

function strokeCircle(x, y, r)
{
	c.beginPath();
	c.arc(x, y, r, -Math.PI, Math.PI);
	c.stroke();
}

function sqrt(n)
{
	return Math.sqrt(n);
}

function random(min, max)
{
	return min+(Math.random()*(max-min));
}

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

function min(a, b)
{
	if(a < b) return a;
	else      return b;
}

function max(a, b)
{
	if(a > b) return a;
	else      return b;
}

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

	magnitude()
	{
		return sqrt(this.x*this.x + this.y*this.y);
	}

	normalize()
	{
		this.mult(1/this.magnitude());
	}
}
