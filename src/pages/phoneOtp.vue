<template>
  <q-page class="bg-teal text-white">

    <div class="q-pa-md">

      <div style="font-size:25px;" class="q-mt-md">
        <q-btn flat icon="arrow_back" size="lg"/>
      </div>

      <div class="q-py-xl"></div>

      <div class="text-h5 text-center">
        <p>Phone Verification</p>
      </div>

      <div class="text-h6 text-weight-light text-center">
        Enter your OTP code here
      </div>

      <div class=" q-px-lg q-py-xl">
        <q-form @submit="onSubmit">

          <q-input 
          class="q-my-md"
          v-model="username"
          rounded outlined
          label-color="white"
          label="12345" />

          <div class="q-my-xl text-center text-h6 text-weight-light">
            Didn't you recieved any code?<br>
            Resent new code
          </div>

          <q-btn 
          flat 
          rounded 
          class="q-py-xs fit text-h6 text-weight-regular bg-white text-teal text-capitalize q-mt-md" 
          to='/logIn'
          label="Verify" 
          type="submit" />
  
        </q-form>
      </div>

    </div>
  </q-page>


</template>

<script>
export default{
  name:'phoneOtp',
  data(){
    return{
      
    }
  }
}



</script>