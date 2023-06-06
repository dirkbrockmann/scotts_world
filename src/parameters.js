// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:40, 
		agentsize: 5.0,
		wiggle: 0.5,
		feeding_rate:0.05,
		birth_energy: 1.0,
		energy_loss: 0.01,
		initial_agents: 30,
		center_size:3,
		agent_initial_energy : 0.9,
			
		initial_nutrient_concentration: {
			range:[0,0.4],
			default:0.12
		},
		nutrient_diffusion:{
			range: [0,0.25],
			default: 0.05
		},
		resistance_of_medium: {
			range:[0,30],
			default:10
		},
		metabolic_efficiency:{
			range : [10,50],
			default : 20
		},
		motility:{
			range : [0,0.1],
			default : 0.05
		}
}

