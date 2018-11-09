/* Classes with inheritance */

class Storage {
	constructor(size) {
		this.size = size;
	}
	getSize() {
		console.log(this.size);
	}
}

class Box extends Storage {
	constructor(size) {
		super(size);
	}
}

let box = new Box(5);

box.getSize();

/* Factory Pattern */

var Factory = function() {
	this.createBox = function(type) {
		var box;
		if (type === "big") {
			box = new BigBox();
		} else {
			box = new SmallBox();
		}
		return box;
	}
};

var BigBox = function() {
	this.size = 10;
};

var SmallBox = function() {
	this.size = 4;
};

function run() {
	var boxes = [];
	var factory = new Factory();
	boxes.push(factory.createBox("big"));
	boxes.push(factory.createBox("small"));
	boxes.push(factory.createBox("big"));
	for (var i = 0; i < boxes.length; i++) {
		console.log(boxes[i].size);
	}
}

run();

/* Visitor Pattern */

var Box = function(size) {
	var self = this;
	this.accept = function(visitor) {
		visitor.visit(self);
	}
	this.getSize = function() {
		return size;
	}
	this.setSize = function(newSize) {
		size = newSize;
	}
};

var ChangeSize = function () {
	this.visit = function(item) {
		item.setSize(item.getSize() * 2);
	}
}

function run() {
	var items = [
		new Box(10),
		new Box(4)
	];
	var visitor = new ChangeSize();
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		item.accept(visitor);
		console.log(item.getSize());
	}
}

run();

/* Visitor Pattern on classes with inheritance */

class Storage {
	constructor(size) {
		this.size = size;
	}
	
	accept(visitor) {
		visitor.visit(this);
	}
	
	getSize() {
		return this.size;
	}
	setSize(newSize) {
		this.size = newSize;
	}
}

class Box extends Storage {
	constructor(size) {
		super(size);
	}
}

var ChangeSize = function () {
	this.visit = function(item) {
		item.setSize(item.getSize() * 2);
	}
}

function run() {
	var items = [
		new Storage(10),
		new Box(4)
	];
	var visitor = new ChangeSize();
	for (var i = 0; i < items.length; i++) {
		var item = items[i];
		item.accept(visitor);
		console.log(item.getSize());
	}
}

run();
