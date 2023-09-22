<template>
  <q-page class="bg-teal text-white">

    <div class="q-pa-md">

      <div style="font-size:25px;" class="q-mt-md">
        <q-btn flat icon="arrow_back" size="lg" @click="$router.go(-1)"/>
      </div>

      <div class="q-my-lg text-h4 text-center">
        <p>Welcome to Grocery</p>
      </div>

      <div class="text-h6 text-weight-light text-center">
        Signup to your account
      </div>

      <div class=" q-px-lg">
        <q-form>

          <q-input 
          label-color="white"
          type="text"
          class="q-my-md"
          color="white"
          input-class="text-white q-pl-sm"
          v-model="user.name"
          rounded outlined
          label="First Name"
          lazy-rules
          :rules="[
            val => !!val || '* Required',
            val => val.length >= 2  || 'Please input atleast 2 character',
            val => val.match(this.alpha) || 'Please use only alphabets', 
          ]"
          
          />
          
          <q-input 
          label-color="white"
          class="q-my-md" 
          color="white"
          rounded outlined
          input-class="text-white q-pl-sm"
          v-model="user.lastName" 
          type="text"
          label="Last Name" 
          lazy-rules
          :rules="[
            val => !!val || '* Required',
            val => val.length >= 2  || 'Please input atleast 2 character',
            val => val.match(this.alpha) || 'Please use only alphabets' , 
          ]"/>
          
          <q-input 
          label-color="white"
          type="text"
          class="q-my-md" 
          rounded outlined
          color="white"
          input-class="text-white q-pl-sm"
          v-model="user.email" 
          suffix="@gmail.com"
          label="Email ID" 
          lazy-rules
          :rules="[
            val => !!val || '* Required',
          ]"/>
          
          <q-input 
          label-color="white"
          type="number"
          class="q-my-md" 
          color="white"
          rounded outlined
          input-class="text-white q-pl-sm"
          v-model="user.mob" 
          label="Mobile Number" 
          lazy-rules
          :rules="[
            val => !!val || '* Required',
            val => val.length == 10  || 'Must be 10 digit number',
          ]"/>

          <q-input 
          label-color="white"
          :type="isPwd ? 'password' : 'text'" 
          class="q-my-md" 
          color="white"
          rounded outlined
          input-class="text-white q-pl-sm"
          v-model="user.password" 
          label="Password" 
          lazy-rules
          :rules="[
            val => !!val || '* Required',
            val => val.length >= 8  || 'Atleast 8 character required',
            val => !!val.match(this.pass) || 'Password should have atleast - a number, a symbol(!@#$&), a Uppercase alphabet, a Lowercase alphabet',
          ]"> 
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
          
          <q-input 
          label-color="white"
          :type="isPwd2 ? 'password' : 'text'"
          class="q-my-md" 
          color="white"
          rounded outlined
          input-class="text-white q-pl-sm"
          v-model="user.rePassword" 
          label="Re-enter Password" 
          lazy-rules
          :rules="[
            val => !!val || '* Required',
            val => val === this.user.password || 'Password Does not match',
          ]">
          <template v-slot:append>
            <q-icon
              :name="isPwd2 ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd2 = !isPwd2"
            />
          </template>
        </q-input>
          
          <q-btn 
          flat 
          rounded 
          class="q-py-xs fit text-h6 text-weight-regular bg-white q-mt-sm text-teal text-capitalize" label="Create" @click="signUp" 
          />

        </q-form>

      </div>

        <div class="text-center text-h5 text-weight-light q-mt-xl">
          <p>Have an account? 
            <span class="text-weight-regular" @click="$router.push('/logIn')">Sign in</span></p>
        </div>


    </div>
  </q-page>

</template>

<script>
import users from './../model/users.js'

export default{
  
  name:'signUp',
  data(){
    return{
      users:users,
      alpha : /^[A-Za-z]+$/,
      pass: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,
      isPwd:true,
      isPwd2:true,
      user:{
        name:"",lastName:"",email:"",password:"",rePassword:"",mob:""
      }

    }
  },

  methods:{
    signUp(){
      if((this.user.name.length >= 2) && this.user.name.match(/^[A-Za-z]+$/) && this.user.lastName.length >= 2 && this.user.lastName.match(/^[A-Za-z]+$/) && 
      this.user.email.length >= 2 && this.user.password.length >=8 && this.user.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/) && 
      this.user.rePassword == this.user.password && this.user.mob.length == 10){
        this.users.push(JSON.parse(JSON.stringify(this.user)))
        console.log("Done");
        this.$router.push('logIn')
      }
      else{
        // console.log("why y yyyyyy");
      }
      

    }
  }
}

</script>