import Vuex from 'vuex';
import state from './state'
import mutation from './mutation'

const Store = ()=>{
	return new Vuex.Store({
		state,
		mutation,
	})
}