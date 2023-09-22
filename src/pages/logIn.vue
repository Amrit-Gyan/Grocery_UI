<template>
  <q-page class="bg-teal text-white q-pt-xl">

    <div class="q-pa-md">

      <div class="q-my-xl text-h4 text-center">
        <p>Welcome to Grocery</p>
      </div>

      <div class="text-h6 text-weight-light text-center q-my-xl">
        Login to your account
      </div>

      <div class="q-my-xl q-px-lg">
        <q-form>

          <q-input input-class="text-white q-pl-sm" 
          class="q-my-md" v-model="username" 
          rounded outlined label-color="white"
          color="white" label="Email/Mobile Number"/>

          <q-input input-class="text-white 
          text-h7 q-pl-sm" rounded outlined 
          label-color="white" color="white" 
          :type="isPwd ? 'password' : 'text'" 
          v-model="password" label="Password">

            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
            
          </q-input>
          <q-btn flat rounded class="q-py-xs
           fit text-h6 text-weight-regular 
           bg-white q-mt-xl text-teal text-capitalize"
            @click="logIn" label="Login" />

        </q-form>
      </div>

      <div class="text-center text-h6 text-weight-light">
        <p>Forget your password?</p>
      </div>

      <div class="text-center text-h5 text-weight-light q-mt-xl">
        <p>Don't have an account?
          <span class="text-weight-bold" @click="$router.push('/signUp')">Sign up</span>
        </p>
      </div>

      <div v-if="message">
        <q-card rounded class="bg-grey-10 text-center text-h6 text-teal-5 bg-teal">
          <p>{{ showMessage }}</p>
        </q-card>
      </div>


    </div>

  </q-page>
</template>

<script>
import users from './../model/users.js'

export default {
  name: 'logIn',
  data() {
    return {
      username: "",
      password: "",
      message : false,
      showMessage: "",
      isPwd : true,
    }

  },
  methods: {
    logIn() {

      if (this.username.length == 0 || this.password.length == 0) {
        // console.log("enter Cred");
        setTimeout(() => {
          this.message = true
          this.username = ""
          this.password = ""
          this.showMessage ="Enter both - username and password"
        }, 0);
        setTimeout(() => {
          this.message = false
        }, 3000);
        return
      }

      let user = users.find((user) => {
        return (user.email === this.username || user.mob === this.username)
      })

      if (!user) {
        // console.log('Wrong Username' )
        setTimeout(() => {
          this.message = true
          this.username = ""
          this.password = ""
          this.showMessage = "Wrong Credentials"
        }, 0);
        setTimeout(() => {
          this.message = false
        }, 3000);
      }

      if (this.password == user.password) {
        user.login = true
        // console.log("Called");
        // console.log(user);
        this.$router.push('/homeDashboard')
      }

      else {
        // console.log('Wrong Password')
        setTimeout(() => {
          this.message = true
          this.username = ""
          this.password = ""
          this.showMessage = "Wrong Credentials"
        }, 0);
        setTimeout(() => {
          this.message = false
        }, 3000);
      }
    }
  }
}


</script>