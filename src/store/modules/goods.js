import {SETGOODS,ADDGOODS,SETCART,CARTNUM,REMOVEGOODS,SETREMOVEGOODS} from './action-type.js';
import store from 'store';
import axios from 'axios';
import _ from 'loadsh';

const state = {
    
}
const mutations = {
    [SETGOODS](state, data) {
        // var result=store.get('goods')||[];
        // state.all=result;
        // console.log( state.all);
        // for(let i=0;i<data.length;i++){
        //     if(result.goodsId.indexOf(data[i].goodsId)!=-1){
        //         console.log(0)
                // state.all.push(data);
                // store.set('goods',state.all);
        //     }
        // }
        // console.log(state.all);
    },
    [SETCART](state,data){},
    [SETREMOVEGOODS](state,data){}
}
const actions = {
    [ADDGOODS]({commit},id){
        axios.post(
            '/api/cart/add',
            `goodsId=${id}&buyNum=1&reckon=false&cartType=5&memberId=1000011785&memberAccount=1000011785&memberName=EGU1000011785`,
        ).then((result) => {
          commit(SETGOODS,result)
        })
    },
    
    
    [CARTNUM]({commit}){
        axios.post(
            '/api/cart/cartNum',
            `type=5&memberId=1000011785&memberAccount=1000011785&memberName=EGU1000011785`,
        ).then((result) => {
          commit(SETCART,result)
        })
    },
    [REMOVEGOODS]({commit},id){
        axios.post(
            '/api/cart/remove',
            `id=${id}&memberId=1000011785&memberAccount=1000011785&memberName=EGU1000011785`,
        ).then((result) => {
            
          commit(SETREMOVEGOODS,result)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}