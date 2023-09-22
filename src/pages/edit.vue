<template>
<q-page>
    <div class="bg-teal text-white ">
        <div class="row text-h6 q-py-lg">
          <q-btn icon="arrow_back" class="col-2" flat @click="$router.go(-1)"/>
          <span class="col-8 text-center">Edit Address</span>
        </div>
      </div>
  
      <div class="bg-grey-3">
  
        <div class="bg-white q-pa-lg ">
          <q-input label="Name" v-model="user.name" class="q-mb-md" />
          <q-input label="Phone" v-model="user.mob" class="q-mb-md" />
          <q-input label="Zipcode" v-model="user.pin" class="q-mb-md" />
          <q-input label="State" v-model="user.state" class="q-mb-md" />
          <q-input label="City" v-model="user.city" class="q-mb-md" />
          <q-input label="Street" v-model="user.streets" class="q-mb-md" />
        </div>
      </div>
  
      <q-footer>
        <div class="bg-white text-center q-py-md q-px-lg">
          <q-btn class="bg-teal fit text-h6 text-capitalize" @click="save" rounded label="Edit Address" />
        </div>
      </q-footer>

</q-page>
</template>

<script>
import addresses from './../model/address.js'

export default{
    name: 'edit',
    props:['addressedName'],
  data() {
    return {
      addresses:addresses,
      user:{
        name:'',
        mob:'',
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
        
        let userAddress = this.addresses.find(address => address.name == this.addressedName)
        let firstCapital = this.user.name.charAt(0).toUpperCase()
        this.user.name = firstCapital.concat(this.user.name.slice(1))
        userAddress.name = this.user.name
        // console.log(userAddress.name);
        this.$router.push('/myCart')
      }
      else{

    }
    }
  }


}

</script>