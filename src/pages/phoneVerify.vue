<template>
  <q-page class="bg-teal text-white">

    <div class="q-pa-md">

      <div style="font-size:25px;" class="q-mt-md">
        <q-btn flat icon="arrow_back" size="lg"/>
      </div>

      <div class="q-my-xl text-h5 text-center">
        <p>Verify your phone number</p>
      </div>

      <div class="text-h6 text-weight-light text-center">
        We will send you a SMS with a code on the entered number
      </div>

      <div class=" q-px-lg q-py-md">
        <q-form @submit="onSubmit">

          <q-input 
          class="q-my-md"
          label-color="white"
          v-model="username"
          rounded outlined
          label="9876543210" />

          <div class="q-mt-xl text-center text-h6 text-weight-light">
            Or login with Social network
          </div>

          <q-btn 
          flat 
          rounded 
          class="q-py-xs fit text-h6 text-weight-regular bg-white text-teal text-capitalize q-mt-md"
          to="phoneOtp"
          label="Next" 
          type="submit" />
  
        </q-form>
      </div>

    </div>
  </q-page>
</template>

<script>
export default{
  name: 'phoneVerify',
  data(){
    return{

    }
  }


}


</script>