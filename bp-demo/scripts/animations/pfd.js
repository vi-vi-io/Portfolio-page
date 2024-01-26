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



(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3.7).p("AMOIDI4bAAQguAAghggQghghAAguIAAsnQAAguAhggQAhghAuAAIYbAAQAuAAAhAhQAgAgAAAuIAAMnQAAAuggAhQghAgguAAg");
	this.shape.setTransform(71.1,-81,0.994,0.969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEC632").s().p("AsNIDQguAAghggQghghABguIAAsnQgBguAhggQAhghAuAAIYbAAQAuAAAhAhQAgAgAAAuIAAMnQABAughAhQghAgguAAg");
	this.shape_1.setTransform(71.1,-81,0.994,0.969);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3.7).p("AMQE3I4fAAQgjAAgZgZQgZgZAAgjIAAnDQAAgjAZgaQAZgZAjAAIYfAAQAjAAAZAZQAZAaAAAjIAAHDQAAAjgZAZQgZAZgjAAg");
	this.shape_2.setTransform(69.7,99.4,1.035,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D55530").s().p("AsPE4QgjAAgZgaQgZgYAAgkIAAnDQAAgjAZgaQAZgYAjAAIYfAAQAjAAAZAYQAZAaAAAjIAAHDQAAAkgZAYQgZAagjAAg");
	this.shape_3.setTransform(69.7,99.4,1.035,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3.7).p("AMiE4I5DAAQgkAAgZgaQgagZAAgkIAAnBQAAgkAagZQAZgaAkAAIZDAAQAjAAAaAaQAaAZAAAkIAAHBQAAAkgaAZQgaAagjAAg");
	this.shape_4.setTransform(70.9,15,0.998,0.986);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6427C").s().p("AshE3QgjABgagaQgagZAAgkIAAnBQAAgkAagZQAagaAjABIZDAAQAkgBAZAaQAZAZABAkIAAHBQgBAkgZAZQgZAagkgBg");
	this.shape_5.setTransform(70.9,15,0.998,0.986);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3.7).p("AH8LdIv4AAQgtAAghggQggghAAguIAAzcQAAgtAgghQAhggAtAAIP4AAQAuAAAhAgQAgAhAAAtIAATcQAAAuggAhQghAgguAAg");
	this.shape_6.setTransform(-98.2,57.2,0.977,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9BC0A7").s().p("An8LdQgtAAggggQghghAAguIAAzcQAAgtAhghQAgggAtAAIP4AAQAuAAAhAgQAgAhAAAtIAATcQAAAuggAhQghAgguAAg");
	this.shape_7.setTransform(-98.2,57.2,0.977,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3.7).p("AIOIDIwcAAQgmAAgbgbQgbgbAAgnIAAtMQAAgmAbgbQAbgbAmAAIQcAAQAnAAAbAbQAbAbAAAmIAANMQAAAngbAbQgbAbgnAAg");
	this.shape_8.setTransform(-98.2,-81.1,0.977,0.969);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F49334").s().p("AoOIDQglAAgcgbQgbgbAAgnIAAtMQAAgmAbgbQAcgbAlAAIQcAAQAnAAAbAbQAbAbAAAmIAANMQAAAngbAbQgbAbgnAAg");
	this.shape_9.setTransform(-98.2,-81.1,0.977,0.969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160.6,-132.8,332,265.2);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmD4QgQgEgJgOIgshOQgFgIgUgGIgegHQgigGgQAAQgnADgUgBQgkgCgNgWQgUgiAFgfQAGgiAhgSQASgLAUgDIg7hlQgQgcAIghQAJggAcgRQAcgQAhAJQAgAIAQAcIAbAuQASgJAUAAIALgHQAbgQAdAEQAmgWAkALQAiAKAWAmQAVAkALA+QALA3AIAOIAtBNQAJAPgFAQQgEAQgOAIIitBkQgJAGgKAAQgGAAgFgCgAhOBcQAiAHAMAFQAZAJAKATIAFAJICshlIgFgIQgNgXgKg5QgLg6gQgbQgdg0gtAbQgJAFgGAFQgJgFgNABQgMABgJAFQgJAFgHALQgWgGgSAKQgHAEgGAHQgHAIgCAHIg0haQgIgOgRgEQgQgEgOAIQgOAIgEAQQgEARAIAOIBaCaQgGAEgegBQgdAAgTALQgSALgCASQgBAQALATQADAEAWAAIAbgCIAXAAQAUAAAlAHgAC3BVQgHAEgCAIQgCAIAEAHQAEAHAIACQAIACAHgEQAHgEADgIQACgIgEgHQgEgHgIgCIgGgBQgFAAgFADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-25,52.2,50);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAmD4QgQgEgJgOIgshOQgFgIgUgGIgegHQgigGgQAAQgnADgUgBQgkgCgNgWQgUgiAFgfQAGgiAhgSQASgLAUgDIg7hlQgQgcAIghQAJggAcgRQAcgQAhAJQAgAIAQAcIAbAuQASgJAUAAIALgHQAbgQAdAEQAmgWAkALQAiAKAWAmQAVAkALA+QALA3AIAOIAtBNQAJAPgFAQQgEAQgOAIIitBkQgJAGgKAAQgGAAgFgCgAhOBcQAiAHAMAFQAZAJAKATIAFAJICshlIgFgIQgNgXgKg5QgLg6gQgbQgdg0gtAbQgJAFgGAFQgJgFgNABQgMABgJAFQgJAFgHALQgWgGgSAKQgHAEgGAHQgHAIgCAHIg0haQgIgOgRgEQgQgEgOAIQgOAIgEAQQgEARAIAOIBaCaQgGAEgegBQgdAAgTALQgSALgCASQgBAQALATQADAEAWAAIAbgCIAXAAQAUAAAlAHgAC3BVQgHAEgCAIQgCAIAEAHQAEAHAIACQAIACAHgEQAHgEADgIQACgIgEgHQgEgHgIgCIgGgBQgFAAgFADg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-25,52.2,50);


// stage content:
(lib.pfd = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// FlashAICB
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(422,406.6,1.918,2,0,0,0,0.1,0.1);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(118.4,113.6,1.918,2.001);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,scaleY:2,x:118.4,y:113.6,alpha:1},29).wait(6));

	// FlashAICB
	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(249.5,250.5,1.549,1.884);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},29).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(235.1,233.5,515.4,516.1);
// library properties:
lib.properties = {
	width: 500,
	height: 500,
	fps: 30,
	color: "#B73F7C",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib_pfd = lib_pfd||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_pfd, images, createjs, ss, AdobeAn;