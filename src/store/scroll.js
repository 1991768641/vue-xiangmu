const state={
    position:0,
    page:1
}
const mutations={
    setposition(state,action){
        state.position=action.position
    },
    setpage(state,action){
        state.page=action.page
    }

}
const actions={

}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}