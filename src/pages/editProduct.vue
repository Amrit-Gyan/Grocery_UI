<template>
    <q-page>
  
      <div class="row bg-teal text-white">
  
        <div class="col-2 q-px-md q-py-lg text-h6 ">
          <q-btn size="md" flat icon="arrow_back" to="/wishlist" class="" />
        </div>
        <div class="col-8 q-py-lg text-h5 text-center">
          My Store
        </div>
      </div>
  
      <div class="">
        <div style="height:200px">
  
        </div>
      </div>
  
      <div class="row q-ma-md text-h7 justify-between">
        <q-input class="col-10" v-model="text" label="Product Name" stack-label :dense="dense" />
        <q-input v-model="text" class="col-10" label="Category Name" stack-label :dense="dense" />
        <q-input v-model="text" class="col-5" label="Price" stack-label :dense="dense" ></q-input>
        <q-input v-model="text" class="col-5" label="Offer Price" stack-label :dense="dense" ></q-input>
        <q-input v-model="text" class="col-10" label="Location Details" stack-label :dense="dense" />
        <q-input v-model="text" class="col-10" label="Product Description" autogrow stack-label :dense="dense" />
        <q-input v-model="text" class="col-10" label="Price Type" stack-label :dense="dense" />
        <q-input v-model="text" class="col-10" label="Additional Details" stack-label :dense="dense" />
      </div>
  
  
      <q-footer style="background:transparent;">
        <div class="text-center text-white q-mx-xl q-my-md">
          <q-btn rounded class="bg-teal text-h6 fit text-capitalize" flat label="Edit Product" to="myStoreProduct" />
        </div>
      </q-footer>
  
    </q-page>
  
  
  </template>
  
  <script>
  export default {
    name: 'editProduct',
    data() {
      return {
  
      }
  
    }
  }
  
  
  </script>