import Vuex from 'vuex';

const createStore = ()=>{
	return new Vuex.Store({
		state: {
   			user: {
     			level: 1,
       			experiencePoint: 0,
       			job: 'みならい',
   	    		gold: 9000,
        		equipment: {wepon: 'どうのつるぎ', armor: 'たびびとのふく', accesory: 'ぎんのロザリオ'},
        		haveItems: {wepons: [], armors: [], accesories: []},
    		},
    		shop: {
    			salesTalk: '＊「いいもの揃えてるぜ」',
   				wepons: [
    				{id:1, name:'ひのきのぼう', gold:100, atk:5},
        			{id:2, name:'どうのつるぎ', gold:500, atk:15},
    				{id:3, name:'ひのきのぼう1', gold:100, atk:5},
        			{id:4, name:'どうのつるぎ1', gold:500, atk:15},
    				{id:5, name:'ひのきのぼう2', gold:100, atk:5},
        			{id:6, name:'どうのつるぎ2', gold:500, atk:15},
    				{id:7, name:'ひのきのぼう3', gold:100, atk:5},
        			{id:8, name:'どうのつるぎ3', gold:500, atk:15},
    				{id:9, name:'ひのきのぼう4', gold:100, atk:5},
        			{id:10, name:'どうのつるぎ4', gold:500, atk:15},
    				{id:11, name:'ひのきのぼう5', gold:100, atk:5},
        			{id:12, name:'どうのつるぎ5', gold:500, atk:15},
    				{id:13, name:'ひのきのぼう6', gold:100, atk:5},
        			{id:14, name:'どうのつるぎ6', gold:500, atk:15},
    				{id:15, name:'ひのきのぼう7', gold:100, atk:5},
        			{id:16, name:'どうのつるぎ7', gold:500, atk:15},
    			],
   				armors: [
    				{id:1, name:'ぬののふく', gold:50, def:5},
    				{id:2, name:'かわのたて', gold:150, def:3},
    			],
    			accesories: [
    			    {id:1, name:'ほしふるうでわ', gold:5000000, spd:255}
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