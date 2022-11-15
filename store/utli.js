export const state = () => ({
  sideBarstatus : true ,
})

export const getters = {
  getSideBarStatus:(state) => state.sideBarstatus
}

export const mutations = {
  changeSideBarStatus(state){
    state.sideBarstatus = !state.sideBarstatus
  }
}

export const actions = {
}
