<template>
    <q-page class="bg-teal-4">
  
      <div class="bg-teal text-white ">
        <div class="row text-h6 q-py-lg">
          <q-btn icon="arrow_back" class="col-2" flat @click="$router.go(-1)"/>
          <span v-if='mode == "card"' class="col-8 text-center">Payment by Card</span>
          <span v-if='mode == "upi"' class="col-8 text-center">UPI Payment</span>
          <span v-if='mode == "cash"' class="col-8 text-center">Cash Payment</span>
          <span v-if='mode == "wallet"' class="col-8 text-center">Wallet</span>
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

      <!-- if Card -->
      <div v-if='mode=="card"' class="row justify-between bg-white q-pa-lg">
        <q-input label="Card Number" type="number" class="q-mb-md col-10 " v-model="card.number"/>
        <q-input label="Name" type="text" class="q-mb-md col-10" v-model="card.name"/>
        <q-input type="date" class="q-mb-md col-6" v-model="card.date"/>
        <q-input label="CVC" class="q-mb-md col-4" v-model="card.cvc"/>
        
        <q-btn rounded class="bg-teal-2 text-grey-9 text-h6 fit text-capitalize" flat label="Pay" size="lg" @click='pay'/>

        <!-- Captca Code -->
        <!-- <div class="row justify-center">
          <q-input outlined class="q-mb-md col-6 q-mr-sm" />
          <p class="col-4 bg-grey-4 text-h5 q-pt-md text-center" 
          style="font-family: cursive ;">{{captcha}}</p>
        </div> -->
      </div>
      
      <!-- if Upi -->
      <div v-if='mode=="upi"'>
        <div class="bg-teal-4 text-center q-py-xl">
          <q-input class="q-px-xl q-mx-md text-h6 text-center"
          input-class="text-center  text-white" color="teal-7"
          label-color="teal-1" label="Enter UPI" 
          v-model="upi.address" outlined rounded/>
          
          <q-btn rounded class="bg-teal-3 q-mt-md q-px-xl text-h6 text-capitalize" flat label="Pay" size="md" @click='pay'/>
        </div>
      </div>
      
      <!-- if Cash -->
      <div v-if='mode=="cash"'>
        <div class="text-center q-pt-xl q-px-xl bg-teal-4 " style="height:260px">
          <p class="text-h5" style="font-family:cursive;" > {{ captcha }} </p>
          <q-input class="q-px-xl q-mx-md text-h6 text-center"
          input-class="text-center" color="white"
          label-color="teal-2" label="Enter the shown no." 
          v-model="cash.captcha" outlined rounded/>
          <q-btn class="q-mt-lg" label="Submit" @click="pay"/>
        </div>
        <dialog-box ref="dialogBox" />
      </div>

      <!-- if Wallet -->
      <div v-if='mode=="wallet"'>
        <div class="text-center">
        <q-img src="/images/walletbg.jpg">
            <p class="text-h1 text-grey-7 q-pt-md q-mt-xl" style="font-family:cursive; font-size:5em; ">
              "{{ amount }}"
            </p>
            <p></p>
          </q-img>
          </div>
        </div>

      <div class="text-center text-white q-mx-lg q-my-md">
        <!-- <q-btn rounded class="bg-teal text-h6 fit text-capitalize" flat label="Pay" size="lg" @click='pay'/> -->
      </div>

      <div class="q-ma-md">
        <q-img class="shadow-1" style="border-radius:5px" src="images/sale.jpg" />
      </div>
  
      
    </q-page>
  </template>
  

  <script>
import {orders} from './../model/orders.js'
import { products } from './../model/index.js'

import dialogBox from 'src/components/dialogBox.vue'

  export default {
    name:'paymentType',
    props:['paymentMode'],
    components:{
      dialogBox
    },
    data() {
      return {
        orders:orders,
        products,
        mode:"",
        ran:"",
        amount:"",
        check:[],
        card:{
          number:"",
          name:"",
          date:"",
          cvc:""
        },

        upi:{
          address:""
        },
        cash:{
          captcha:"",
        },
        
        cardStatus:false,
        cashStatus:false,
        upiStatus:false,
        walletStatus:false,
        error:"",
        order:{
          id:""
        },
        
      }
    },
    created(){
      if(this.paymentMode){
        // console.log(this.paymentMode.replace(/\D/g,''));
        // console.log(this.paymentMode.replace(/[^\p{L}]/gu, ''))
        this.amount = this.paymentMode.replace(/\D/g,'')
        this.mode = this.paymentMode.replace(/[^\p{L}]/gu, '')
      }
      this.fetchCartProducts()
      // this.mode = this.paymentMode
    },

    computed:{
      captcha(){
        let num = Math.floor((Math.random()*1000)+100)
        if(num > 100 && num <1000){
          this.ran = num
          return num
        }
        else if(num > 1000){
          this.ran = num
          return num-100
        }
      },
      amount(){
        return 10000
      },
    },

    methods:{
      pay(){
        if(this.mode == "card"){
          console.log("Card");
          if(this.card.number){
            this.orders.push(JSON.parse(JSON.stringify(this.order)))
            console.log(this.orders.filter(order => order.id));
            setTimeout(() => {
              cardProcess = true  
            }, 0);
            setTimeout(() => {
              cardProcess = false
            }, 2000);
          }
        }
        if(this.mode == "upi"){
          console.log("Upi");
          if(this.upi.address){
            this.orders.push(JSON.parse(JSON.stringify(this.order)))
            console.log(this.orders.filter(order => order.id));
            setTimeout(() => {
              upiProcess = true  
            }, 0);
            setTimeout(() => {
              upiProcess = false
            }, 2000);
          } 
        }

        if(this.mode == "cash"){
          console.log("Mode cash");
          if(this.cash.captcha == this.ran){
            console.log("Pushed");
            // this.orders.push(JSON.parse(JSON.stringify(this.order)))
            // console.log(this.orders.filter(order => order.id));
            
                this.$refs.dialogBox.visible = true;
              // Simulate an asynchronous operation
              // setTimeout(() => {
              //   this.hideDialogBox();
              // }, 2000)
              setTimeout(() => {
                this.$refs.dialogBox.visible = false;
                window.history.back(); //define router or change method for switching page to homeDashboard
              }, 3000)
              this.$refs.dialogBox.show = true;

           }

            // Continue from here
            // let emptyCart = this.products.filter(product => product.toCart == true)
            // emptyCart.forEach(product => {
            //   product.toCart = false
            // });

            // setTimeout(() => {
            //   cashProcess = true  
            // }, 0);
            // setTimeout(() => {
            //   cashProcess = false
            // }, 2000);


          else{
            setTimeout(() => {
              cashProcess = true
              error = true  
            }, 0);
            setTimeout(() => {
              cashProcess = false
            }, 2000);
          }
          
        }
        if(this.mode == "wallet"){
          console.log("Wallet");
          
            setTimeout(() => {
              walletProcess = true  
            }, 0);
            setTimeout(() => {
              walletProcess = false
            }, 2000);
        }
      },

      fetchCartProducts(){
        console.log("Called Fetch Product func");
        this.check = this.products.filter(product => product.toCart == true)
          // console.log(this.check);
        this.order.id = this.check.map((product) => product.id).join("")
        // console.log(this.order.id);
        // this.orders.push(JSON.parse(JSON.stringify(this.orders)))
        // let getId = this.check.filter(product => product.id)
        // console.log(getId);
      }

    }
  }
  
  </script>