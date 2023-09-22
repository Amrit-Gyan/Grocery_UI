<template>
  <q-layout class="bg-teal-7">

    <div class="text-center" style="padding-top:200px">
      <q-icon name="local_mall" class="q-mb-md" color="white" size="150px"/>
    </div>
    <div class="text-center text-white text-h3">
      Grocery
    </div>

    <div class="text-center">
      <q-spinner-facebook size="sm" color="grey-3" />
    </div>
    

  </q-layout>
</template>


<script>

export default {

  name: 'IndexPage',
  data() {
    return{
      
    },
      setTimeout(() => {
        this.$router.push('onboarding')
      }, 3000);
    
  }
}

</script>