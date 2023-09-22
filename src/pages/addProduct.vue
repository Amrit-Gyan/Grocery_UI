<template>
    <q-page>
  
      <div v-if="getBack">

        <div class="row bg-teal text-white">
          
          <div class="col-2 q-px-md q-py-lg text-h6 ">
            <q-btn size="md" flat icon="arrow_back" @click="$router.go(-1)" class="" />
          </div>
          <div class="col-8 q-py-lg text-h5 text-center">
            Add Product
          </div>
        </div>
        
        <div class="">
          <div class="bg-white q-my-xs q-pa-lg ">
            <q-card flat style="border-radius:15px; border:2px dashed lightgrey" class="bg-grey-3 text-center q-py-xl">
              <div class="text-grey-7 q-py-md">
                <q-btn unelevated class="" />
                <input type="file" @change="uploadImage" accept="image/*" />
                <img :src="imageUrl" v-if="imageUrl" />
              </div>
            </q-card>
          </div>
        </div>
        
        <div class="row q-ma-md text-h7 justify-between">
          <q-input class="col-10" v-model="text" label="Product Name" stack-label :dense="dense" />
          <q-input v-model="text" class="col-10" label="Category Name" stack-label :dense="dense" />
          <q-input v-model="text" class="col-5" label="Price" stack-label :dense="dense" ></q-input>
          <!-- <q-input v-model="text" class="col-5" label="Offer Price" stack-label :dense="dense" ></q-input> -->
          <!-- <q-input v-model="text" class="col-10" label="Location Details" stack-label :dense="dense" /> -->
          <q-input v-model="text" class="col-10" label="Product Description" autogrow stack-label :dense="dense" />
          <!-- <q-input v-model="text" class="col-10" label="Price Type" stack-label :dense="dense" /> -->
          <q-input v-model="text" class="col-10" label="Additional Details" stack-label :dense="dense" />
        </div>
        
      </div>

      <div v-else>
        <q-img class="q-mt-xl" src="/images/pageUC1.jpg"/>
        <q-card class="q-mt-md text-h5 text-center">
          Forwarding to Home Page
        </q-card>
      </div>
  
  
      <q-footer style="background:transparent;">
        <div v-if="getBack" class="text-center text-white q-mx-xl q-my-md">
          <q-btn rounded class="bg-teal text-h6 fit text-capitalize" flat label="Add Product" @click="addProduct"/>
        </div>
      </q-footer>
  
    </q-page>
  
  
  </template>
  
  <script>
  export default {
    name: 'addProduct',
    data() {
      return {
        getBack: true
      }
  
    },
    methods:{
      // addProduct(){
      //   setTimeout(() => {
      //   this.getBack = false
      // }, 100);
      // setTimeout(() => {
      //   this.getBack = true
      //   this.$router.push('/homeDashboard')
      // }, 3000);
      // }
    }
  }
  
  
  </script>