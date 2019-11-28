import {SETLIST,ADDLIST} from './action-type.js';
import store from 'store';
import axios from 'axios';
const state={
    all: []
}
const mutations={
    [SETLIST](state, data) {
        state.all=data;
        store.set('goods',state.all);
    }
}
const actions={
    [ADDLIST]({commit}){
        axios.post(
            '/api/cart/list',
            `type=5&pageNo=1&memberId=1000011785&memberAccount=1000011785&memberName=EGU1000011785`,
        ).then((result) => {
            
          commit(SETLIST,result.data.list)
        })
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}