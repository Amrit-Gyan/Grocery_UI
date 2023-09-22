<template>
  <q-page class="bg-grey-3">

    <div class="bg-teal text-white ">
      <div class="row text-h6 q-py-lg">
        <q-btn icon="arrow_back" class="col-2" flat @click="$router.push('homeDashboard')"/>
        <span class="col-8 text-center">My Cart</span>
      </div>
    </div>

    <div v-if="items">

      <div class="bg-white" >
        <q-card class="row justify-between q-my-md q-py-md q-mx-sm" v-bind="addresses" v-for="addresses in userAddress">
          <div class="col-6 q-pl-md" >
          <span class="text-weight-bold">{{ addresses.name }},&nbsp</span>
          <span class="text-weight-bold">{{ addresses.mobile }}</span><br>
          <span>{{ addresses.city }},&nbsp</span>
          <span>{{ addresses.street }},&nbsp</span>
          <span>{{ addresses.state }},&nbsp</span>
          <span>{{ addresses.pin }}</span>
        </div>
        <div class="col-2">
          <p class="text-right q-px-md text-weight-bold" style="text-decoration:underline;  margin-top:10px;" @click="$router.push('/edit/'+addresses.name)" >Edit</p>
        </div>
        <div class="col-1 q-pr-md">
          <q-checkbox v-model="addresses.flag" color="teal"/>
        </div>
        <div class="col-2">
          <q-btn size="md" icon="delete" @click="addresses.status= false" class="q-pt-xs text-teal-10" flat />
        </div>

      </q-card>
    </div>

    <div v-if=(message) class="bg-grey-4 text-red text-center text-h6">
      Please Select an Address
    </div>

    <div v-if=(addAddress) class="bg-grey-4 text-red text-center text-h6">
      Please Enter an Address
    </div>

    <div v-if=(selectOne) class="bg-grey-4 text-red text-center text-h6">
      Please Select only 1 Address
    </div>
    
    <div class="text-center bg-white text-h7 q-my-sm">
      <q-btn class="fit" flat to="address" label="+ Add New Address"/>
    </div>
    
    <div class="">
      
      <CartProducts v-bind="card" v-for="card in myCart" @click="$router.push('/product/'+card.name)"/>
      
    </div>
    
    <div class="q-my-xl ">
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

          <div v-if=(message) class="bg-grey-4 q-mt-md text-red text-center text-h6">
            Please Select an Address
          </div>

          <div v-if=(addAddress) class="bg-grey-4 q-mt-md text-red text-center text-h6">
            Please Enter an Address
          </div>

          <div v-if=(selectOne) class="bg-grey-4 q-mt-md text-red text-center text-h6">
            Please Select only 1 Address
          </div>
          
        </q-card>
      </div>

    </div>

    <div v-else>
      <q-img src="/images/noitems.jpg"/>
    </div>
      
      <q-footer style="background:transparent;">
        <div v-if="items" class="text-center q-py-md q-px-lg">
          <q-btn class="bg-teal fit text-h6" @click="gotoPayment" rounded label="Continue to Payment"/>
        </div>
        <div v-else class="q-px-lg q-pb-md">
          <q-btn class="bg-teal fit text-h6" to="/browse" rounded label="Continue Shopping"/>
        </div>
      </q-footer>
      
    </q-page>
  </template>
  
  
<script>

import CartProducts from 'components/cartProducts.vue';
import {products} from './../model/index.js'
import {addresses} from './../model/address.js'

export default {
    name: "myCart",
    components: { CartProducts },
    data() {
      return{
        products,
        addresses:addresses,
        message: false,
        addAddress : false,
        selectOne:false,
        items:true,
        check:[],
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
        totalAmount(){
          if(this.check.length > 0){
            return this.myCart.reduce((prev, cur)=>{ return cur.total + prev},0) 
          }
          else{
            return
          }
        },
        userAddress(){
          return this.addresses.filter(address => address.status)
        }
      },
      methods:{
        gotoPayment(){
          let checkStatus = this.addresses.filter(address => address.status == true)
            if(checkStatus.length > 0){
              let sendAddress = this.addresses.filter(address => address.flag == true)
              if(sendAddress.length > 0){
                let multipleSelect = this.addresses.filter(address => address.flag == true)
                if(multipleSelect.length == 1){
                  this.$router.push('/payment/'+ sendAddress)
                }
                else{
                  setTimeout(() => {
                  this.selectOne = true
                }, 0);
                setTimeout(() => {
                  this.selectOne = false
                }, 3500);
                }
              }
              else{
                setTimeout(() => {
                  this.message= true
                }, 0);
                setTimeout(() => {
                  this.message= false
                }, 3500);
              }
            }
            else{
              setTimeout(() => {
                  this.addAddress= true
                }, 0);
                setTimeout(() => {
                  this.addAddress= false
                }, 3500);
            }
          
        },
        edit(){
          // this.$router.push('/address/')
        },

        unCheckboxes(){
          let sendAddress = this.addresses.filter(address => address.name)
          if(sendAddress.length > 0){
            sendAddress.forEach(address => {
              address.flag = false
            });
          }
        }
      },

      created(){
        this.unCheckboxes()
        this.addresses.flag = false
      }
      
}
</script>