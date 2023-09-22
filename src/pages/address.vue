<template>
  <q-page>
    <div class="bg-teal text-white ">
      <div class="row text-h6 q-py-lg">
        <q-btn icon="arrow_back" class="col-2" flat @click="$router.go(-1)"/>
        <span class="col-8 text-center">Add a new address</span>
      </div>
    </div>

    <div class="bg-grey-3">

      <div class="text-center text-h7 q-pa-md q-mb-sm bg-white">
        <a>Use current location</a>
      </div>

      <div class="bg-white q-pa-lg ">
        <q-input label="Name" v-model="user.name" class="q-mb-md" />
        <q-input label="Phone" v-model="user.mobile" class="q-mb-md" />
        <q-input label="Zipcode" v-model="user.pin" class="q-mb-md" />
        <q-input label="State" v-model="user.state" class="q-mb-md" />
        <q-input label="City" v-model="user.city" class="q-mb-md" />
        <q-input label="Street" v-model="user.streets" class="q-mb-md" />
      </div>
    </div>

    <q-footer>
      <div class="bg-white text-center q-py-md q-px-lg">
        <q-btn class="bg-teal fit text-h6 text-capitalize" @click="save" rounded label="Save" />
      </div>
    </q-footer>

  </q-page>
</template>


<script>
import addresses from './../model/address.js'

export default {
  name: 'address',
  data() {
    return {
      addresses:addresses,
      user:{
        name:'',
        mobile:'',
        pin:'',
        state:'',
        city:'',
        streets:'',
      }
    }
  },
  methods:{
    save(){
      if(this.user.name.length > 2){
        let firstLetterCapital = this.user.name.charAt(0).toUpperCase() + this.user.name.slice(1)
        this.user.name = firstLetterCapital
        this.user.flag= false
        this.user.status =true
        this.addresses.push(JSON.parse(JSON.stringify(this.user)))
        this.$router.push('myCart')
      }
      else{

      }
    }
  }


}

</script>