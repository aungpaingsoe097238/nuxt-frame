export const state = () => ({
  access_token : null,
});

export const getters = {
  getUrl(){
    console.log( $axios.defaults.baseURL );
  }
}
