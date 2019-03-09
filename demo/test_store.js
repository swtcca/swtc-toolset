const Store = require('../index').Store;

// Set actions, mutations and initial state
const actions = {
    saySomething(context, payload) {
        context.commit('setMessage', payload);
    }
};

const mutations = {
    setMessage(state, payload) {
        state.message = payload;

        return state;
    }
};

const state = {
   message: 'Hello, world'
};

const getters = {}
// Create our store instance
const storeInstance = new Store({
    actions,
    mutations,
	getters,
    state
});

setInterval( () => {
		storeInstance.dispatch('saySomething', Math.floor(Math.random() * 100))
		console.log(storeInstance.state.message)
	}, 3000);
