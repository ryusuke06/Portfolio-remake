import Vuex from 'vuex';

const createStore = ()=>{
	return new Vuex.Store({
		state: {
   			user: {
     			status: {level: 1, experiencePoint: 0, job: 'みならい', gold: 3000, atk: 5, def: 3},
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
    		test: {
    			question: '＊「じゃあ聞くぜ」',
    			options: [
    				{id: 1, option: 'test1'},
    				{id: 2, option: 'test2'},
    			],
    			optionPattern: '',
    			results: [
    				{id: 1, patterns: ['11','12'], result: '成功？'},
    				{id: 2, patterns: ['2'], result: '成功！'},
    				/*選択肢の順番とパターンの照合、
    				対象の診断のデータからoptionのデータをミューテーションで更新＋選択したIDを文字列にして保存
    				条件分岐文でoptionがこれ以上ないことが確認されたら
    				アクションで保存している文字列IDとpatternsを照合、結果表示＋axiosで選択結果や経験値などを送信
    				ついでに例外処理でエラーレスポンスも受け取れるように
    				最後にstateのリセット
    				*/
    			],
    			setResult: '',
    		},
		},
		mutations: {
	    	levelUp: (state)=>{
				if (state.status.experiencePoint % 5 === 0){
					state.status.level++;
	    		}else{
	    		};
			},
			experience: (state)=>{
				state.status.experiencePoint++;
			},
			pay: (state, buyItem)=>{
				if(state.user.status.gold >= buyItem.gold){
					state.user.status.gold -= buyItem.gold;
					state.shop.salesTalk = '毎度あり！';
				}else{
					state.shop.salesTalk = '金がないならいい診断を紹介するぜ？';
				};
			},
			nextOptions: (state)=>{
				state.test.options = [{id: 1, option: 'test3'}, {id: 2, option: 'test4'}];
			},
			searchResult: (state)=>{
				var doneTest = false;
				for (var resultIndex in state.test.results){
					for (var patternIndex in state.test.results[resultIndex].patterns){
						if (optionPattern === state.test.results[resultIndex].patterns[patternIndex]){
							doneTest = true;
							state.test.setResult = state.test.results[resultIndex].result;
							break;
						}
					}
					if (doneTest === true){
						break;
					}
				}
			},
		},
		actions: {
			doResult: (state, optionId)=>{
				state.test.optionPattern += optionsId;
				$store.commit('searchResult')
				if (doneTest === false){
					$store.commit('nextOptions')
				}
			},
		},
		strict: process.env.NODE_ENV !== 'production' //外部でミューテーションハイドラが変更されたらエラーを投げる（厳格モード）
	})
}
//mutaitionsは別ファイルに分けないほうがいい https://qiita.com/TsukasaGR/items/e8a47889f65c53751309
export default createStore