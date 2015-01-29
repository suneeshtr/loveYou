$(function() {
	var canvas = $("#c");
	var canvasHeight;
	var canvasWidth;
	var ctx;
	var dt = 0.1;
	
	var pointCollection;
	
	function init() {
		updateCanvasDimensions();
		
		var g = [new Point( 51, 138, 3, 6,"#E51C1C"),new Point( 57, 148, 3, 6,"#E51C1C"),new Point( 58, 157, 3, 6,"#E51C1C"),new Point( 61, 164, 3, 6,"#E51C1C"),new Point( 64, 172, 3, 6,"#E51C1C"),new Point( 66, 179, 3, 6,"#E51C1C"),new Point( 69, 186, 3, 6,"#E51C1C"),new Point( 102, 207, 3, 6,"#E51C1C"),new Point( 104, 214, 3, 6,"#E51C1C"),new Point( 109, 221, 3, 6,"#E51C1C"),new Point( 110, 229, 3, 6,"#E51C1C"),new Point( 113, 237, 3, 6,"#E51C1C"),new Point( 114, 242, 3, 6,"#E51C1C"),new Point( 120, 250, 3, 6,"#E51C1C"),new Point( 128, 244, 3, 6,"#E51C1C"),new Point( 133, 239, 3, 6,"#E51C1C"),new Point( 139, 239, 3, 6,"#E51C1C"),new Point( 144, 236, 3, 6,"#E51C1C"),new Point( 151, 230, 3, 6,"#E51C1C"),new Point( 146, 218, 3, 6,"#E51C1C"),new Point( 150, 206, 3, 6,"#E51C1C"),new Point( 154, 198, 3, 6,"#E51C1C"),new Point( 167, 196, 3, 6,"#E51C1C"),new Point( 177, 203, 3, 6,"#E51C1C"),new Point( 179, 214, 3, 6,"#E51C1C"),new Point( 177, 224, 3, 6,"#E51C1C"),new Point( 174, 236, 3, 6,"#E51C1C"),new Point( 164, 234, 3, 6,"#E51C1C"),new Point( 157, 230, 3, 6,"#E51C1C"),new Point( 296, 224, 3, 6,"#E51C1C"),new Point( 305, 232, 3, 6,"#E51C1C"),new Point( 310, 239, 3, 6,"#E51C1C"),new Point( 314, 242, 3, 6,"#E51C1C"),new Point( 320, 245, 3, 6,"#E51C1C"),new Point( 329, 246, 3, 6,"#E51C1C"),new Point( 327, 210, 3, 6,"#E51C1C"),new Point( 333, 222, 3, 6,"#E51C1C"),new Point( 333, 232, 3, 6,"#E51C1C"),new Point( 336, 242, 3, 6,"#E51C1C"),new Point( 336, 250, 3, 6,"#E51C1C"),new Point( 339, 258, 3, 6,"#E51C1C"),new Point( 341, 266, 3, 6,"#E51C1C"),new Point( 342, 276, 3, 6,"#E51C1C"),new Point( 342, 280, 3, 6,"#E51C1C"),new Point( 345, 287, 3, 6,"#E51C1C"),new Point( 191, 188, 3, 6,"#E51C1C"),new Point( 197, 198, 3, 6,"#E51C1C"),new Point( 202, 204, 3, 6,"#E51C1C"),new Point( 206, 208, 3, 6,"#E51C1C"),new Point( 211, 211, 3, 6,"#E51C1C"),new Point( 217, 208, 3, 6,"#E51C1C"),new Point( 221, 197, 3, 6,"#E51C1C"),new Point( 222, 190, 3, 6,"#E51C1C"),new Point( 223, 183, 3, 6,"#E51C1C"),new Point( 221, 176, 3, 6,"#E51C1C"),new Point( 217, 168, 3, 6,"#E51C1C"),new Point( 246, 188, 3, 6,"#E51C1C"),new Point( 255, 180, 3, 6,"#E51C1C"),new Point( 260, 167, 3, 6,"#E51C1C"),new Point( 256, 157, 3, 6,"#E51C1C"),new Point( 247, 161, 3, 6,"#E51C1C"),new Point( 242, 171, 3, 6,"#E51C1C"),new Point( 241, 180, 3, 6,"#E51C1C"),new Point( 254, 194, 3, 6,"#E51C1C"),new Point( 263, 197, 3, 6,"#E51C1C"),new Point( 273, 195, 3, 6,"#E51C1C"),new Point( 298, 223, 3, 6,"#E51C1C"),new Point( 351, 210, 3, 6,"#E51C1C"),new Point( 361, 200, 3, 6,"#E51C1C"),new Point( 376, 206, 3, 6,"#E51C1C"),new Point( 380, 213, 3, 6,"#E51C1C"),new Point( 382, 228, 3, 6,"#E51C1C"),new Point( 372, 234, 3, 6,"#E51C1C"),new Point( 362, 234, 3, 6,"#E51C1C"),new Point( 352, 229, 3, 6,"#E51C1C"),new Point( 349, 218, 3, 6,"#E51C1C"),new Point( 388, 186, 3, 6,"#E51C1C"),new Point( 389, 197, 3, 6,"#E51C1C"),new Point( 393, 207, 3, 6,"#E51C1C"),new Point( 400, 216, 3, 6,"#E51C1C"),new Point( 410, 215, 3, 6,"#E51C1C"),new Point( 417, 211, 3, 6,"#E51C1C"),new Point( 420, 205, 3, 6,"#E51C1C"),new Point( 413, 180, 3, 6,"#E51C1C"),new Point( 418, 189, 3, 6,"#E51C1C"),new Point( 422, 196, 3, 6,"#E51C1C"),new Point( 428, 204, 3, 6,"#E51C1C"),new Point( 432, 209, 3, 6,"#E51C1C"),new Point( 462, 186, 3, 6,"#E51C1C"),new Point( 479, 178, 3, 6,"#E51C1C")];
		
		gLength = g.length;
		for (var i = 0; i < gLength; i++) {
			g[i].curPos.x = (canvasWidth/2 - 360) + g[i].curPos.x;
			g[i].curPos.y = (canvasHeight/2 - 300) + g[i].curPos.y;
			
			g[i].originalPos.x = (canvasWidth/2 - 360) + g[i].originalPos.x;
			g[i].originalPos.y = (canvasHeight/2 - 300) + g[i].originalPos.y;
		};
		
		pointCollection = new PointCollection();
		pointCollection.points = g;
		
		initEventListeners();
		timeout();
	};
	
	function initEventListeners() {
		$(window).bind('resize', updateCanvasDimensions).bind('mousemove', onMove);
		
		canvas.get(0).ontouchmove = function(e) {
			e.preventDefault();
			onTouchMove(e);
		};
		
		canvas.get(0).ontouchstart = function(e) {
			e.preventDefault();
		};
	};
	
	function updateCanvasDimensions() {
		canvas.attr({height: $(window).height(), width: $(window).width()});
		canvasWidth = canvas.width();
		canvasHeight = canvas.height();

		draw();
	};
	
	function onMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.pageX, e.pageY);
	};
	
	function onTouchMove(e) {
		if (pointCollection)
			pointCollection.mousePos.set(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
	};
	
	function timeout() {
		draw();
		update();
		
		setTimeout(function() { timeout() }, 30);
	};
	
	function draw() {
		var tmpCanvas = canvas.get(0);

		if (tmpCanvas.getContext == null) {
			return; 
		};
		
		ctx = tmpCanvas.getContext('2d');
		ctx.clearRect(0, 0, canvasWidth, canvasHeight);
		
		if (pointCollection)
			pointCollection.draw();
	};
	
	function update() {		
		if (pointCollection)
			pointCollection.update();
	};
	
	function Vector(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
 
		this.addX = function(x) {
			this.x += x;
		};
		
		this.addY = function(y) {
			this.y += y;
		};
		
		this.addZ = function(z) {
			this.z += z;
		};
 
		this.set = function(x, y, z) {
			this.x = x; 
			this.y = y;
			this.z = z;
		};
	};
	
	function PointCollection() {
		this.mousePos = new Vector(0, 0);
		this.points = new Array();
		
		this.newPoint = function(x, y, z) {
			var point = new Point(x, y, z);
			this.points.push(point);
			return point;
		};
		
		this.update = function() {		
			var pointsLength = this.points.length;
			
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;
				
				var dx = this.mousePos.x - point.curPos.x;
				var dy = this.mousePos.y - point.curPos.y;
				var dd = (dx * dx) + (dy * dy);
				var d = Math.sqrt(dd);
				
				if (d < 150) {
					point.targetPos.x = (this.mousePos.x < point.curPos.x) ? point.curPos.x - dx : point.curPos.x - dx;
					point.targetPos.y = (this.mousePos.y < point.curPos.y) ? point.curPos.y - dy : point.curPos.y - dy;
				} else {
					point.targetPos.x = point.originalPos.x;
					point.targetPos.y = point.originalPos.y;
				};
				
				point.update();
			};
		};
		
		this.draw = function() {
			var pointsLength = this.points.length;
			for (var i = 0; i < pointsLength; i++) {
				var point = this.points[i];
				
				if (point == null)
					continue;

				point.draw();
			};
		};
	};
	
	function Point(x, y, z, size, colour) {
		this.colour = colour;
		this.curPos = new Vector(x, y, z);
		this.friction = 0.8;
		this.originalPos = new Vector(x, y, z);
		this.radius = size;
		this.size = size;
		this.springStrength = 0.1;
		this.targetPos = new Vector(x, y, z);
		this.velocity = new Vector(0.0, 0.0, 0.0);
		
		this.update = function() {
			var dx = this.targetPos.x - this.curPos.x;
			var ax = dx * this.springStrength;
			this.velocity.x += ax;
			this.velocity.x *= this.friction;
			this.curPos.x += this.velocity.x;
			
			var dy = this.targetPos.y - this.curPos.y;
			var ay = dy * this.springStrength;
			this.velocity.y += ay;
			this.velocity.y *= this.friction;
			this.curPos.y += this.velocity.y;
			
			var dox = this.originalPos.x - this.curPos.x;
			var doy = this.originalPos.y - this.curPos.y;
			var dd = (dox * dox) + (doy * doy);
			var d = Math.sqrt(dd);
			
			this.targetPos.z = d/100 + 1;
			var dz = this.targetPos.z - this.curPos.z;
			var az = dz * this.springStrength;
			this.velocity.z += az;
			this.velocity.z *= this.friction;
			this.curPos.z += this.velocity.z;
			
			this.radius = this.size*this.curPos.z;
			if (this.radius < 1) this.radius = 1;
		};
		
		this.draw = function() {
			ctx.fillStyle = this.colour;
			ctx.beginPath();
			ctx.arc(this.curPos.x, this.curPos.y, this.radius, 0, Math.PI*2, true);
			ctx.fill();
		};
	};
	
	init();
});
