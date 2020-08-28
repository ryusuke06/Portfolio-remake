import Vuex from 'vuex';

const createStore = ()=>{
	return new Vuex.Store({
		state(){
			return{
   				user: {
     				level: 1,
        			experiencePoint: 0,
    	    		gold: 0,
    	    		equipment: {wepon: '', armor: '', accessories: ''}
    			},
    			shop: {
    				salesTalk: '',
    				wepons: [
    					{name:'ひのきのぼう', gold:'100', atk:5},
        				{name:'どうのつるぎ', gold:'500', atk:15},
    				],
    				armors: [
    					{name:'かわのたて', gold:'150', def:3},
    					{name:'ぬののふく', gold:'50', def:5},
    				],
    				accessories: [
    				    {name:'ほしふるうでわ', gold:'5000000', spd:255}
    				],
    			},
    		};
		},
		mutations: {
	    	levelUp: (state)=>{
				if (state.experiencePoint % 5 === 0){
					state.level++;
	    		}else{
	    		};
			},
			experience: (state)=>{
				state.experiencePoint++;
			},
			pay: (state, gold)=>{
				if(state.user.gold >= gold){
					state.user.gold -= gold;
					state.salesTalk = '毎度あり！';
				}else{
					state.salesTalk = '金がないならいい診断を紹介するぜ？';//なぜか入らないので修正
				};
			}
		}
	})
}
//mutaitionsは別ファイルに分けないほうがいい https://qiita.com/TsukasaGR/items/e8a47889f65c53751309
export default createStore