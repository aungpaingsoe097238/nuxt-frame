export const state = () => ({
  baseURL: 'https://testing-backend.matesat.org/api/v1/',
  access_token : null,
});

export const getters = {
  getBaseUrl:(state)=>uri=>state.baseURL + uri
}
