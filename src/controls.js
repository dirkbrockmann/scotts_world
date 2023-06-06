// this sets up the controls in the control panel
// it adds the widgets to the container and generates attaches the widget to the 
// variables and parameters defined in parameters.js

import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"

import cfg from "./config.js"
import parameters from "./parameters.js"

import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"


// defined variables for variables, booleans and choices, extracting the information from parameters.js

const variables = get_variables(parameters);

// adding ids and labels to the variables based on names for the variables, see utils.js for the function add_id_label

add_id_label(variables)

// making arrays for the three types of parameters

const va = toArray(variables);

// making the slider widgets objects, based on the variables

const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.girth(cfg.widgets.slider_girth)	
					.knob(cfg.widgets.slider_knob)
		);

// making the toggle widgets objects, based on the switches
		

// you can remove some of these, if the explorable doesn't have a subset of parameters,
// e.g. if the explorable doesn't need toggles, you can remove all the toggle stuff


// this is handy, because the actual widgets are connected to the associated parameters
// this is important, if one wants to access the widgets based on parameters.
		
add_widget(va,sliders);


// This is generic for many explorables, the action buttons, play/pause, back and rewind
// there are some explorables that have different buttons, so one needs to code this here.

const go = widgets.button().actions(["play","pause"]).id("play")
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])

// all the buttons in an array
		
const buttons = [go,setup,reset];

// here's the important function accessible to the outside, there's flexibility on how
// to code this. bottomline is that all the widgets get attached to the controls panel,
// that is provided as an argument. the grid object is also passed, which makes it easier
// to place the widgets on the grid. The positional stuff here needs to be adapted
// to the needs of the explorable

export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));
		
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	
	controls.selectAll(".slider").data(sliders).enter().append(widgets.widget);
	controls.selectAll(".button").data(buttons).enter().append(widgets.widget);
	
}

// here are all the exported objects, all the parameters, their associated widgets and the action buttons

export {sliders,go,setup,reset,variables}


