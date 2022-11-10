export const state = () => ({
  baseURL: 'https://testing-backend.matesat.org/api/v1/',
  access_token: null,
  user: {},
})

export const getters = {
  getBaseUrl: (state) => (uri) => state.baseURL + uri,
}

export const mutations = {
  addAccessToken(state,token) {
    state.access_token = token;
  },
  addUser(state,user) {
    state.user = user;
  }
}

export const actions = {
  
}
