<template>
  <q-page class="">

    <div class="row bg-teal text-white">

      <div class="col-2 q-px-md q-py-lg text-h6 ">
        <q-btn size="md" flat icon="arrow_back" @click="$router.go(-1)" class="" />
      </div>
      <div class="col-8 q-py-lg text-h5 text-center">
        My Store
      </div>
    </div>

    <div class="">
      <div class="text-center q-py-xl">
        <q-icon name="home" size="xl" />
        <p class=" text-h7 q-mt-sm">The information is used to set up your shop</p>
      </div>
    </div>

    <div>
      <div class="q-mx-md q-mb-xl">
        <q-input class="text-h7" v-model="myStore.name" label="Store Name" stack-label :dense="dense" />
        <q-input v-model="myStore.storeWebAddress" label="Store Web Address" stack-label :dense="dense" />
        <q-input v-model="myStore.description" label="Store Description" stack-label :dense="dense" />
        <q-input v-model="myStore.storeType" label="Store Type" stack-label :dense="dense" />
        <q-input v-model="myStore.address" label="Address" stack-label :dense="dense" />
        <q-input v-model="myStore.city" label="City" stack-label :dense="dense" />
        <q-input v-model="myStore.street" label="Street" stack-label :dense="dense" />
        <q-input v-model="myStore.pin" label="Pin" type="number" stack-label :dense="dense" />
        <q-input v-model="myStore.storeContact" label="Store Contact" type="number" stack-label :dense="dense" />
        <q-input v-model="myStore.country" label="Country" stack-label :dense="dense" />
        <q-input v-model="myStore.courierName" label="Courier Name" stack-label :dense="dense" />

      </div>
    </div>


    <q-footer style="background:transparent;">
      <div class="text-center text-white q-mx-xl q-my-md">
        <q-btn rounded class="bg-teal text-h6 fit text-capitalize" flat label="Create Store" @click="createStoreBtn" />
      </div>
    </q-footer>



  </q-page>
</template>
    
<script>

import {stores} from './../model/shops.js'

export default {

  name: 'createStore',
  data() {
    return {
      
      stores:stores,
      myStore:
        {
          name: "",
          storeWebAddress: "",
          description: "",
          storeType: "",
          address: "",
          city: "",
          street: "",
          pin: "",
          contact: "",
          country: "",
          courierName: "",

        }
    }

  },
  methods: {
    createStoreBtn() {
      // if ((this.myStore.storeName.length > 2) && (this.myStore.storeWebAddress.length > 2) && (this.myStore.description.length > 10) && (this.myStore.storeType.length > 2 && this.myStore.storeType.match(/^[A-Za-z]+$/)) && (this.myStore.address.length > 5) && (this.myStore.city.length > 2) && (this.myStore.street.length > 2) && (this.myStore.pin.length > 5) && (this.myStore.storeContact.length > 9) && (this.myStore.country.length > 2) && (this.myStore.courierName.length > 2)) {
        if(this.myStore.name.length >= 2){

        let name = this.myStore.name.charAt(0).toUpperCase() + this.myStore.name.slice(1)
        this.myStore.name = name

        this.stores.push(JSON.parse(JSON.stringify(this.myStore)))
        this.myStore.name=null
        // this.$router.push()
        window.history.back()
        console.log("Done");

      }
      else {
        console.log("Enter Input correctly");
      }
    }
  },

}


</script>