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



(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwYYYQjSAAiXiWQiWiWAAjUMAAAggwQAAjSCWiXQCXiWDSAAMAgwAAAQDUAACWCWQCWCXAADSMAAAAgwQAADUiWCWQiWCWjUAAg");
	this.shape.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-155,312,312);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AwYYYQjSAAiXiWQiWiWAAjUMAAAggwQAAjSCWiXQCXiWDSAAMAgwAAAQDUAACWCWQCWCXAADSMAAAAgwQAADUiWCWQiWCWjUAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156,-156,312,312);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F38230","#EF6630"],[0,1],-165.9,95.8,84.1,-48.5).s().p("A53PDIAA+FIewAAQCMAABoBFQBaA8A0BoQBfC9KMUrQA4BuBTAuQApAXAeABg");
	this.shape.setTransform(-16.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F8A632","#F9A932","#FAB132","#FDC032","#FEC632"],[0,0.29,0.592,0.898,1],49.3,94.1,-14.1,-80.1).s().p("ABePDQglgDgpgaQhMgvg1hoIlAqIIGrtgQAyhlBbg7QBmhCCPgHIA2AAIAAeFg");
	this.shape_1.setTransform(139.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F79D33").s().p("Amzk7Qg0hohag8QhhhBiCgEIZJAAQiPAHhmBCQhbA7gzBlImqNgQlnrYhEiIg");
	this.shape_2.setTransform(96.6,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.5,-96.3,365,192.6);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F38230","#EF6630"],[0,1],-165.9,95.8,84.1,-48.5).s().p("A53PDIAA+FIewAAQCMAABoBFQBaA8A0BoQBfC9KMUrQA4BuBTAuQApAXAeABg");
	this.shape.setTransform(-16.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#F8A632","#F9A932","#FAB132","#FDC032","#FEC632"],[0,0.29,0.592,0.898,1],49.3,94.1,-14.1,-80.1).s().p("ABePDQglgDgpgaQhMgvg1hoIlAqIIGrtgQAyhlBbg7QBmhCCPgHIA2AAIAAeFg");
	this.shape_1.setTransform(139.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F79D33").s().p("Amzk7Qg0hohag8QhhhBiCgEIZJAAQiPAHhmBCQhbA7gzBlImqNgQlnrYhEiIg");
	this.shape_2.setTransform(96.6,-41.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.5,-96.3,365,192.6);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F6F6F").s().p("AgZAaQgLgKAAgQQAAgOALgLQAKgLAPAAQAQAAAKALQALALAAAOQAAAQgLAKQgLALgPAAQgPAAgKgLgAgWgWQgKAJAAANQAAANAKAKQAJAKANAAQANAAAKgKQAJgKAAgNQAAgNgJgJQgKgKgNAAQgNAAgJAKgAAKAWIgKgRIgIAAIAAARIgFAAIAAgqIAQAAQAGAAADADQAEAEAAAGQAAAGgEADQgDACgDAAIALASgAgIAAIALAAQADAAADgCQACgCAAgDQAAgDgCgDQgDgCgDAAIgLAAg");
	this.shape.setTransform(108.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-11.9,21.8,9.9,-25.2).s().p("AhRD8QgGAAgIgHQgOgLgLgZIgUgtICll1QAPghArgHQAigGAYALIjeHwg");
	this.shape_1.setTransform(-69.8,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49334").s().p("ABvD8Qg7AAgUgsIjKnEQAYgLAiAFQArAHAPAiIC6GiQAMAbAPALQAHAFAFAAg");
	this.shape_2.setTransform(13.3,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-16.2,34.5,16.5,-34.7).s().p("AjLFYIEjqMQAQghAqgHQAigGAYALIkjKMQgQAhgqAHQgLACgKAAQgVAAgQgHg");
	this.shape_3.setTransform(32.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49334").s().p("AizD0IDKnDQAVgsA6AAIA8AAQgFABgIAEQgPAKgLAaIhxD9IBXAAQAXAAAPAIQARAJAKAXIASAoQgKgIgfAAIihAAIgpBeQgQAigqAHQgLACgKAAQgVAAgQgIg");
	this.shape_4.setTransform(62.3,-9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-12.2,-22.9,9.5,24.4).s().p("ABTD6QgrgHgPgiIill1IAVguQAKgYAPgLQAIgGAGAAIDdHvQgQAIgUAAQgLAAgLgCg");
	this.shape_5.setTransform(86.7,-9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49334").s().p("ABvD8Qg7AAgVgsIjJnEQAYgLAjAGQAqAHAPAhIC6GiQALAbAPALQAIAFAFAAg");
	this.shape_6.setTransform(-95.1,-9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EB412F","#EA5530","#F07032","#F48832"],[0.008,0.251,0.451,1],-21,0,21.1,0).s().p("AiWCoQg5hBgDhcQAEBAAsAtQAwAyBGAAQBFAAAwgyQAvgxAAhHQAAhGgvgxQgwgyhFAAQhGAAgwAyQgsAtgEBAQADhcA5hBQA9hFBYAAQBXAAA/BFQA+BFAABiQAABig+BGQg/BFhXAAQhYAAg9hFg");
	this.shape_7.setTransform(-25.2,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49334").s().p("Ai0C1QhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpQAABqhLBLQhLBLhqAAQhpAAhLhLgAh1h3QgvAxAABGQAABHAvAxQAwAyBFAAQBGAAAwgyQAwgxAAhHQAAhGgwgxQgwgyhGAAQhFAAgwAyg");
	this.shape_8.setTransform(-29.8,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-35.3,224.4,70.6);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F6F6F").s().p("AgZAaQgLgKAAgQQAAgOALgLQAKgLAPAAQAQAAAKALQALALAAAOQAAAQgLAKQgLALgPAAQgPAAgKgLgAgWgWQgKAJAAANQAAANAKAKQAJAKANAAQANAAAKgKQAJgKAAgNQAAgNgJgJQgKgKgNAAQgNAAgJAKgAAKAWIgKgRIgIAAIAAARIgFAAIAAgqIAQAAQAGAAADADQAEAEAAAGQAAAGgEADQgDACgDAAIALASgAgIAAIALAAQADAAADgCQACgCAAgDQAAgDgCgDQgDgCgDAAIgLAAg");
	this.shape.setTransform(108.5,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-11.9,21.8,9.9,-25.2).s().p("AhRD8QgGAAgIgHQgOgLgLgZIgUgtICll1QAPghArgHQAigGAYALIjeHwg");
	this.shape_1.setTransform(-69.8,-9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F49334").s().p("ABvD8Qg7AAgUgsIjKnEQAYgLAiAFQArAHAPAiIC6GiQAMAbAPALQAHAFAFAAg");
	this.shape_2.setTransform(13.3,-9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-16.2,34.5,16.5,-34.7).s().p("AjLFYIEjqMQAQghAqgHQAigGAYALIkjKMQgQAhgqAHQgLACgKAAQgVAAgQgHg");
	this.shape_3.setTransform(32.3,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F49334").s().p("AizD0IDKnDQAVgsA6AAIA8AAQgFABgIAEQgPAKgLAaIhxD9IBXAAQAXAAAPAIQARAJAKAXIASAoQgKgIgfAAIihAAIgpBeQgQAigqAHQgLACgKAAQgVAAgQgIg");
	this.shape_4.setTransform(62.3,-9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EA5530","#F07032","#F48832"],[0,0.451,1],-12.2,-22.9,9.5,24.4).s().p("ABTD6QgrgHgPgiIill1IAVguQAKgYAPgLQAIgGAGAAIDdHvQgQAIgUAAQgLAAgLgCg");
	this.shape_5.setTransform(86.7,-9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F49334").s().p("ABvD8Qg7AAgVgsIjJnEQAYgLAjAGQAqAHAPAhIC6GiQALAbAPALQAIAFAFAAg");
	this.shape_6.setTransform(-95.1,-9.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#EB412F","#EA5530","#F07032","#F48832"],[0.008,0.251,0.451,1],-21,0,21.1,0).s().p("AiWCoQg5hBgDhcQAEBAAsAtQAwAyBGAAQBFAAAwgyQAvgxAAhHQAAhGgvgxQgwgyhFAAQhGAAgwAyQgsAtgEBAQADhcA5hBQA9hFBYAAQBXAAA/BFQA+BFAABiQAABig+BGQg/BFhXAAQhYAAg9hFg");
	this.shape_7.setTransform(-25.2,-9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F49334").s().p("Ai0C1QhLhLAAhqQAAhpBLhLQBLhLBpAAQBqAABLBLQBLBLAABpQAABqhLBLQhLBLhqAAQhpAAhLhLgAh1h3QgvAxAABGQAABHAvAxQAwAyBFAAQBGAAAwgyQAwgxAAhHQAAhGgwgxQgwgyhGAAQhFAAgwAyg");
	this.shape_8.setTransform(-29.8,-9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.1,-35.3,224.4,70.6);


// stage content:
(lib.mobile = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Voya Logo
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(257.1,387.3,1.429,1.429);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(257.8,385,1.611,1.585);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},9).to({state:[{t:this.instance_1}]},14).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({_off:true,scaleX:1.61,scaleY:1.59,x:257.8,y:385,alpha:1},14).wait(6));

	// FlashAICB (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().p("EgaPAnEQlSAAjyjwQjwjyAAlSMAAAg0fQAAlSDwjyQDyjwFSAAMA0fAAAQFSAADyDwQDwDyAAFSMAAAA0fQAAFSjwDyQjyDwlSAAg");
	var mask_graphics_23 = new cjs.Graphics().p("EgaPAm9QlSAAjyjwQjwjxAAlRMAAAg0VQAAlSDwjwQDyjwFSAAMA0fAAAQFTAADwDwQDxDwAAFSMAAAA0VQAAFRjxDxQjwDwlTAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:250,y:250}).wait(14).to({graphics:mask_graphics_23,x:250,y:249.3}).wait(6));

	// FlashAICB
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(250,-119.9,1.429,1.429);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(250,125.8,1.37,1.29);

	var maskedShapeInstanceList = [this.instance_2,this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},9).to({state:[{t:this.instance_3}]},14).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({_off:true,scaleX:1.37,scaleY:1.29,y:125.8},14).wait(6));

	// white
	this.instance_4 = new lib.Tween5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(250.2,250.2,1.603,1.603,0,0,0,0.1,0.1);
	this.instance_4.alpha = 0;

	this.instance_5 = new lib.Tween6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(250,250,1.603,1.602);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true,regX:0,regY:0,scaleY:1.6,x:250,y:250,alpha:1},9).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:false},9).to({regX:0.1,regY:0.1,scaleY:1.6,x:250.2,y:249.4},14).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(250,250,500.1,500.1);
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




})(lib_mobile = lib_mobile||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib_mobile, images, createjs, ss, AdobeAn;