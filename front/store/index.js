import Vuex from 'vuex'
//リロードしても値をローカルストレージに保存
import createPersistedState from 'vuex-persistedstate';

import Loading from '@/store/loading'

//保存ローカルに保存したければこっちに
const createStore = () => {
	return new Vuex.Store({
		plugins: [
			createPersistedState(),
		],
	})
}

export default createStore