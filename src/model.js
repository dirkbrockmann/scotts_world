// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,range,map,mean,filter,shuffle,maxBy,sum,sumBy,minBy} from "lodash-es"
import * as lattices from "lattices"
import {rad2deg,deg2rad,dist} from "./utils"

const lattice = lattices.hex(param.N).scale(2*param.N+1).boundary("dirichlet")

var agents = [];
var patches = lattice.nodes;


// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

function distribute_seed(){
	const center = filter(patches,p=>{return dist({x:0,y:0},p)<param.center_size});

	each(center,p=>{
		p.state="liquid";
		let i = 0;
		while(i++<param.initial_agents) {
			let loc = p.random_interior_point()
			agents.push({
					state:"alive", 
					E:param.agent_initial_energy, // no idea??
					home:p.index, 
					x:loc.x,
					y:loc.y,
					theta:2*Math.PI*Math.random() // heading??
			})
		}
	})	
}

const initialize = () => {
	
	// set/reset timer
	param.timer={}; param.tick=0;
	agents=[0]
	each(patches,(p,i)=>{
		p.index=i;
		p.n_collisions=0; // count collisions
		p.C=param.initial_nutrient_concentration.widget.value();
		p.state="agar" // nutrient concentration ???
	})

	distribute_seed()
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	// nutrient diffusion
	let done = false
	each(patches,p=>{p.dC=0})
	
	each(patches,p=>{
		let dc = param.nutrient_diffusion.widget.value()*p.C; 
	 	p.dC -= dc;
	 	let M = p.neighbors.length;
	 	each(p.neighbors,n=>{
	 		n.dC += dc/M;
	 	})
	 })
	 
	each(patches,p=>{p.C+=p.dC})
	
	let alive = shuffle(filter(agents,a=>{return a.state=="alive"}))

	
	each(alive,a=>{
		let eaten = patches[a.home].C < param.feeding_rate ? 0 : param.feeding_rate;
		patches[a.home].C = patches[a.home].C - eaten;
		a.E = a.E + param.metabolic_efficiency.widget.value()*eaten - param.energy_loss;

	 	if(a.E<0){
		 	a.state="dead";
		 	a.time_of_death = param.tick;
	 	}

	 // agent gives birth

	 	if(a.E>param.birth_energy){
		 // reduces energy by half
			a.E=a.E/2;
		 	agents.push({
			 	state:"alive",
			 	E:a.E, // this shoud be half
			 	home:a.home,
			 	x:a.x,
			 	y:a.y,
			 	theta:2*Math.PI*Math.random()
		 	})
		}

		// picks a randon direction
		
		a.theta+=2*Math.PI*param.wiggle*(Math.random()-0.5);
		let x_next = a.x+param.motility.widget.value()*Math.cos(a.theta);
		let y_next = a.y+param.motility.widget.value()*Math.sin(a.theta);
		const home = patches[a.home]; // this is the old home

		const d1 = (x_next-home.x)*(x_next-home.x)+(y_next-home.y)*(y_next-home.y);
		
		each(home.neighbors,n=>{
			var d2 = (x_next-n.x)*(x_next-n.x)
					+(y_next-n.y)*(y_next-n.y)
			if(d2<d1){
				if (n.state=="agar"){
					x_next = a.x;
					y_next = a.y;
					n.n_collisions+=1;
					if(n.n_collisions>param.resistance_of_medium.widget.value()){
						n.state="liquid"
					}
				} else {
					a.home=n.index;
					if (n.is_boundary) {
						done = true
					}
				}
			} 
		})
		a.x=x_next;
		a.y=y_next;

	})
	
	if (filter(agents,a=>{return a.state=="alive"}).length==0) {done = true}

 	return done;
		
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,patches,initialize,go,update}
