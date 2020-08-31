import Vuex from 'vuex';

const createStore = ()=>{
	return new Vuex.Store({
		state: {
   			user: {
     			level: 1,
       			experiencePoint: 0,
       			job: 'みならい',
   	    		gold: 9000,
        		equipment: {wepon: 'どうのつるぎ', armor: 'たびびとのふく', accesories: 'ぎんのロザリオ'},
    		},
    		shop: {
    			salesTalk: '＊「いいもの揃えてるぜ」',
   				wepons: [
    				{name:'ひのきのぼう', gold:100, atk:5},
        			{name:'どうのつるぎ', gold:500, atk:15},
    			],
   				armors: [
    				{name:'かわのたて', gold:150, def:3},
    				{name:'ぬののふく', gold:50, def:5},
    			],
    			accessories: [
    			    {name:'ほしふるうでわ', gold:5000000, spd:255}
   				],
    		},
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
			pay: (state, item)=>{
				if(state.user.gold >= item.gold){
					state.user.gold -= item.gold;
					state.salesTalk = '毎度あり！';
				}else{
					state.salesTalk = '金がないならいい診断を紹介するぜ？';//なぜか入らないので修正!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
				};
			},
		},
		strict: process.env.NODE_ENV !== 'production' //外部でミューテーションハイドラが変更されたらエラーを投げる（厳格モード）
	})
}
//mutaitionsは別ファイルに分けないほうがいい https://qiita.com/TsukasaGR/items/e8a47889f65c53751309
export default createStore