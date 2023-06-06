// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents,patches} from "./model.js"
import {each} from "lodash-es"

const L = param.N;

const X = d3.scaleLinear().domain([-L,L]);
const Y = d3.scaleLinear().domain([-L,L]);
var C = d3.scaleLinear().domain([0,1]).range(["rgb(0,0,100,0.8)","rgb(180,0,0,0.8)"]);
var ctx,dL,W,H;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

function draw_path(a){
	a.forEach(d=>{
		const c = d.cell();
		const l = c.length;

		const color = "white";

		ctx.fillStyle="white";
		ctx.strokeStyle="black";

		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		//ctx.fill();
		ctx.stroke()
		ctx.closePath();
	})
}

const initialize = (display,config) => {

	
	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	
	go(display,config)
		

};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,config) => {
	
	ctx.clearRect(1, 1, W-2, H-2);
	//draw_path(patches)
	each(agents,a=>{
		ctx.beginPath();
		ctx.arc(X(a.x),Y(a.y),param.agentsize,0,2*Math.PI);
		ctx.fillStyle=a.state=="alive" ? C(1) : C(a.time_of_death/param.tick);
		ctx.fill();	
	})
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,config) => {
	
	
}


export {initialize,go,update}
