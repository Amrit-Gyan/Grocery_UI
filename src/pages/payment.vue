<template>
  <q-page class="bg-grey-3">

    <div v-if='(getBack == false)'>

      <div class="bg-teal text-white ">
        <div class="row text-h6 q-py-lg">
          <q-btn icon="arrow_back" class="col-2" flat @click="$router.go(-1)"/>
          <span class="col-8 text-center">Payment Option</span>
      </div>
    </div>
    
    <!-- <div class="bg-white q-my-sm q-pa-lg ">
      <q-card flat style="border-radius:15px; border:2px dashed lightgrey" class="bg-grey-3 text-center q-py-xl"
      @click="$router.push('AddCard')" >
      <div class="text-grey-7">
        <q-btn unelevated label="+" class=""/>
        <p>Add Payment Method</p>
      </div>
    </q-card>
  </div> -->

  <div class="q-pa-md q-gutter-md">
    <q-card flat style="border:2px solid white" class="bg-teal-2 text-center q-py-xl">
      <div class="row justify-center">
        <div class="col-7 text-h4"> Grocery App </div>
        <q-icon class="col-2" size="xl" name="local_mall"/>
        <div class="col-12 text-h5 bg-grey-4">Pay Later</div>
        <div class="col-5 text-h6">Coming Soon</div>
        <q-icon class="col-1" size="sm" name="rocket_launch"/>
      </div>
      
    </q-card>
  </div>
  
  <div class="bg-white q-px-sm" >
    <q-option-group
    :options="options"
    type="radio"
    v-model="group"
    color="primary"
    />
  </div>

  <div v-if="selectPaymentMode">
    <q-card>
      <p class="text-red text-center bg-teal-3 text-h6 q-py-sm"> Select a Payment Mode </p>
    </q-card>
  </div>
  
  <div class="q-mt-sm">
    <div class="row justify-between bg-white q-py-md">
      <div class="col-8 q-pl-md" >
        <span class="text-weight-bold">{{ userAddress.name }},&nbsp</span>
        <span class="text-weight-bold">{{ userAddress.mobile }}</span><br>
            <span>{{ userAddress.city }},&nbsp</span>
            <span>{{ userAddress.street }},&nbsp</span>
            <span>{{ userAddress.state }},&nbsp</span>
            <span>{{ userAddress.pin }}</span>
          </div>
          <div class="col-3 q-pt-xs text-center">
            <q-icon name="local_shipping " size="lg" />
          </div>
      </div>
    </div>

    <div class="q-my-sm">
      <q-card flat class="q-pa-md">
        <div class="text-light text-h6 q-pb-sm" >
          Price Details
        </div>
        <div class="row justify-between">
          <div class="col-4">Delivery item</div>
          <div class="col-2 text-center">Price</div>
          <div class="col-2 text-right">Qty</div>
          <div class="col-3 text-right">Total</div>
        </div>
        <div class="row justify-between"  v-for="prod in myCart" >
          <div class="col-4">{{ prod.name }}</div>
          <div class="col-2 text-center">{{ prod.price }} ₹</div>
          <div class="col-2 text-right">{{ prod.quantity }}</div>
          <div class="col-3 text-right">{{ prod.total }} ₹</div>
        </div>
        <br>
        <q-separator />
          
          <div class="row justify-betwen">
            <q-separator />
            <div class="col-8 text-h6 q-pt-sm">Total Amount</div>
            <div class="col-4 text-right text-h6 q-pt-xs">{{ totalAmount }} ₹</div>
          </div>
          <q-separator />
          
        </q-card>
      </div>
  </div>

  <div v-else>
    <q-img class="q-mt-xl" src="/images/pageUC1.jpg"/>
    <q-card class="q-mt-md text-h5 text-center">
      Forwarding to Home Page
    </q-card>
  </div>
    
    <q-footer style="background:transparent;">
      <div v-if='(getBack == false)' class="text-center q-py-md q-px-lg">
        <q-btn class="bg-teal fit text-h6 text-capitalize" @click="payment" rounded label="Continue to Payment" />
      </div>
      <div v-else></div>
    </q-footer>
    
  </q-page>
</template>


<script>
import addresses from './../model/address.js'
import {products} from './../model/index.js'

export default {
  name:'payment',
  props:["Address"],
  data() {
    return {
      addresses:addresses,
      products,
      check:[],
      group:"",
      options: [
        {
          label: 'Debit / Credit Card',
          value: 'card'
        },
        {
          label: 'UPI',
          value: 'upi'
        },
        {
          label: 'Cash on Delivery',
          value: 'cash'
        },
        {
          label: 'Wallet',
          value: 'wallet'
        },
      ],
      getBack: false,
      selectPaymentMode : false,
      totalCharge:"",
      toPass:"",
    }

  },
  watch:{
    'group':{
      handler(val){
        this.optionMessage()
      }
    }
  },

  computed:{
    myCart (){
          this.check = this.products.filter(product => product.toCart == true)
          if(this.check.length > 0){
            return this.products.filter(product => product.toCart == true)
          }
          else{
            this.items = false
          }
        },
    userAddress(){
      return this.addresses.find(address => address.flag == true)
    },
    userProducts(){
      return this.products.filter(product => product.toCart == true)
    },
    totalAmount(){
          if(this.check.length > 0){
            this.totalCharge = this.myCart.reduce((prev, cur)=>{ return cur.total + prev},0)
            return this.totalCharge
          }
          else{
            return
          }
        }
      },
  methods:{
    payment(){
      if(this.group){
        this.toPass = this.totalCharge + this.group
        console.log(this.toPass);
        this.$router.push('/paymentType/'+this.toPass)
      }
      else{
        setTimeout(() => {
          this.selectPaymentMode = true
        }, 0);
      }
      // setTimeout(() => {
      //   this.getBack = true
      // }, 100);
      // setTimeout(() => {
      //   this.getBack = false
      //   this.$router.push('/homeDashboard')
      // }, 3000);
    },

    optionMessage(){
      if(this.selectPaymentMode == true){
        this.selectPaymentMode = false
      }
    }

  },
  created(){
    this.toPass = ""
    // console.log(this.options.value.op1);
  }
}

</script>