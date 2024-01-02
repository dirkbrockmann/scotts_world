import * as d3 from "d3"
import param from "./parameters.js"
import {agents,patches} from "./model.js"
import {each} from "lodash-es"

const L = param.N;

const X = d3.scaleLinear().domain([-L,L]);
const Y = d3.scaleLinear().domain([-L,L]);
var C = d3.scaleLinear().domain([0,1]).range(["rgb(0,0,100,0.8)","rgb(180,0,0,0.8)"]);
var ctx,dL,W,H;


const initialize = (display,config) => {

	
	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	
	
	go(display,config)
		

};


const go = (display,config) => {
	
	ctx.clearRect(0,0 , W, H);
	each(agents,a=>{
		ctx.beginPath();
		ctx.arc(X(a.x),Y(a.y),param.agentsize,0,2*Math.PI);
		ctx.fillStyle=a.state=="alive" ? C(1) : C(a.time_of_death/param.tick);
		ctx.fill();	
	})
	
}

const update = (display,config) => { }


export {initialize,go,update}
