const mutation = {
	levelUp: (state)=>{
		if (state.experiencePoint % 5 === 0){
			state.level++;
	    }else{
	    }
	},
	experience: (state)=>{
		state.experiencePoint++;
	},
}