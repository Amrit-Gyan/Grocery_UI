<template>
    <q-page class="bg-grey-3">

      <div class="bg-teal">
        <q-img class=""  style="height:250px;" :src="product.image">
          <div class="row q-mt-md" style="width:100%; background:transparent;">
            <div class="col-6">
              <q-icon name="arrow_back" size="sm" class="q-pa-sm"
              style="background:rgba(0,0,0,0.5); border-radius:25px;" @click="$router.go(-1)" />
            </div>
            <div class="col-6 text-right">
              <q-icon class="q-pa-sm q-mr-sm" name="share" size="sm"
              style="background:rgba(0,0,0,0.5); border-radius:25px;" />
              <q-icon class="q-pa-sm q-mr-sm" name="favorite" @click="$router.push('/wishlist')" size="sm"
              style="background:rgba(0,0,0,0.5); border-radius:25px;"/>
              <q-icon  name="menu" class="q-pa-sm" @click="$router.push('/homeDashboard')" size="sm"
              style="background:rgba(0,0,0,0.5); border-radius:25px;"/>
            </div>
          </div>
        </q-img>
      </div>
    
      <div class="row justify-between bg-white q-px-md">
        <div class="col-10 text-h6 text-weight-regular q-py-sm">
          {{ product.name }} 
        </div>
        <div class="col-2"> 
           <q-btn flat icon="favorite" size="lg" :style=style @click="wishBtn"/>
        </div>
        <p class="text-teal text-h5 text-bold">{{product.price}} ₹</p>
      </div>
      
      <div class="row bg-white q-my-sm q-px-md q-py-sm">
          <div class="col-1 q-pl-md">
            <q-icon class="q-pa-sm bg-teal text-white text-weight-bold"
            style="border-radius:25px;" name="T"/>
          </div>
          <div class="col-6 q-pt-sm q-pl-lg">
              Grocery Store
            </div>
            <div class="col-5 text-right q-pr-md text-white">
              <q-btn unelevated rounded label="Follow" class="bg-teal" />
            </div> 
      </div>
    
      <div class="bg-white q-pt-xl q-px-lg">
        <div class="" style="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum quod, cumque dolores nisi temporibus ea earum fuga voluptatem omnis tempora, nam placeat aut. Illum porro fuga quis, natus, neque sunt eius, id tempore quos voluptas quas. Doloremque, labore! Esse neque voluptas odit necessitatibus possimus magnam modi nemo repellendus! Iusto doloribus eaque eum pariatur unde quas! Iure placeat quis alias!
        </div>
    
        <q-separator />
    
        <div class="text-weight-light q-mt-xl">
          <div class="row justify-between">
            <p class="col-4">Condition</p>
            <p class="col-6">Organic</p>
          </div>
          <div class="row justify-between">
            <p class="col-4">Price Type</p>
            <p class="col-6">Fixed</p>
          </div>
          <div class="row justify-between">
            <p class="col-4">Category</p>
            <p class="col-6">Beverages</p>
          </div>
          <div class="row justify-between">
            <p class="col-4">Location</p>
            <p class="col-6">Patna, Bihar</p>
          </div>
        </div>
    
        <q-separator />
    
        <div class="q-my-md">
          <div class="text-h6 q-my-md">
            Additional Details
          </div>
          <div class="row justify-between text-weight-light">
            <p class="col-4">Delivery Details</p>
            <p class="col-6">Home Delivery Available, Cash on Delivery</p>
          </div>
        </div>
      </div>
    
      <q-footer 
      style="background-color:transparent;">
        <div class="text-center q-my-sm q-mx-md">
          <q-btn  class="fit text-white text-weight-light q-pa-md" rounded unelevated :color=color size="md" :label="btnLabel"  @click="cartBtn"/>
        </div>
      </q-footer>
    
    </q-page>
    </template>
    
    
    <script>
    import {products} from './../model/index.js'

    export default{
        name:'productDetail',
        props:['productName'],
      data(){
        return{
          products,
          btnLabel:"Add to Cart",
          color:'teal',
          style:'color:teal'
        }
      },
      computed:{
        product (){
          return this.products.find(product => product.name === this.productName) 
        }
      },
      methods:{
        cartBtn(){
            if(this.product.toCart == false){
              // console.log(this.product.toCart);
              this.product.toCart = true,
              this.btnLabel = "Go To Cart"
              this.color='black'
            }
            else if(this.product.toCart == true){
              // console.log(this.product.toCart);
              this.$router.push('/myCart')
            }
            else{
              
            }
          },
          wishBtn(){
            if(this.product.toWish == false){
              // console.log(this.product.toWish);
              this.product.toWish = true,
              this.style='color:black;'
            }
            else{
              // console.log(this.product.toWish);
              this.product.toWish = false,
              this.style='color:teal;'
            }
          }
        },
        beforeMount(){
          if(this.product.toCart == true){
            this.btnLabel = "Go To Cart"
            this.color = 'black'
          }
          if(this.product.toWish == true){
            this.style = 'color:black'
          }
        },
        created(){
          // console.log(this.productName);
        }
        
      }
    
    </script>