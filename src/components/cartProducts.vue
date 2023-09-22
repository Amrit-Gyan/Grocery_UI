<template>
    <div class="q-my-sm bg-white" >
        <q-card class="row" flat>
          <q-img :src=image 
          no-spinner
          class="col-4 q-ma-sm"
          style="max-height:100px; border-radius:15px"/>
          <div class="col-5 text-h6 q-pt-xs q-pl-sm">{{ name }}
            <div class="text-h6 text-teal-9 ">{{ price }} ₹</div>
          <!-- <div>Qty </div> -->
          <div class="text-subtitle1">
          Qty : <q-icon name="remove" @click.stop="decrease" class="shadow-1" size="xs"/>
          <span class="q-px-sm text-subtitle2">
             {{ quantity }} 
            </span><q-icon @click.stop="increase" name="add" class="shadow-1" size="xs"/> 
          </div>
          <div v-if="showMessage" class="text-red text-subtitle2">
            Max Limit : 10
          </div>
        </div>
        <div class="col-2 q-pt-lg text-black">
          <q-btn flat icon="delete" size="lg" color="teal-10" @click.stop="remove"/>
        </div>
        </q-card>
        </div>


</template>

<script>
import {products} from './../model/index.js'

export default{
    props:['image','name','price','toCart' , 'quantity', 'total'],
    computed:{
      
    },
    data(){
      return{
        products,
        quantity: 1,
        showMessage: false,
      }
    },
    methods:{
      remove(){
        let prod = this.products.find(product => product.name == this.name)
        prod.toCart = false

      },
      decrease(){
        let prod = this.products.find(product => product.name == this.name)
        if(this.quantity == 1){
          prod.toCart = false
        }
        else{
          prod.total = prod.total - prod.price
          this.quantity = this.quantity - 1
          prod.quantity = this.quantity
        }
      },
      increase(){
        let prod = this.products.find(product => product.name == this.name)
        if(this.quantity == 10){
          this.showMessage = true
          setTimeout(() => {
            return this.showMessage = false
          }, 2500);
        }
        else{
          this.quantity = this.quantity + 1
          prod.quantity = this.quantity
          prod.total = prod.quantity * prod.price
          // console.log(prod.quantity);
        }
      },
      prodQuantity(){
        let prod = this.products.find(product => product.name == this.name)
        // console.log(prod.quantity);
        this.quantity = prod.quantity
      }
    },
    created(){
      this.prodQuantity()
    }
}

</script>