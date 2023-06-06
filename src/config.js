// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.666,
		slider_girth: 11,
		slider_knob: 13,
		slider_anchor: {x:1,y:5},
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:10,y:2},
		resetbutton_anchor:{x:8,y:2}
	},
	simulation: {
		delay:0
	}
}