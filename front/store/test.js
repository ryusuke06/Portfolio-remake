import Vuex from 'vuex'
//Vuexオブジェクトをインポート

const createStore = () => {
	return new Vuex.Store({
		/*createStoreという関数を定義。Vuex.Storeオブジェクトを作成
		  Vuex.Storeはストアと呼ばれるVuexの情報をまとめて保存するオブジェクト*/
		state: function(){
			/*stateという値（ステート）はコンポーネントでいうdataのような物。
			  例えば {{$store.state.message}} などでページに値を呼び出せる。*/
			return {
				message: 'This is store message',
				counter: 0,
				/*ページから値を操作できる。例えば
				methods{
	              doAction: function(){
	                this.$store.state.counter++;
	              }
				}で数字をカウントするなど*/
			};
		},
	})
}

export default createStore