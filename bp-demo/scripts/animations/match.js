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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag2DoIAAi5IiiAAIAAhkICiAAIAAiyIBuAAIAACyIChAAIAABkIihAAIAAC5g");
	this.shape.setTransform(3.9,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-60.4,53.2,120.9);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYCKIAAhkIGxAAIAABkgAjYgkIAAhlIGxAAIAABlg");
	this.shape.setTransform(-0.1,-2.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.5,-60.4,53.2,120.9);


(lib.Total = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBNIAAhdQAAgIgCgGQgCgGgEgEQgHgHgPAAQgLAAgKAGQgKAGgGAIIAABoIghAAIAAiVIAhAAIAAAUQAIgKANgGIAOgGQAIgCAJAAQAMAAAJADQAJAEAGAGQAGAGADAJQADAJAAALIAABpg");
	this.shape.setTransform(81.5,59.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgLgLQgKgLgFgOQgFgOAAgQQAAgPAFgPQAFgOAKgLQALgKAOgHQAOgGARAAQARAAAPAGQAOAHALAKQAKALAEAOQAGAPAAAPQAAAQgGAOQgEAOgKALQgLALgOAGQgPAHgRAAQgRAAgOgHgAgSgtQgIAEgFAHQgGAHgDAJQgCAJAAAJQAAAKACAJQADAJAGAHQAFAHAIAEQAJAEAJAAQAKAAAIgEQAIgEAGgHQAFgHADgJQADgJAAgKQAAgJgDgJQgDgJgFgHQgGgHgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_1.setTransform(63.9,59.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBrIAAiVIAfAAIAACVgAgNhHQgGgGAAgJQAAgIAGgFQAGgHAHAAQAIAAAGAHQAGAFAAAIQAAAJgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(51.3,56.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABeQgHgCgEgFQgFgFgDgHQgCgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAgAAIAAApIAeAAIAAAcIgeAAIAABNQAAAIADAFQAEAFAHAAQAKAAAFgFIAHAYQgEAFgIACQgHADgMAAQgJAAgHgDg");
	this.shape_3.setTransform(42.7,58.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBJQgJgDgGgGQgGgGgDgJQgDgIAAgMIAAhpIAhAAIAABdQAAAJACAGQACAGAEADQAHAHAPAAQALAAAKgGQAKgGAGgIIAAhoIAhAAIAACVIghAAIAAgUQgJAKgMAGQgTAIgMAAQgMAAgJgEg");
	this.shape_4.setTransform(28.9,60.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBjQgMgGgJgMIAAAVIghAAIAAjOIAhAAIAABOQAJgMAMgGQANgHANAAQAOAAAMAFQANAGAIAKQAKAKAEAPQAFAOABASQgBASgFAPQgEAOgKAKQgIALgNAFQgMAGgOgBQgNABgNgHgAgXgQQgLAGgGAIIAAA7QAGAIALAFQAKAHALgBQAJAAAIgDQAIgEAGgGQAFgHADgJQADgKAAgKQAAgLgDgKQgDgHgFgHQgGgHgIgEQgIgDgJAAQgLAAgKAGg");
	this.shape_5.setTransform(11.6,57.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBrIAAiVIAfAAIAACVgAgNhHQgGgGAAgJQAAgIAGgFQAGgHAHAAQAIAAAGAHQAGAFAAAIQAAAJgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_6.setTransform(-1.6,56.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBNIAAiVIAhAAIAAAWQAIgMAMgGQANgIAPABIAAAfIgLgBQgKABgMAFQgKAGgFAJIAABlg");
	this.shape_7.setTransform(-9.9,59.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABeQgGgCgFgFQgFgFgCgHQgDgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAgAAIAAApIAeAAIAAAcIgeAAIAABNQAAAIADAFQAEAFAHAAQAKAAAEgFIAIAYQgFAFgGACQgJADgKAAQgKAAgHgDg");
	this.shape_8.setTransform(-20.9,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBNIAAhdQAAgIgCgGQgCgGgEgEQgHgHgPAAQgLAAgKAGQgKAGgGAIIAABoIghAAIAAiVIAhAAIAAAUQAIgKANgGIAOgGQAIgCAJAAQAMAAAJADQAJAEAGAGQAGAGADAJQADAJAAALIAABpg");
	this.shape_9.setTransform(-34.7,59.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgLgLQgKgLgFgOQgFgOAAgQQAAgPAFgPQAFgOAKgLQALgKAOgHQAPgGAQAAQASAAAOAGQAOAHALAKQAJALAFAOQAGAPAAAPQAAAQgGAOQgFAOgJALQgLALgOAGQgOAHgSAAQgQAAgPgHgAgSgtQgHAEgGAHQgFAHgDAJQgDAJAAAJQAAAKADAJQADAJAFAHQAGAHAHAEQAJAEAJAAQAKAAAIgEQAIgEAGgHQAFgHAEgJQACgJAAgKQAAgJgCgJQgEgJgFgHQgGgHgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_10.setTransform(-52.3,59.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBpQgKgDgKgDQgJgEgJgFQgIgGgIgHQgHgHgGgIQgFgJgEgJQgEgLgDgLQgCgKAAgMQAAgLACgLQADgLAEgKQAEgKAFgIQAGgIAHgIQAIgGAIgGQAJgGAJgDQAKgEAKgCQAKgCALAAQAQAAANADQANAEALAHQAKAGAIAIQAHAIAHAKIgfAQQgEgGgFgFQgGgHgHgDQgHgEgIgCQgIgDgJAAQgNAAgNAFQgNAGgKAKQgJAKgFAOQgGANAAAQQAAAQAGANQAFAOAJALQAKAKANAFQANAGANgBQAJAAAIgCQAIgCAHgEQAHgEAGgGQAFgFAEgGIAfAPQgHAKgHAIQgIAJgKAFQgLAIgNADQgNAEgQAAQgLAAgKgCg");
	this.shape_11.setTransform(-71.4,57.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgPBoIAAjOIAfAAIAADOg");
	this.shape_12.setTransform(35,30.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AggBLQgKgDgGgGQgIgGgFgJQgEgKAAgMQAAgNAEgJQAFgIAIgGQAGgGAKgDQAJgDAJAAQAPAAANAFQAMAFAIAJIAAgWQAAgGgCgGQgDgFgEgDQgGgEgGgCQgGgCgHAAQgMAAgMAFQgKAFgLAJIgMgXQAIgIAVgKQAPgGASAAQANAAAKADQAMADAIAGQAJAHAFAKQAEALAAAPIAABiIggAAIAAgQQgIAJgNAFQgMAGgPAAQgIAAgKgEgAgYAKQgIAHgBAMQABAMAIAIQAKAHAOAAQAKAAAJgEQAJgEAGgHIAAgXQgGgHgJgFQgJgDgKAAQgOAAgKAHg");
	this.shape_13.setTransform(22.6,32.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAABeQgHgCgEgFQgFgFgDgHQgCgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAgAAIAAApIAeAAIAAAcIgeAAIAABNQAAAIADAFQAEAFAHAAQAKAAAFgFIAHAYQgEAFgIACQgHADgMAAQgJAAgHgDg");
	this.shape_14.setTransform(9.8,31.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBIQgNgGgKgLQgLgLgFgOQgFgOAAgQQAAgPAFgPQAFgOALgLQAKgKANgHQAQgGAQAAQARAAAPAGQAOAHAKAKQALALAEAOQAGAPAAAPQAAAQgGAOQgEAOgLALQgKALgOAGQgPAHgRAAQgQAAgQgHgAgSgtQgIAEgFAHQgFAHgDAJQgEAJAAAJQAAAKAEAJQADAJAFAHQAFAHAIAEQAIAEAKAAQAKAAAIgEQAIgEAGgHQAFgHAEgJQACgJAAgKQAAgJgCgJQgEgJgFgHQgGgHgIgEQgIgEgKAAQgKAAgIAEg");
	this.shape_15.setTransform(-4,32.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgRBoIAAivIg/AAIAAgfIChAAIAAAfIg/AAIAACvg");
	this.shape_16.setTransform(-21.8,30.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABwFeQgfgNgWgXQgWgYgLgeQgNghAAgkQAAglANggQALgfAWgYQAWgYAfgNQAfgNAkAAQAjAAAgANQAeANAWAYQAWAYAMAfQANAgAAAlQAAAkgNAhQgMAegWAYQgWAXgeANQggANgjAAQgkAAgfgNgACDBEQgVALgQATQgPARgIAZQgJAYAAAbQAAAbAJAYQAIAYAPARQAQATAVAKQAWAKAaAAQAZAAAXgKQAUgKAQgTQAPgRAJgYQAIgYAAgbQAAgbgIgYQgJgZgPgRQgQgTgUgLQgXgJgZgBQgaABgWAJgAj1FfIHBq/IAxAAInCK/gAj2gfQgegMgVgYQgWgWgMggQgNgfAAglQAAgkANghQAMggAWgXQAVgYAegNQAggNAjAAQAkAAAfANQAeANAWAYQAXAXAMAgQAMAhAAAkQAAAlgMAfQgMAggXAWQgWAYgeAMQgfANgkAAQgjAAgggNgAjik3QgVAJgQATQgPASgJAYQgIAZAAAbQAAAbAIAXQAJAYAPASQAQATAVAJQAWALAZAAQAZAAAXgLQAVgJAPgTQAQgSAJgYQAIgXAAgbQAAgbgIgZQgJgYgQgSQgPgTgVgJQgXgLgZAAQgZAAgWALg");
	this.shape_17.setTransform(29.5,-36.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhTFlQgbgGgYgNQgqgVgigsIAjgrQAcAmAhASQAnAWA2AAQAcAAAZgHQAYgGAUgOQAmgZAbguQAXgrAMg5QAKg0AAg6IAAghQgrA1gkAYQgdATgfAKQgiAMghAAQgwAAgogOQgqgOgfgcQgfgdgRgoQgRgrAAg3QAAgsAQgoQAPgoAegfQAgghArgSQAtgTA3AAQAiAAAeAIQAeAIAZAOQAZAPAUAUQAUAVAPAZQAjBKAKArQANA+AABJQAABHgOA+QgaBSgWAjQgQAZgUAVQgVAVgaAPQgaAPgeAIQggAJgjAAQghAAgdgHgAhXkkQggAOgXAaQgVAYgMAeQgKAdAAAeQAAAqANAhQANAfAYAWQAYAUAgAKQAgALAmAAQAbAAAdgJQAbgIAagQQAZgQAVgWQAVgWAPgaQgDgogMgjQgNgogVgfQgYgigigSQglgVguAAQgrAAgkAQg");
	this.shape_18.setTransform(-39.4,-36.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-3.2,126.9,2.2,-88.8).s().p("ApfWfQkYh3jYjYQjYjYh3kYQh6kiAAk+QAAk8B6kjQB3kYDYjYQDYjYEYh3QEih7E9AAQE9AAEjB7QEYB3DYDYQDYDYB3EYQB7EiAAE9QAAE+h7EiQh3EYjYDYQjYDYkYB3QkjB7k9AAQk9AAkih7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Total, new cjs.Rectangle(-156.1,-156.1,312.3,312.4), null);


(lib.Employer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBNIAAhdQAAgIgCgGQgCgGgEgEQgHgHgPAAQgLAAgKAGQgKAGgGAIIAABoIghAAIAAiVIAhAAIAAAUQAIgKANgGIAOgGQAIgCAJAAQAMAAAJADQAJAEAGAGQAGAGADAJQADAJAAALIAABpg");
	this.shape.setTransform(81.5,56.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgLgLQgKgLgFgOQgFgOAAgQQAAgPAFgPQAFgOAKgLQALgKAOgHQAOgGARAAQARAAAPAGQAOAHALAKQAKALAEAOQAGAPAAAPQAAAQgGAOQgEAOgKALQgLALgOAGQgPAHgRAAQgRAAgOgHgAgSgtQgIAEgFAHQgGAHgDAJQgCAJAAAJQAAAKACAJQADAJAGAHQAFAHAIAEQAJAEAJAAQAKAAAIgEQAIgEAGgHQAFgHADgJQADgJAAgKQAAgJgDgJQgDgJgFgHQgGgHgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_1.setTransform(63.9,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBrIAAiVIAfAAIAACVgAgNhHQgGgGAAgJQAAgHAGgGQAGgHAHABQAIgBAGAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(51.3,53.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABeQgHgCgEgFQgFgFgDgHQgCgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAgAAIAAApIAeAAIAAAcIgeAAIAABNQAAAIADAFQAEAFAHAAQAKAAAFgFIAHAYQgEAFgIACQgHADgMAAQgJAAgHgDg");
	this.shape_3.setTransform(42.7,55.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBJQgJgDgGgGQgGgGgDgJQgDgIAAgMIAAhpIAhAAIAABdQAAAJACAGQACAGAEADQAHAHAPAAQALAAAKgGQAKgGAGgIIAAhoIAhAAIAACVIghAAIAAgUQgJAKgMAGQgTAIgMAAQgMAAgJgEg");
	this.shape_4.setTransform(28.9,57.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBjQgMgHgJgLIAAAVIghAAIAAjOIAhAAIAABNQAJgLAMgHQANgGANAAQAOAAAMAFQANAGAIALQAKAKAEAOQAFAOABARQgBATgFAPQgEAPgKAKQgIAJgNAGQgMAFgOAAQgNAAgNgGgAgXgQQgLAFgGAJIAAA7QAGAIALAFQAKAHALAAQAJAAAIgFQAIgCAGgIQAFgGADgJQADgKAAgLQAAgKgDgKQgDgIgFgGQgGgHgIgEQgIgDgJAAQgLAAgKAGg");
	this.shape_5.setTransform(11.6,54.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBrIAAiVIAfAAIAACVgAgNhHQgGgGAAgJQAAgHAGgGQAGgHAHABQAIgBAGAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_6.setTransform(-1.6,53.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBNIAAiVIAhAAIAAAVQAIgKAMgIQANgGAPAAIAAAfIgLAAQgKgBgMAHQgKAGgFAHIAABmg");
	this.shape_7.setTransform(-9.9,56.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABeQgGgCgFgFQgFgFgCgHQgDgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAgAAIAAApIAeAAIAAAcIgeAAIAABNQAAAIADAFQAEAFAHAAQAKAAAEgFIAIAYQgFAFgGACQgJADgKAAQgKAAgHgDg");
	this.shape_8.setTransform(-20.9,55.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBNIAAhdQAAgIgCgGQgCgGgEgEQgHgHgPAAQgLAAgKAGQgKAGgGAIIAABoIghAAIAAiVIAhAAIAAAUQAIgKANgGIAOgGQAIgCAJAAQAMAAAJADQAJAEAGAGQAGAGADAJQADAJAAALIAABpg");
	this.shape_9.setTransform(-34.7,56.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgLgLQgKgLgFgOQgFgOAAgQQAAgPAFgPQAFgOAKgLQALgKAOgHQAPgGAQAAQASAAAOAGQAOAHALAKQAJALAFAOQAGAPAAAPQAAAQgGAOQgFAOgJALQgLALgOAGQgOAHgSAAQgQAAgPgHgAgSgtQgHAEgGAHQgFAHgDAJQgDAJAAAJQAAAKADAJQADAJAFAHQAGAHAHAEQAJAEAJAAQAKAAAIgEQAIgEAGgHQAFgHAEgJQACgJAAgKQAAgJgCgJQgEgJgFgHQgGgHgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_10.setTransform(-52.3,56.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBoQgKgCgKgDQgJgEgJgFQgIgGgIgHQgHgHgGgJQgFgIgEgKQgEgJgDgMQgCgLAAgLQAAgLACgLQADgLAEgJQAEgKAFgJQAGgIAHgIQAIgGAIgGQAJgFAJgEQAKgEAKgCQAKgCALAAQAQAAANADQANAEALAHQAKAGAIAJQAHAHAHALIgfAPQgEgGgFgGQgGgFgHgEQgHgFgIgBQgIgDgJAAQgNAAgNAGQgNAFgKAKQgJALgFANQgGAOAAAPQAAAQAGAOQAFANAJALQAKAJANAGQANAFANABQAJAAAIgCQAIgDAHgEQAHgEAGgFQAFgGAEgGIAfAPQgHAKgHAIQgIAIgKAHQgLAGgNAEQgNAEgQAAQgLAAgKgDg");
	this.shape_11.setTransform(-71.4,54.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgbBJQgOgGgLgKQgKgLgGgOQgGgPAAgRQAAgPAGgPQAFgOAKgLQALgLANgGQAPgGAPAAQARAAANAGQAOAGAKALQAJALAGAPQAFAPAAARIAAAIIhzAAQABAIAEAIQADAHAGAGQAHAGAIADQAJADAJAAQALAAAMgEQAMgFAHgIIAPAWQgLAKgQAGQgPAGgTAAQgPAAgPgGgAArgLQAAgHgDgHQgCgHgFgGQgFgGgIgDQgJgEgKAAQgJAAgIAEQgIADgFAGQgFAGgDAHQgDAGAAAIIBTAAIAAAAg");
	this.shape_12.setTransform(63.8,29.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBJQgOgGgLgKQgKgLgGgOQgGgPAAgRQAAgPAGgPQAFgOAKgLQALgLANgGQAPgGAPAAQARAAANAGQAOAGAKALQAJALAGAPQAFAPAAARIAAAIIhzAAQABAIAEAIQADAHAGAGQAHAGAIADQAJADAJAAQALAAAMgEQAMgFAHgIIAPAWQgLAKgQAGQgPAGgTAAQgPAAgPgGgAArgLQAAgHgDgHQgCgHgFgGQgFgGgIgDQgJgEgKAAQgJAAgIAEQgIADgFAGQgFAGgDAHQgDAGAAAIIBTAAIAAAAg");
	this.shape_13.setTransform(46.6,29.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/BnIAFgdQAGADAHgBQAIAAAFgCQAGgDADgHIAHgRIg9iXIAiAAIArBvIArhvIAjAAIhICwQgEAJgEAGQgFAHgGAEQgHADgIACQgHACgJAAQgLAAgIgCg");
	this.shape_14.setTransform(30.2,33);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgLgLQgKgLgFgOQgFgOAAgQQAAgPAFgPQAFgOAKgLQALgKAOgHQAOgGARAAQARAAAPAGQAOAHALAKQAKALAEAOQAGAPAAAPQAAAQgGAOQgEAOgKALQgLALgOAGQgPAHgRAAQgRAAgOgHgAgSgtQgIAEgFAHQgGAHgDAJQgCAJAAAJQAAAKACAJQADAJAGAHQAFAHAIAEQAJAEAJAAQAKAAAIgEQAIgEAGgHQAFgHADgJQADgJAAgKQAAgJgDgJQgDgJgFgHQgGgHgIgEQgIgEgKAAQgJAAgJAEg");
	this.shape_15.setTransform(13.5,29.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBoIAAjOIAfAAIAADOg");
	this.shape_16.setTransform(0.9,27.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhJBpIAAjNIAhAAIAAAUQAJgLAMgHQANgGANAAQAPAAAMAFQAMAFAJALQAJAKAEAOQAFAPABASQgBASgFAOQgEAPgJAKQgJAKgMAGQgMAFgPAAQgNAAgNgGQgMgHgJgLIAABNgAgXhFQgLAFgGAJIAAA6QAGAIALAGQAKAGALAAQAJAAAIgEQAHgDAHgHQAFgHACgIQAEgJAAgLQAAgLgEgJQgCgJgFgGQgHgHgHgEQgIgDgJAAQgLAAgKAGg");
	this.shape_17.setTransform(-11.3,32.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABLBNIAAhhQABgNgGgGQgGgIgNAAQgKAAgLAGQgIAGgFAIIAABoIggAAIAAhhQAAgNgGgGQgGgIgNAAQgKAAgKAHQgJAFgFAIIAABoIghAAIAAiVIAhAAIAAAUQAFgIANgHQAGgEAIgCQAJgDAHAAQAIAAAIACQAGACAEAEQALAHADANQAIgLANgIQAGgEAIgCQAIgDAIAAQALAAAHADQAJADAFAFQAGAGADAJQACAIAAAMIAABrg");
	this.shape_18.setTransform(-33.7,29.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGBoIAAjOICNAAIAAAfIhoAAIAAA2IBmAAIAAAfIhmAAIAAA6IBoAAIAAAgg");
	this.shape_19.setTransform(-55.2,27.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABwFeQgfgNgWgXQgWgYgLgfQgNggAAgjQAAgmANggQALgfAWgYQAWgYAfgMQAfgOAkAAQAjAAAgAOQAeAMAWAYQAWAYAMAfQANAgAAAmQAAAjgNAgQgMAfgWAYQgWAXgeANQggAOgjAAQgkAAgfgOgACDBFQgVAKgQASQgPATgIAYQgJAYAAAcQAAAaAJAYQAIAXAPATQAQASAVAKQAWAKAaAAQAZAAAXgKQAUgKAQgSQAPgTAJgXQAIgYAAgaQAAgcgIgYQgJgYgPgTQgQgSgUgKQgXgLgZABQgagBgWALgAj1FeIHBq/IAxAAInCK/gAj2gfQgegMgVgXQgWgYgMgeQgNghAAgkQAAglANggQAMgfAWgYQAVgYAegNQAggMAjAAQAkAAAfAMQAeANAWAYQAXAYAMAfQAMAgAAAlQAAAkgMAhQgMAegXAYQgWAXgeAMQgfANgkAAQgjAAgggNgAjik3QgVAKgQASQgPASgJAYQgIAZAAAbQAAAbAIAYQAJAXAPASQAQATAVAKQAWAKAZAAQAZAAAXgKQAVgKAPgTQAQgSAJgXQAIgYAAgbQAAgbgIgZQgJgYgQgSQgPgSgVgKQgXgLgZAAQgZAAgWALg");
	this.shape_20.setTransform(29.5,-41.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag2FjQgdgHgZgPQgZgPgUgUQgUgUgQgaQgUgigYhTQgNg9AAhKQAAhHAOg+QAKgqAlhLQARgZAUgVQAWgVAYgPQAbgOAegJQAggHAjAAQAhgBAdAHQAbAFAYANQAqAWAjArIgkAtQgcgoghgSQgngWg2AAQgbAAgZAHQgYAHgUANQgmAZgaAvQgYApgMA6QgLA0AAA6IABAhIAfgmQAVgVAagRQAdgSAegLQAigMAiABQAvgBApAOQAqAOAeAbQAgAdARApQARAqAAA3QAAAsgQAoQgQApgeAfQgfAggrATQguATg2AAQgiAAgfgJgAgugUQgbAIgaAPQgZAQgVAXQgVAWgPAaQADAnAMAkQANAoAVAeQAYAiAiASQAlAVAuAAQArAAAjgPQAggPAYgaQAVgXAMgfQAKgdAAgeQAAgpgNgiQgNgfgYgVQgXgVghgKQgggKgmAAQgcgBgcAKg");
	this.shape_21.setTransform(-39.3,-41.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-3.2,126.9,2.2,-88.8).s().p("ApfWfQkYh3jYjYQjYjYh3kYQh6kiAAk+QAAk8B6kjQB3kYDYjYQDYjYEYh3QEih7E9AAQE9AAEjB7QEYB3DYDYQDYDYB3EYQB7EiAAE9QAAE+h7EiQh3EYjYDYQjYDYkYB3QkjB7k9AAQk9AAkih7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Employer, new cjs.Rectangle(-156.1,-156.1,312.3,312.4), null);


(lib.Employee = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAiBNIAAhdQAAgIgCgGQgCgGgEgEQgHgHgPAAQgLAAgKAGQgKAGgGAIIAABoIghAAIAAiVIAhAAIAAAUQAIgKANgGIAOgGQAIgCAJAAQAMAAAJADQAJAEAGAGQAGAGADAJQADAJAAALIAABpg");
	this.shape.setTransform(79.9,56.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgKgLQgLgLgFgOQgFgOAAgQQAAgPAFgPQAFgOALgLQAKgKAOgHQAPgGAQAAQARAAAPAGQAOAHAKAKQALALAEAOQAGAPAAAPQAAAQgGAOQgEAOgLALQgKALgOAGQgPAHgRAAQgQAAgPgHgAgSgtQgHAEgGAHQgFAHgDAJQgEAJAAAJQAAAKAEAJQADAJAFAHQAGAHAHAEQAIAEAKAAQAKAAAIgEQAIgEAGgHQAFgHAEgJQACgJAAgKQAAgJgCgJQgEgJgFgHQgGgHgIgEQgIgEgKAAQgKAAgIAEg");
	this.shape_1.setTransform(62.3,57);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPBrIAAiVIAfAAIAACVgAgNhHQgGgGAAgJQAAgHAGgGQAGgHAHABQAIgBAGAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_2.setTransform(49.6,53.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAABeQgGgCgFgFQgFgFgCgHQgDgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAfAAIAAApIAfAAIAAAcIgfAAIAABNQABAIADAFQAEAFAHAAQAKAAAEgFIAIAYQgFAFgHACQgIADgKAAQgKAAgHgDg");
	this.shape_3.setTransform(41,55.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgnBJQgJgDgGgGQgGgGgDgJQgDgIAAgMIAAhpIAhAAIAABdQAAAJACAGQACAGAEADQAHAHAPAAQALAAAKgGQAKgGAGgIIAAhoIAhAAIAACVIghAAIAAgUQgJAKgMAGQgTAIgMAAQgMAAgJgEg");
	this.shape_4.setTransform(27.3,57.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgTBjQgMgHgJgLIAAAVIggAAIAAjOIAgAAIAABNQAJgMANgGQAMgGANAAQAOAAANAFQAMAGAIAKQAKALAFAOQAEAOAAARQAAATgEAPQgGAPgJAKQgIAKgMAFQgNAFgOAAQgNAAgNgGgAgYgQQgKAFgGAJIAAA7QAGAIAKAFQALAHAMAAQAIAAAIgFQAIgCAFgIQAGgGADgJQADgKAAgLQAAgKgDgKQgDgIgGgGQgFgHgIgEQgIgDgIAAQgMAAgLAGg");
	this.shape_5.setTransform(10,54.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPBrIAAiVIAfAAIAACVgAgNhHQgGgGAAgJQAAgHAGgGQAGgHAHABQAIgBAGAHQAGAGAAAHQAAAJgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_6.setTransform(-3.2,53.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgoBNIAAiVIAhAAIAAAVQAIgKAMgIQANgGAPAAIAAAfIgLgBQgKAAgMAHQgKAGgFAHIAABmg");
	this.shape_7.setTransform(-11.5,56.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAABeQgHgCgEgFQgFgFgDgHQgCgHAAgJIAAhWIgZAAIAAgcIAZAAIAAgpIAgAAIAAApIAeAAIAAAcIgeAAIAABNQAAAIADAFQAEAFAHAAQAKAAAFgFIAHAYQgEAFgIACQgHADgMAAQgJAAgHgDg");
	this.shape_8.setTransform(-22.6,55.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBNIAAhdQAAgIgCgGQgCgGgEgEQgHgHgPAAQgLAAgKAGQgKAGgGAIIAABoIghAAIAAiVIAhAAIAAAUQAIgKANgGIAOgGQAIgCAJAAQAMAAAJADQAJAEAGAGQAGAGADAJQADAJAAALIAABpg");
	this.shape_9.setTransform(-36.3,56.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AggBIQgNgGgKgLQgLgLgFgOQgFgOAAgQQAAgPAFgPQAFgOALgLQAKgKANgHQAQgGAQAAQARAAAPAGQAOAHAKAKQALALAEAOQAGAPAAAPQAAAQgGAOQgEAOgLALQgKALgOAGQgPAHgRAAQgQAAgQgHgAgSgtQgIAEgFAHQgFAHgDAJQgEAJAAAJQAAAKAEAJQADAJAFAHQAFAHAIAEQAIAEAKAAQAKAAAIgEQAIgEAGgHQAFgHAEgJQACgJAAgKQAAgJgCgJQgEgJgFgHQgGgHgIgEQgIgEgKAAQgKAAgIAEg");
	this.shape_10.setTransform(-53.9,57);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgKBoQgKgCgJgDQgKgEgJgFQgIgGgIgHQgHgHgFgIQgHgJgDgJQgFgKgBgMQgDgLAAgLQAAgLADgLQABgLAFgJQADgLAHgIQAFgIAHgIQAIgGAIgGQAJgFAKgEQAJgEAKgCQAKgCALAAQAQAAAOADQAMAEALAHQAKAGAIAIQAHAJAHAJIgfAQQgEgGgGgGQgFgGgHgDQgHgEgIgCQgIgDgJAAQgOAAgNAFQgMAGgKAKQgJALgGANQgEAOAAAPQAAAQAEANQAGAOAJALQAKAJAMAGQANAFAOAAQAJAAAIgBQAIgDAHgEQAHgEAFgGQAGgFAEgGIAfAPQgHAKgHAIQgIAJgKAGQgLAGgMAEQgOAEgQAAQgLAAgKgDg");
	this.shape_11.setTransform(-73.1,54.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgoBNIAAiVIAhAAIAAAVQAIgKAMgIQANgGAPAAIAAAfIgLgBQgKAAgMAHQgKAGgFAHIAABmg");
	this.shape_12.setTransform(62.9,29.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgbBJQgOgGgLgKQgKgLgGgOQgGgPAAgRQAAgPAGgPQAFgOAKgLQALgLANgGQAPgGAPAAQARAAANAGQAOAGAKALQAJALAGAPQAFAPAAARIAAAIIhzAAQABAIAEAIQADAHAGAGQAHAGAIADQAJADAJAAQALAAAMgEQAMgFAHgIIAPAWQgLAKgQAGQgPAGgTAAQgPAAgPgGgAArgLQAAgHgDgHQgCgHgFgGQgFgGgIgDQgJgEgKAAQgJAAgIAEQgIADgFAGQgFAGgDAHQgDAGAAAIIBTAAIAAAAg");
	this.shape_13.setTransform(48.2,30);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag/BnIAGgdQAFADAHgBQAIAAAFgCQAGgEADgGIAGgRIg8iXIAiAAIArBvIArhvIAjAAIhICwQgDAJgFAGQgFAHgGAEQgHADgIACQgHACgJAAQgKAAgJgCg");
	this.shape_14.setTransform(31.8,33.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgfBIQgOgGgLgLQgKgLgFgOQgFgOAAgQQAAgPAFgPQAFgOAKgLQALgKAOgHQAPgGAQAAQASAAAOAGQAOAHALAKQAJALAFAOQAGAPAAAPQAAAQgGAOQgFAOgJALQgLALgOAGQgOAHgSAAQgQAAgPgHgAgSgtQgHAEgGAHQgFAHgDAJQgDAJgBAJQABAKADAJQADAJAFAHQAGAHAHAEQAIAEAKAAQAKAAAIgEQAIgEAGgHQAFgHAEgJQACgJAAgKQAAgJgCgJQgEgJgFgHQgGgHgIgEQgIgEgKAAQgKAAgIAEg");
	this.shape_15.setTransform(15.1,30);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBoIAAjOIAfAAIAADOg");
	this.shape_16.setTransform(2.5,27.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhJBpIAAjNIAhAAIAAAUQAJgLAMgHQAMgGAOAAQAPAAAMAFQAMAFAJALQAJAKAFAOQAEAPAAASQAAASgEAOQgFAPgJAKQgJAKgMAGQgMAFgPAAQgNAAgNgGQgMgHgJgLIAABNgAgYhFQgKAFgGAJIAAA6QAGAIAKAGQALAGAMAAQAIAAAIgEQAIgDAFgHQAGgHACgIQAEgJAAgLQAAgLgEgJQgCgJgGgGQgFgHgIgEQgIgDgIAAQgMAAgLAGg");
	this.shape_17.setTransform(-9.7,32.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("ABLBNIAAhhQABgNgGgGQgGgIgNAAQgKAAgLAGQgIAGgFAIIAABoIggAAIAAhhQAAgNgGgGQgGgIgNAAQgKAAgKAHQgIAFgHAIIAABoIggAAIAAiVIAgAAIAAAUQAGgIAMgHQAIgEAHgCQAIgDAJAAQAHAAAIACQAGACAFAEQAKAHADANQAHgLAOgIQAGgEAIgCQAIgDAIAAQALAAAHADQAJADAFAFQAGAGADAJQACAIAAAMIAABrg");
	this.shape_18.setTransform(-32.1,29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhGBoIAAjOICNAAIAAAfIhoAAIAAA2IBmAAIAAAfIhmAAIAAA5IBoAAIAAAhg");
	this.shape_19.setTransform(-53.6,27.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABwFeQgfgMgWgYQgWgXgLggQgNggAAgjQAAgmANggQALgfAWgYQAWgYAfgMQAfgOAkAAQAjAAAfAOQAfAMAWAYQAWAYAMAfQANAggBAmQABAjgNAgQgMAggWAXQgWAYgfAMQgfAOgjAAQgkAAgfgOgACDBEQgVALgQASQgPATgIAYQgJAYAAAcQAAAaAJAYQAIAYAPASQAQARAVALQAWAKAaAAQAZAAAXgKQAUgLAQgRQAPgSAJgYQAIgYAAgaQAAgcgIgYQgJgYgPgTQgQgSgUgLQgXgKgZABQgagBgWAKgAj1FeIHBq/IAxAAInCK/gAj2gfQgegMgVgXQgWgYgMgeQgNghAAgkQAAgkANghQAMgfAWgYQAVgYAegNQAggNAjAAQAkAAAfANQAeANAWAYQAXAYAMAfQAMAhAAAkQAAAkgMAhQgMAegXAYQgWAXgeAMQgfANgkAAQgjAAgggNgAjik3QgVAKgQASQgPASgJAZQgIAXAAAcQAAAbAIAYQAJAXAPASQAQATAVAKQAWAKAZAAQAZAAAXgKQAVgKAPgTQAQgSAJgXQAIgYAAgbQAAgcgIgXQgJgZgQgSQgPgSgVgKQgXgLgZAAQgZAAgWALg");
	this.shape_20.setTransform(23.6,-41);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhOFiQgkgJgggQQgdgQgYgWQgXgVgPgYIAogjQAPAUAVASQAUASAYAOQAaANAdAHQAeAHAgAAQApAAAggKQAhgLAYgTQAXgUAMgbQAMgcAAgjQAAglgOgbQgOgbgbgSQgYgRgjgIQgigIgoAAIhBABIAAg4IBBABQAjAAAfgIQAhgIAYgPQAagSAOgYQAPgbAAgiQAAgggOgaQgNgZgYgSQgWgRgfgKQgfgIghAAQgeAAgaAGQgaAFgXAMQgsAWgoAsIgmglQATgXAXgUQAZgTAcgPQAegOAhgIQAjgHAkgBQAuAAApAMQAqANAfAXQAgAYARAjQASAjAAAsQAAAmgPAfQgNAcgZAWQgVASgcAMQgYALgZAEQAZADAaAKQAdAMAYAVQAaAXAPAeQAQAiAAApQAAAsgQAlQgQAlgeAaQgfAcgsAPQgtAQg3AAQgpgBgmgJg");
	this.shape_21.setTransform(-44.6,-41);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-3.2,126.9,2.2,-88.8).s().p("ApfWfQkYh3jYjYQjZjYh2kYQh7kiAAk+QAAk8B7kjQB2kYDZjYQDYjYEYh3QEih7E9AAQE+AAEiB7QEYB3DYDYQDZDYB2EYQB6EiAAE9QAAE+h6EiQh2EYjZDYQjYDYkYB3QkiB7k+AAQk9AAkih7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Employee, new cjs.Rectangle(-156.1,-156.1,312.3,312.4), null);


// stage content:
(lib.match = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// =
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(801,200.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({alpha:1},11).wait(1));

	// +
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(391,200.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({alpha:1},9).wait(17));

	// Total
	this.instance_2 = new lib.Total();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1004.3,177.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({_off:false},0).wait(1).to({y:185.7,alpha:0.354},0).wait(1).to({y:188.8,alpha:0.49},0).wait(1).to({y:191.1,alpha:0.59},0).wait(1).to({y:193,alpha:0.672},0).wait(1).to({y:194.6,alpha:0.74},0).wait(1).to({y:195.9,alpha:0.8},0).wait(1).to({y:197.1,alpha:0.852},0).wait(1).to({y:198.2,alpha:0.898},0).wait(1).to({y:199.1,alpha:0.939},0).wait(1).to({y:200,alpha:0.974},0).wait(1).to({y:200.6,alpha:1},0).wait(1));

	// Employer
	this.Employee = new lib.Employee();
	this.Employee.parent = this;
	this.Employee.setTransform(600.2,177.5);
	this.Employee.alpha = 0;
	this.Employee._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Employee).wait(9).to({_off:false},0).wait(1).to({y:185.8,alpha:0.358},0).wait(1).to({y:189,alpha:0.5},0).wait(1).to({y:191.4,alpha:0.605},0).wait(1).to({y:193.4,alpha:0.69},0).wait(1).to({y:195.1,alpha:0.762},0).wait(1).to({y:196.5,alpha:0.825},0).wait(1).to({y:197.8,alpha:0.879},0).wait(1).to({y:198.9,alpha:0.928},0).wait(1).to({y:199.8,alpha:0.969},0).wait(1).to({y:200.6,alpha:1},0).wait(12));

	// Employee
	this.instance_3 = new lib.Employer();
	this.instance_3.parent = this;
	this.instance_3.setTransform(189.9,177.5);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({y:186.7,alpha:0.401},0).wait(1).to({y:190.2,alpha:0.551},0).wait(1).to({y:192.7,alpha:0.659},0).wait(1).to({y:194.7,alpha:0.745},0).wait(1).to({y:196.3,alpha:0.816},0).wait(1).to({y:197.7,alpha:0.876},0).wait(1).to({y:198.9,alpha:0.927},0).wait(1).to({y:199.9,alpha:0.97},0).wait(1).to({y:200.6,alpha:1},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(633.8,221.4,312.3,312.3);
// library properties:
lib.properties = {
	width: 1200,
	height: 400,
	fps: 30,
	color: "#0097A9",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib_match = lib_match||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_match, images, createjs, ss, AdobeAn;