
class Simplex
{
	constructor()
	{
		this.v1 = new Vec2(random(0, width), random(0, height));
		this.v2 = new Vec2(random(0, width), random(0, height));
		this.v3 = new Vec2(random(0, width), random(0, height));
	}

	best(target)
	{
		let d1 = dist(this.v1, target);
		let d2 = dist(this.v2, target);
		let d3 = dist(this.v3, target);

		if(d1 < d2 && d1 < d3) return this.v1;
		if(d2 < d1 && d2 < d3) return this.v2;
		if(d3 < d1 && d3 < d2) return this.v3;
	}

	worst(target)
	{
		let d1 = dist(this.v1, target);
		let d2 = dist(this.v2, target);
		let d3 = dist(this.v3, target);

		if(d1 > d2 && d1 > d3) return this.v1;
		if(d2 > d1 && d2 > d3) return this.v2;
		if(d3 > d1 && d3 > d2) return this.v3;
	}

	other(target)
	{
		let d1 = dist(this.v1, target);
		let d2 = dist(this.v2, target);
		let d3 = dist(this.v3, target);

		if((d1 > d2 && d1 < d3) || (d1 < d2 && d1 > d3)) return this.v1;
		if((d2 > d1 && d2 < d3) || (d2 < d1 && d2 > d3)) return this.v2;
		if((d3 > d2 && d3 < d1) || (d3 < d2 && d3 > d1)) return this.v3;
	}

	centroid()
	{
		let b = this.best();
		let o = this.other();

		let c = o.get();
		c.sub(b);
		c.mult(0.5);
		c.add(b);

		return c;
	}

	contracted()
	{
		let w = this.worst();
		let c = this.centroid();

		let co = c.get();
		co.sub(w);
		co.mult(0.5);
		co.add(w);

		return co;
	}

	reflected()
	{
		let w = this.worst();
		let c = this.centroid();

		let r = c.get();
		r.sub(w);
		r.mult(1.5);
		r.add(w);

		return r;
	}

	expanded()
	{
		let w = this.worst();
		let c = this.centroid();

		let e = c.get();
		e.sub(w);
		e.mult(2);
		e.add(w);

		return e;
	}

	shrink(target)
	{
		let w = this.worst(target);
		let b = this.best(target);
		let o = this.other(target);

		let dw = b.get();
		dw.sub(w);
		dw.mult(0.5);
		w.add(dw);

		let dio = b.get();
		dio.sub(o);
		dio.mult(0.5);
		o.add(dio);

		this.v1 = b;
		this.v2 = o;
		this.v3 = w;
	}
}
