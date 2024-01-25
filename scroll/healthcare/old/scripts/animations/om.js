(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC809").s().p("EgbGAoAMAAAhP/MA2NAAAMAAABP/g");
	this.shape.setTransform(0,0,1.519,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.5,-256,527.1,512);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFC809").s().p("EgbGAoAMAAAhP/MA2NAAAMAAABP/g");
	this.shape.setTransform(0,0,1.519,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-263.5,-256,527.1,512);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E95427").s().p("EgbGAoAMAAAhP/MA2NAAAMAAABP/g");
	this.shape.setTransform(0,0,0.904,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.8,-256,313.8,512);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F38230").s().p("EgbGAoAMAAAhP/MA2NAAAMAAABP/g");
	this.shape.setTransform(-4.9,0,1.104,1,0,0,0,-4.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.5,-256,383,512);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F38230").s().p("EgbGAoAMAAAhP/MA2NAAAMAAABP/g");
	this.shape.setTransform(-4.9,0,1.104,1,0,0,0,-4.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-191.5,-256,383,512);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E5").s().p("AgCAAIAEAAIABABIgEABg");
	this.shape.setTransform(138.2,267.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("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");
	this.shape_1.setTransform(103,133.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,206,267.7), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAaA7IAAhHQAAgHgBgEQgCgFgDgCQgGgGgLAAQgIAAgIAFQgHAEgFAHIAABPIgZAAIAAhyIAZAAIAAAQQAGgIAKgFIAKgEIANgCQAJAAAHADQAHACAFAFQAFAEACAHQACAHAAAJIAABQg");
	this.shape_2.setTransform(127.5,31.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA3QgLgEgIgJQgIgIgEgLQgEgLAAgMQAAgLAEgLQAEgLAIgJQAIgIALgFQALgEAMAAQAOAAAKAEQAMAFAHAIQAIAJAEALQAEAKAAAMQAAAMgEALQgEALgIAIQgHAJgMAEQgKAFgOAAQgMAAgLgFgAgNgiQgGADgEAFQgEAFgDAHQgCAHAAAHQAAAIACAGQADAHAEAGQAEAFAGADQAGADAHAAQAIAAAGgDQAGgDAEgFQAEgGADgHQACgGAAgIQAAgHgCgHQgDgHgEgFQgEgFgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_3.setTransform(114,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgMBSIAAhyIAZAAIAABygAgKg2QgFgFABgGQgBgGAFgFQAFgFAFABQAGgBAFAFQAEAFAAAGQAAAGgEAFQgFAEgGAAQgFAAgFgEg");
	this.shape_4.setTransform(104.3,29.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAABIQgFgBgDgFQgEgDgCgGQgCgFAAgHIAAhBIgTAAIAAgWIATAAIAAgfIAYAAIAAAfIAYAAIAAAWIgYAAIAAA6QAAAHADADQADAEAFAAQAHAAAEgEIAGATQgEADgFACQgGACgJAAQgGAAgGgCg");
	this.shape_5.setTransform(97.7,30.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYA6QgIgDgFgEQgGgFgDgHQgEgIAAgJQAAgJAEgIQADgGAGgEQAFgFAIgCQAHgCAHAAQALAAAJADQAKAEAGAHIAAgRQAAgEgCgEQgCgEgEgDIgIgEQgFgCgFAAQgKAAgIAEQgIADgIAHIgKgRQAHgGAPgIQAMgEANAAQAKAAAIACQAJACAHAFQAGAFAEAIQAEAIAAALIAABLIgZAAIAAgMQgGAHgKAEQgKAEgKAAQgHAAgHgCgAgSAIQgHAFAAAKQAAAJAHAFQAHAGALAAQAHAAAHgDQAIgDAEgGIAAgRQgEgGgIgDQgHgDgHAAQgLAAgHAGg");
	this.shape_6.setTransform(87.2,31.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAABIQgFgBgDgFQgEgDgCgGQgCgFAAgHIAAhBIgTAAIAAgWIATAAIAAgfIAYAAIAAAfIAYAAIAAAWIgYAAIAAA6QAAAHADADQADAEAFAAQAHAAAEgEIAGATQgEADgFACQgGACgJAAQgGAAgGgCg");
	this.shape_7.setTransform(77.5,30.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAaA7IAAhHQAAgHgBgEQgCgFgDgCQgGgGgLAAQgIAAgIAFQgHAEgFAHIAABPIgZAAIAAhyIAZAAIAAAQQAGgIAKgFIAKgEIANgCQAJAAAHADQAHACAFAFQAFAEACAHQACAHAAAJIAABQg");
	this.shape_8.setTransform(66.9,31.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA4QgLgEgIgIQgIgJgFgKQgEgMAAgNQAAgMAEgLQAEgKAIgJQAIgIALgFQAKgEAMAAQANAAAKAEQALAFAHAIQAIAJAEALQADAMAAAMIAAAGIhXAAQABAHACAFQADAGAFAEQAFAFAGACQAHADAGAAQAJAAAJgEQAJgDAGgGIALAQQgIAJgMAEQgMAEgOAAQgMAAgLgEgAAhgIQAAgGgCgFQgCgGgEgEQgEgEgFgDQgHgDgIAAQgHAAgGADQgGACgEAFQgEAEgCAGIgCALIA/AAIAAAAg");
	this.shape_9.setTransform(53.6,31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZA4IgMgGQgGgDgFgFIAMgSQAHAHAKAEQAMAFAJAAQALAAAGgDQAGgEAAgHQAAgGgIgEQgFgDgMgDQgVgFgJgFQgGgDgEgGQgEgGAAgJQAAgIADgGQADgGAGgFQAGgFAIgCQAJgDAKAAQAJAAAQAEQALAEAIAIIgKARQgGgGgJgDQgJgEgKAAQgKAAgFADQgGADAAAGQAAAGAHAEQAGADALACIAQAEQAIADAGADQAHAEAEAGQADAHAAAJQAAAIgCAHQgEAGgFAFQgHAFgJACQgJADgLAAQgSgBgIgDg");
	this.shape_10.setTransform(41.3,31.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgUA4QgLgEgIgIQgIgJgFgKQgEgMAAgNQAAgMAEgLQAEgKAIgJQAIgIALgFQAKgEAMAAQANAAAKAEQALAFAHAIQAIAJAEALQADAMAAAMIAAAGIhXAAQABAHACAFQADAGAFAEQAFAFAGACQAHADAGAAQAJAAAJgEQAJgDAGgGIALAQQgIAJgMAEQgMAEgOAAQgMAAgLgEgAAhgIQAAgGgCgFQgCgGgEgEQgEgEgFgDQgHgDgIAAQgHAAgGADQgGACgEAFQgEAEgCAGIgCALIA/AAIAAAAg");
	this.shape_11.setTransform(29.2,31.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgeA7IAAhyIAZAAIAAARQAGgJAJgFQAKgGALAAIAAAZIgIgBQgIAAgIAFQgIAFgEAGIAABNg");
	this.shape_12.setTransform(19.1,31.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag7BPIAAidIBEAAQAMAAAKAEQAJAEAIAHQAGAGAEAJQACAJAAAKQAAALgCAJQgEAJgHAFQgHAHgJAEQgKAEgMAAIgpAAIAAA7gAgggDIAlAAQAGAAAFgCQAFgCADgDQAFgEABgEQACgFAAgGQAAgFgCgFQgBgEgFgEQgDgDgFgCQgFgCgGAAIglAAg");
	this.shape_13.setTransform(7.8,29.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgLBPIAAidIAYAAIAACdg");
	this.shape_14.setTransform(131.3,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYA6QgIgDgFgEQgGgFgDgHQgEgIAAgJQAAgJAEgIQADgGAGgEQAFgFAIgCQAHgCAHAAQALAAAJADQAKAEAGAHIAAgRQAAgEgCgEQgCgEgEgDIgIgEQgFgCgFAAQgKAAgIAEQgIADgIAHIgKgRQAHgGAPgIQAMgEANAAQAKAAAIACQAJACAHAFQAGAFAEAIQAEAIAAALIAABLIgZAAIAAgMQgGAHgKAEQgKAEgKAAQgHAAgHgCgAgSAIQgHAFAAAKQAAAJAHAFQAHAGALAAQAHAAAHgDQAIgDAEgGIAAgRQgEgGgIgDQgHgDgHAAQgLAAgHAGg");
	this.shape_15.setTransform(121.8,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPA4QgLgFgIgIQgIgIgEgLQgFgLAAgNQAAgMAFgLQAEgLAIgIQAIgIALgFQALgEAMAAQAIAAAHABQAGACAGADQAKAFAHAJIgRAPQgJgNgRAAQgIAAgFADQgHACgEAFQgFAFgCAHQgDAHAAAIQAAAIADAHQACAHAFAFQAEAFAHADQAFADAIAAQAIAAAHgDQAGgEAFgHIARAQQgHAJgKAFIgMAEQgHACgIAAQgMAAgLgEg");
	this.shape_16.setTransform(110,11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgMBSIAAhyIAYAAIAABygAgKg3QgEgEgBgGQABgGAEgFQAFgFAFAAQAGAAAFAFQAFAFAAAGQAAAGgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_17.setTransform(101.1,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAABJQgEgCgFgFQgDgDgCgFQgCgGAAgHIAAhCIgTAAIAAgVIATAAIAAggIAYAAIAAAgIAYAAIAAAVIgYAAIAAA8QAAAGADADQADAEAFAAQAIAAADgEIAGATQgEAEgFACQgGACgIAAQgIAAgFgCg");
	this.shape_18.setTransform(94.5,9.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUA4QgLgEgIgIQgIgJgFgKQgEgMAAgNQAAgMAEgLQAEgKAIgJQAIgIALgFQAKgEAMAAQANAAAKAEQALAFAHAIQAIAJAEALQADAMAAAMIAAAGIhXAAQABAHACAFQADAGAFAEQAFAFAGACQAHADAGAAQAJAAAJgEQAJgDAGgGIALAQQgIAJgMAEQgMAEgOAAQgMAAgLgEgAAhgIQAAgGgCgFQgCgGgEgEQgEgEgFgDQgHgDgIAAQgHAAgGADQgGACgEAFQgEAEgCAGIgCALIA/AAIAAAAg");
	this.shape_19.setTransform(84.1,11);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAaBPIAAhIQAAgGgBgEQgCgFgDgCQgGgFgLAAQgIAAgIAFQgHAEgGAGIAABPIgZAAIAAidIAZAAIAAA7QAHgHAKgFIAKgFQAGgBAIAAQAIAAAIACQAGACAFAFQAFAFACAGQACAHABAJIAABQg");
	this.shape_20.setTransform(70.8,8.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAABJQgEgCgFgFQgDgDgCgFQgCgGAAgHIAAhCIgTAAIAAgVIATAAIAAggIAYAAIAAAgIAYAAIAAAVIgYAAIAAA8QAAAGADADQADAEAFAAQAIAAADgEIAGATQgEAEgFACQgGACgIAAQgIAAgFgCg");
	this.shape_21.setTransform(60.3,9.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgYA3QgLgEgHgJQgIgIgEgLQgEgLAAgMQAAgLAEgLQAEgLAIgJQAHgIALgFQAMgEAMAAQAOAAAKAEQALAFAJAIQAHAJAEALQAEAKAAAMQAAAMgEALQgEALgHAIQgJAJgLAEQgKAFgOAAQgMAAgMgFgAgNgiQgGADgFAFQgDAFgDAHQgCAHAAAHQAAAIACAGQADAHADAGQAFAFAGADQAGADAHAAQAHAAAHgDQAGgDAEgFQAEgGADgHQACgGAAgIQAAgHgCgHQgDgHgEgFQgEgFgGgDQgHgDgHAAQgHAAgGADg");
	this.shape_22.setTransform(49.7,11);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag3BRIAAieIAZAAIAAAQQAGgJAKgEQAKgGAKAAQALAAAJAEQAJAFAHAIQAHAHAEALQADAMAAAOQAAAOgDAKQgEALgHAIQgHAIgJAEQgJAEgLAAQgKAAgKgFQgJgFgHgJIAAA8gAgSg1QgIAFgEAGIAAAsQAEAHAIAEQAJAEAIABQAHgBAGgCQAGgDAEgFQAEgFACgGQADgHAAgIQAAgJgDgHQgCgGgEgGQgEgFgGgCQgGgDgHgBQgIAAgJAFg");
	this.shape_23.setTransform(36.4,13);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwBPIAEgWQAEACAGAAQAGAAAEgCQAEgDACgFIAGgOIgvhzIAaAAIAhBVIAhhVIAbAAIg3CGQgDAIgDAFIgJAIQgFACgGACQgGACgHgBQgHABgHgCg");
	this.shape_24.setTransform(23.2,13.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AApBPIAAhFIhRAAIAABFIgcAAIAAidIAcAAIAABBIBRAAIAAhBIAcAAIAACdg");
	this.shape_25.setTransform(8.7,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-2,-4,138.4,48.3), null);


(lib.Dollar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(-2.9,2.5,1,1,0,0,0,103,133.8);

	this.instance_1 = new lib.Group_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(284.2,67.3,1,1,0,0,0,67.2,22.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmSAeAQgogCgPgqQgQgpAageQAQgUAZgIQAagKAXAKQAJAHAKAMIARAUIhCgJQgTASgHAKIARAkIAxgDQAdgDAQgNQAfgVAng4QAog6AZgUQAogaAxARQAuAQATAsQAEAbgXAYQgLALgiAWIg2gZIBRgZQgJggghgJQghgJgXAYQgaAYAQAkQAOAjAhAFQAtAIApgRQArgRATgnQAOgagIghQgHgagUgcQgNgTgrgmQgngigOgaQgSgsApglQAogkAsANQAUAHAhAZQAhAZAUAHQAiAGA1gCIBWgDQBxADFagEQEegCCsALQgUgWhIhBQg8g1gegkQkNkgiGmPQiAl8ARmZQAQkyBdkWQBhkmCtjqQBniUCxicQnagCsjAAQuoABlVgBQAThvACg4QAEhggsg+QgSgogzAAQguAAgeAgQgUAVgSAiIgeA9QgKgJgRgRIgbgZQgxAig0BCQg4BNgcAkQguhSgwg4Qg6hFhFgoQgmgZg2gTQgVgIhNgYQA+gEAhAAMB/lAAAQA8ABB4AAQBqABBMAIQhJASgxAVQhBAbgvAmQhfBGhPCQQg5hJgegkQgzg9gtgmIg1A4QgvhWgFgHQgkgygwgHQg7gQgsBeQgYA6AGBSQAEAwAQBfMgm4gABQDoDHCeEUQCaENBCEyQA9ESgMEcQgMEbhTEOQhADPhoC3QhsC9iPCaQgdAhg6A0QhAA7gZAZQArADA+gCIBpgDILtAAQAeABAngbQAwgjASgFQAhgHAhAVQAhAVAIAiQAEAZgTAZQgJAPgcAZQgoAjgSAYQgeAmgEAmQABBBBFAfQBFAfAygoQAoghgthCQgiAAgSAGQgbAKgHAbIBSAcIg5AXQgfgVgJgJQgUgTgFgXQAKg1A5gTQA3gTAqAiQAUASAoA6QAkA0AfAUQAQANAdADQAQACAgABIASgkIgagdIhBAJQAPgcAYgLQAbgOAZAQQAsANAFAyQAGAygoAUQg3AUg7gUQg2gRgrgsQgmAlgSAMQgiAXgkgDMhCXAAAQgiADgjgXQgRgMgnglQgmAngtASQgiAOgiAAQgQAAgRgDgAho5IQjTAXi2BdQjfBwixDGQioC9hpDvQhKCugmC0QgnC7AEC3QgGDXAzDYQAxDWBjDCQB1DhCrCqQC3C1DcBfQCvBMC5AQQDBARCwg0QCegfCXhVQCMhOB9h4QDYjNCDkhQB8kUAbk1QAHi6gHijQgjlQiQkhQh2j0i+i3QjHjCjzhbQi2hIjnAAQg/AAhDAGg");
	this.shape.setTransform(-0.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgeA0QgogDg8gJQAwgoAVgNQApgcAlgLQAeABAgAWQAHAEAtAjQgSARgKAIQgRANgQAAQgfAFgiAAIgjgBg");
	this.shape_1.setTransform(164.2,134.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguBCQghgWgngrQgsgxgXgXQBPgOATgCQA4gFApAQQBeAqBRBtQhOAOgoABIgFAAQg/AAgtgYg");
	this.shape_2.setTransform(191,130.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgGBNQg0gDgxgeQgtgcghgsIAdgZQARgOAOgGQAYgGAeAHQAQADAlAMQB9AtBPAmQhBAzhxAAIgOAAg");
	this.shape_3.setTransform(215.4,121.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Aj7CTQBIhuCOhGQClhSB7ghQhTCfhsBOQg8AphZANQgqAGg2AAQgfAAgjgCg");
	this.shape_4.setTransform(146.9,123.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhsgYQB+hACwAEQhZBlhWAvQgqAPg/AEIhrADQAchVA5gZg");
	this.shape_5.setTransform(191.2,110.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgyAsQBGhGAageQAtg1A3glQgOBLgIAaQgSA5gfAiQgnApg/AaQgtAThJAPQAhgoA+g/g");
	this.shape_6.setTransform(177.1,88);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaCFQAHgSAkhHIBHiJQAqhOAlg4QAKBXgCA4QgCBPgaA6QgkA6gvAtQg0Aug7AbQAAgsAVg0g");
	this.shape_7.setTransform(153.6,92.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhgCLQgGgzgCgmQgDgWAOgcQAIgQATggQATgdAkg/QAgg3AeggQAZAyAMAfQAQAvABAoQABBHgBAJQgEAvgYAbQg6BJhmA8IgNhZg");
	this.shape_8.setTransform(177.5,63.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhFAwQgQAAgRgNIgcgZQApghALgHQAggVAeAAQAmAKAoAcQAWANAvAoQg9AJgnACIglABQgiAAgdgEg");
	this.shape_9.setTransform(-158.5,136);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhDBaQglgBhRgNQBShvBfgpQAngQA5AFQATACBPAOIhDBIQgnArghAWQgtAYg/AAIgGAAg");
	this.shape_10.setTransform(-185.2,132.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ai5AaQBNglB+gvQApgMAMgDQAfgGAYAGQAOAFARAPIAdAZQgiAsgsAcQgxAeg1ACIgOABQhwAAhBgzg");
	this.shape_11.setTransform(-209.7,123.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ABaCPQhYgNg+gpQhqhMhUihQB2AgCpBTQCPBGBIBuQgjACgfAAQg2AAgqgGg");
	this.shape_12.setTransform(-141.2,125.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ABXBSQg/gEgqgPQhYgwhXhjQCvgFB/BAQA5AaAcBUQhIgBgjgCg");
	this.shape_13.setTransform(-185.5,112.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcBxQg+gZgngqQgggigRg3QgLgfgMhIQA3AlAtA1QAbAfBFBGQA/A/AgAnQhIgOgugUg");
	this.shape_14.setTransform(-171.4,89.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACCcQgwgsgkg6QgZg7gDhPQgCg4AKhYQAlA5ArBOIBHCJQAiBEAIAVQAVA0AAAsQg7gbgzgug");
	this.shape_15.setTransform(-148,93.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhMBfQgYgcgEguQgBgJABhIQABgpARgtQALghAZgvQAeAfAgA3IA3BdIAbAvQAOAbgDAXQgCAmgGAyIgNBZQhlg7g7hJg");
	this.shape_16.setTransform(-171.8,65.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AihEEIAqgTQAZgMAPgMQAFgQACgWIABgoIgBiEQAAhLgDg4IhJgtQAZgOAigXIA6gqQAXgSAnAAQAXABAtADIAADjQgBCSABBQQgBAXAXATQANALAcATIiiAEIgLAAQhVAAhBgHg");
	this.shape_17.setTransform(440.2,132.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AigEEIAogTQAYgMAPgKQAGgPABgVIABgmQAAiygBhZIhLgtQAngZBJg3QAZgSAnAAQAXgBAuADQACBWgBCaQgBCoABBHIBAAyIihABIgLAAQhaAAg7gHg");
	this.shape_18.setTransform(440.3,-133.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AjUHGQiRhFhOiZQhNiYAbidQATiBBQhpQBRhrB2gxQBsgxCgASQC+AbB7CqQB5CngaC/QgNBwg7BhQg7BihcA8QhpBHiDAIIgfABQhwAAhjgygAiBlTQhVAig4BGQhKBXgJB6QgIB5A9BiQAyBSBYAvQBZAvBdgFQBDgFA9gdQA9geAtgwQBFhKAWhlQAXhlghhdQgfhhhQhDQhRhFhjgLQgXgDgWAAQhBAAg/AZg");
	this.shape_19.setTransform(440.5,133.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA4DUQgzgJgtgpQgngigdg1Qgag2gUhWIgiiSQA+AxAsA9IAuA4QAcAfAbANQAKABA+gIQAsgGAWAWQAcAaAEAmQADAigSAjQgSAigfAUQgcARgeAAIgLAAg");
	this.shape_20.setTransform(463.3,60.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AACBiQg1hLgZhjQgHghgcgfQgSgUgmgdIA0gTQAegJAXgCQA9ADAyAkQA1AlAUA5QAkBjAKCIIgBAoQgCAXgRAIQhWglg8hVg");
	this.shape_21.setTransform(449.5,25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhLB/QgOhEADg1QAIhAAnhFQAcgxA2hEQAdBxAHAkQAPBWgMBCQgPAsgqA2QgxA7gWAfIgdh2g");
	this.shape_22.setTransform(476.1,14.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgmBoQgdgzgGgsQALgsAeg4IA1hgQA1A6AABDQAAA6gRBEQgMAugbBOQgrg9gNgXg");
	this.shape_23.setTransform(462.3,-8.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AhPA+QgciJB5ipQAgBQANArQAWBFAEA5QAFA6glBFQgxBLgTAmQgrhGgVhxg");
	this.shape_24.setTransform(458.7,-46.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcCxQgngagOgiQgSgsgEgfQgFgrATgfQAaguAogzQAXgeAyg7QAdA/AJAeQASA1gBAsQgDCMg8BrQgvgbgXgPg");
	this.shape_25.setTransform(388.9,-84.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AizAhQAOhSAwgwQA4gzBYgUQBDgOBgACIhBBjQgmA7geAlQgWAcgoAWIhLAiQgcANgeAYIgzAtQABhmAJgug");
	this.shape_26.setTransform(372.5,-94.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AApCVQhUgKg4gwQhPhVgRicQBkA5BJAuQAtAbBCA+QBNBKAeAWQg8ANg0AAQgWAAgVgCg");
	this.shape_27.setTransform(369.9,-130.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgLCKQgugxgbg8QgWgzAChFQABgsAPhPIAWgDQBUBiAsBAQAqAyACBQQAAAjgOBsQg6gfgtgxg");
	this.shape_28.setTransform(379,-147.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhSHzQh3gUhjhOQhihNgxhuQg7h7AXizQANhZAwhSQAuhOBGg7QBNg/BjgbQBigbBjAOQCyAWB7CTQB6CRAAC0QADCNhKB+QhLCAh+A/QhfA0h5AAQgoAAgsgGgAjFksQh9BWgZCLQgeB5A8B3QA8B4B1AyQBOAkBZgHQBZgHBIgwQBfg8AshuQAshvgbhsQgWhmhNhNQhNhNhmgUQgkgIgiAAQhkAAhdBAg");
	this.shape_29.setTransform(440.7,-134.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AALCoQgrgcgPgmQgRgtgIgXQgMgmgEgfQgCgoANgxIAdhXQAtA5AQAZQAfAyAIAtIAWB6QALBEAEA3Qg0gbgagQg");
	this.shape_30.setTransform(356.2,-163.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AUFeKMgkEAAAIAKg/QAFgkgEgaQgJgmgegeQgdgegmgJQgdgDgnALIhDAUQg7hThhglIArhfQESABVZAAIAyBlQA3BtBjBNQBkBOB3AZQBjARBbgLQBjgMBRgtQB2g+BQhyQBQhyAUiFQAdiag5ibQg4iYh5hoIAdgNQAsgRAegqQAbgnAHgyQAGgzgQgsQgTgvgpgZQgXgRglgBIg/ABQAfgnBBhLQA5hEAbg2QAbgzADhJQACgcgFhlQgLhbgFgVQgOhAgegpIhAAXIgdhTQgRgxgFgjIAVhjQAMg8gJgoQgFgwgrhfQgohaAAg3QBLg2AqgmQA8g4Aig7QBgiZgHi+QgIi+hsiRQg8hUhdg6QhZg3hogXQBCgFBqAAQCMABAhgBQAvgBAdAIQAqAMASAhQAOAfACAwQAAAbgBA3MAAAA1EQgBAfACA9QAAA2gIAlQgLAigkATQgcAOgiAAIgIAAg");
	this.shape_31.setTransform(358.2,-0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgdH2QiEgIhohGQhcg9g7hiQg7hhgNhvQgZi/B4inQB6ipC/gcQCggSBsAxQB2AxBRBrQBQBpATCAQAbCfhNCYQhNCYiSBFQhjAxhwAAIgfgBgAgrlpQhjALhRBFQhRBEgfBgQghBeAXBlQAXBmBEBIQAtAwA+AeQA9AcBCAGQBfAFBYgvQBXgvAyhSQA+hhgIh5QgJh6hLhYQg4hGhVgiQg/gZhBAAQgVAAgXADg");
	this.shape_32.setTransform(-440.5,134.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AjZHFQh9g/hLiAQhKh+ACiNQAAi0B6iRQB8iTCxgWQBjgOBiAbQBkAbBMA/QBHA8AuBOQAwBSAMBYQAUC3g4B3QgyBvhhBNQhiBNh3AUQgrAGgpAAQh6AAhfg0gAhAllQhmAUhNBNQhNBNgWBmQgcBsAsBvQAtBuBfA8QBIAwBaAHQBYAHBOgkQBzgxA9h4QA8h4gdh5QgZiLh9hWQhdhAhkAAQgiAAgkAIg");
	this.shape_33.setTransform(-440.6,-133.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AijECIAugSQAcgMAMgPQAIghgBg0QgCg6ABgdIAChOQAAgvgKggQgMgOgVgNIgkgYQAQgKAygmQAogeAbgPQAVgGAgAAIA4AAIAADyQAACUAABcIAjAWIAjAWQhWAHhOAAQhXAAhMgJg");
	this.shape_34.setTransform(-441.5,130.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ah8DDQgfgUgRgiQgSgjADgiQADgmAcgaQAWgWAsAGQA+AIAJgBQAcgNAcgfQAQgSAegmQAsg9A+gxIgiCSQgUBWgZA2QgeA1gnAiQgtApgzAJIgMAAQgeAAgbgRg");
	this.shape_35.setTransform(-463.3,61.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AimC9QAAgcAAgMQAIiIAlhkQAUg4A0glQAzgkA8gDQAYABAeALIAzATQgmAbgSAVQgcAfgHAhQgZBkg1BLQg8BVhVAjQgQgHgDgXg");
	this.shape_36.setTransform(-449.3,26.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgYCbQgqg2gPgsQgLhDAOhVQAIgpAchsQA2BEAcAxQAnBFAHBAQADA1gNBEIgdB2Qgwg8gXgeg");
	this.shape_37.setTransform(-476.1,15.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("Ag3BBQgRhEAAg7QAAhDA0g6IA1BgQAeA5AKArQgFAtgdAyQgOAYgrA8QgahPgLgsg");
	this.shape_38.setTransform(-462.3,-7.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag0CEQglhFAFg6QAEg5AWhGQAOgsAfhOQB5CrgcCHQgWB0gqBDQgvhLgVgmg");
	this.shape_39.setTransform(-458.6,-45.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AhogcQAAgtARg0QAIgXAdhGQAzA9AXAdQAoAzAaAtQATAfgFArQgEAfgSAtQgOAggnAbIhGAqQg7hrgEiMg");
	this.shape_40.setTransform(-389,-83.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ACLCIQgegYgbgNQgzgWgYgMQgpgWgWgcQgfglgmg6IhAhkQBggCBDAOQBYAUA4AzQAvAwAQBSQAHAsACBoIgzgtg");
	this.shape_41.setTransform(-372.4,-93.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AjDCKQAggXBMhJQBBg+AtgbQBOgyBfg1QgQCchQBVQg4AwhUAKQgVACgWAAQg0AAg8gNg");
	this.shape_42.setTransform(-369.8,-129.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AiiEGIAqgWQAYgNAOgNQAKgdAAgqQgBgxAAgYIABhcQAAg4gGglQgLgPgWgPQgagPgMgJQARgLAugiQAngeAagOQAXgHAhAAIA6ABIgBDxQAACSACBfQAXAOAuAfQhfADhNAAQhXAAhCgEg");
	this.shape_43.setTransform(-441.2,-135.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhpBMQAChQAqgzQAwhEBQheIAWADQAPBQACArQACBFgXAzQgbA8guAxQgtAyg6AeQgOhrAAgjg");
	this.shape_44.setTransform(-378.9,-146.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AhIBXIAWh5QAIguAfgwQAQgbAsg3QAZBHAEAOQANAygCAnQgDAggNAmQgHAXgTAtQgOAlgrAdQg2AcgZAQQAFg2AMhHg");
	this.shape_45.setTransform(-356.3,-162.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("A1Kd7QgkgSgLgjQgIglAAg1QACg9gBgfMAAAg1EIAAhSQABgxAPgfQASggAqgMQAdgJAvABQAnABCFAAQBrgBBCAFQhoAXhZA4QhdA6g8BTQhsCSgIC9QgIC+BgCZQAiA7A9A5QAoAlBNA3QgBA3goBaQgqBfgFAvQgKApANA8IAVBiQgFAkgRAxIgdBSIhAgWQgfAogOBAQgEAUgLBcQgFBlABAcQAEBJAbAzQAaA3A5BEIBhBxQgqgCgWABQgkACgXAQQgpAZgTAwQgQArAGAzQAHAyAbAoQAeAqAsAQIAdANQh5Bpg4CYQg6CbAeCaQAUCFBQByQBQBxB2A/QBQAtBkAMQBbALBjgRQB3gZBjhOQBkhNA2htIAyhlQVZAAESgBIArBfQhhAlg7BTQgsgOgWgGQgogLgdADQgmAJgdAeQgeAegJAmQgEAaAFAkIAKA+MgkEAABIgGABQgjAAgdgQg");
	this.shape_46.setTransform(-358.2,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dollar3, new cjs.Rectangle(-499.2,-193.5,998.4,387.2), null);


(lib.MYOM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(6.6).p("EBOzAgyMidmAAAQhEAAgwgwQgwgwAAhEMAAAg8bQAAhDAwgxQAwgwBEAAMCdmAAAQBEAAAxAwQAwAxAABDMAAAA8bQAABEgwAwQgxAwhEAAg");

	this.instance = new lib.Dollar3();
	this.instance.parent = this;
	this.instance.setTransform(0.2,-1.6,1.009,1.009,0,0,0,0.2,-1.2);
	this.instance.alpha = 0.391;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MYOM, new cjs.Rectangle(-524,-213,1065.4,426), null);


// stage content:
(lib.om = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Dollar
	this.instance = new lib.MYOM();
	this.instance.parent = this;
	this.instance.setTransform(615.7,228.7,1,1,0,0,0,8.7,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,x:607,y:233.6,alpha:0.407},0).wait(1).to({y:235.4,alpha:0.558},0).wait(1).to({y:236.7,alpha:0.666},0).wait(1).to({y:237.8,alpha:0.751},0).wait(1).to({y:238.6,alpha:0.822},0).wait(1).to({y:239.3,alpha:0.88},0).wait(1).to({y:239.9,alpha:0.93},0).wait(1).to({y:240.4,alpha:0.971},0).wait(1).to({regX:8.7,x:615.7,y:240.8,alpha:1},0).wait(31));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EhISAjHQhEAAgwgvQgwgwAAhDMAAAg76QAAhDAwgwQAwgwBEAAMCd9AAAQBEAAAxAwQAwAwAABDMAAAA76QAABDgwAwQgxAvhEAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:564.8,y:224.7}).wait(31));

	// Orange
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-105.8,256);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(238.5,256);

	var maskedShapeInstanceList = [this.instance_1,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},9).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(1).to({x:30},0).wait(1).to({x:80.2},0).wait(1).to({x:116.1},0).wait(1).to({x:144.5},0).wait(1).to({x:167.9},0).wait(1).to({x:187.6},0).wait(1).to({x:204.4},0).wait(1).to({x:218.7},0).wait(1).to({x:230.4},0).to({_off:true},1).wait(21));

	// Red
	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(248.5,256);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({x:367.6},0).wait(1).to({x:411.7},0).wait(1).to({x:443.2},0).wait(1).to({x:468},0).wait(1).to({x:488.6},0).wait(1).to({x:505.9},0).wait(1).to({x:520.6},0).wait(1).to({x:533.1},0).wait(1).to({x:543.4},0).wait(1).to({x:550.5},0).wait(11));

	// Yello
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(390.7,256);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(866.1,256);

	var maskedShapeInstanceList = [this.instance_4,this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},29).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(1).to({x:578.2},0).wait(1).to({x:647.5},0).wait(1).to({x:697.1},0).wait(1).to({x:736.3},0).wait(1).to({x:768.6},0).wait(1).to({x:795.8},0).wait(1).to({x:819},0).wait(1).to({x:838.7},0).wait(1).to({x:854.9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,254.7,1065.4,426);
// library properties:
lib.properties = {
	width: 1200,
	height: 478,
	fps: 30,
	color: "#D75427",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib_om = lib_om||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_om, images, createjs, ss, AdobeAn;