<template>
<q-page class="bg-grey-4">

  <div class="bg-teal-7" style="min-height:350px">

    <div class="row justify-between bg-teal-7 q-px-md q-py-lg text-white">

      <div class="col-6 text-h5 text-weight-bold q-mb-md">
        Profile
      </div>
      <div class="col-6 text-right">
        <q-btn flat icon="favorite" to="/wishlist" size="md" />
        <q-btn flat icon="shopping_cart" to="/myCart" size="md" />
      </div>
  
    </div>

  </div>


  <div style="margin-top:-260px;" class="q-ma-lg">

    <div class="row justify-start" style=" height:100px;">
      <div class="col-3">
        <q-icon :name=logo color="white q-px-md" size="md"
        style="background:rgba(0,0,0,0.1); border-radius:45px; padding:12px 20px 25px 20px; border:1px solid white"/>
      </div>
      <div class="col-8 text-white text-h7">
        <span class="text-h6">{{name}}</span><br> {{ number }} <br> {{ email }}@gmail.com
      </div>


    </div>

    <div class="bg-white" style="border-radius:10px" >
      <div class="q-px-md text-h7 q-py-md text-weight-rtegular" style="list-style:none;">
        <p class="q-pt-sm">Edit Profile</p> <q-separator/>
        <p class="q-pt-md">Language & Currency</p> <q-separator />
        <p class="q-pt-md">Feedback</p> <q-separator />
        <p class="q-pt-md">Refer a Friend</p> <q-separator />
        <p class="q-pt-md">Terms & Conditions</p> <q-separator />
        <p class="q-pt-md">Help & Support</p> <q-separator /><br>
        <q-btn flat rounded class="fit text-p text-weight-regular bg-black text-white text-capitalize" label="Logout" @click="logout" 
          />
      </div>
    </div>

  </div>


  <q-footer>
    <div class="row justify-between q-py-sm bg-white text-teal">
      <q-btn icon="home" flat class="col-2" to="homeDashboard" size="lg" />
      <q-btn icon="search" flat class="col-2" to="browse" size="lg" />
      <q-btn icon="store" flat class="col-2" to="myStore" size="lg" />
      <q-btn icon="history" flat class="col-2" to="orderHistory" size="lg" />
      <q-btn icon="person" flat class="col-2" to="profile" size="lg" />
    </div>
  </q-footer>


</q-page>
</template>

<script>

import users from './../model/users.js'

export default{
  name:'profile',
  data(){
    return{
      logo:""
    }

  },

  computed: {
    name(){
      let user = users.find((user) => {
                return (user.login === true)
            })
            this.logo = user.name.charAt(0).toUpperCase()
          return user.name
    },
    number(){
      let user = users.find((user) => {
                return (user.login === true)
            })
          return user.mob
    },
    email(){
      let user = users.find((user) => {
                return (user.login === true)
            })
          return user.email
    }
  },

  methods:{
    logout(){
      let user = users.find((user) => {
                return (user.login === true)
            })
          user.login = false
          // console.log(user);
          this.$router.push('/logIn')
    }
  }
}


</script>