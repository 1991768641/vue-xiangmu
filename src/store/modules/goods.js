import {SETGOODS,LOADGOODS} from './action-type.js'

const state = {
    all: []
}
const mutations = {
    [SETGOODS](state, data) {
        state.all = data
    }
}
const actions = {
    [LOADGOODS]({commit}){
        commit('loadgoods',[])
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}