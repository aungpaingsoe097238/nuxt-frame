<template>
  <b-container>
    <b-row class="justify-content-center align-items-center vh-100">
      <b-col lg="6">
        <b-card title="Login Form">
          <b-form @submit.prevent="submit" id="loginForm" ref="loginForm">

            <Input
              name="username"
              label="Username:"
              placeholder="Enter Username"
              :errors="errors"
            />

            <b-form-group label="Password:">
              <b-form-input
                :type="isShow ? 'text' : 'password'"
                name="password"
                :class="{ 'is-invalid': errors.password }"
                placeholder="Enter Password"
              />
              <span class="invalid-feedback" v-if="errors.password">
                {{ errors.password[0] }}
              </span>
            </b-form-group>

            <b-form-checkbox v-model="isShow">
              {{ isShow ? 'hide' : 'show' }}
            </b-form-checkbox>

            <b-button
              variant="primary"
              type="submit"
              class="float-right"
              form="loginForm"
              :disabled="isBusy"
              >Submit <Spinner small v-if="isBusy" />
            </b-button>

          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      errors: {},
      isBusy: false,
      isShow: false,
    }
  },
  computed: {
    ...mapGetters(['getBaseUrl'])
  },
  methods: {
    async submit() {
      this.isBusy = true
      let formData = new FormData(this.$refs.loginForm)
      await this.$axios
        .$post(
          this.getBaseUrl('auth/login'),
          formData
        )
        .then((response) => {
          localStorage.setItem('access_token',response.access_token);
          localStorage.setItem('user',JSON.stringify(response.user));
          this.$store.commit('addAccessToken',response.access_token);
          this.$store.commit('addUser',response.user);
          this.$router.push('/dashboard');
        })
        .catch((error) => {
          this.errors = error.response.data.errors
        })
        .finally(() => {
          this.isBusy = false;
          this.$refs.loginForm.reset();
        })
    },
  },
}
</script>

