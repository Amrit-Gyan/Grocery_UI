<template>
    <q-page class="bg-grey-3">
      <div class="row bg-teal text-white">
    
        <div class=" q-px-md q-py-lg text-h6 ">
          My Store
            <q-icon name="favorite" class="q-px-sm"/>
            <q-icon name="shopping_cart" />
        </div>
    
      </div>
    
      <div class="text-center bg-white">
        <div class="text-center text-h5 text-weight-bold ">
          <q-icon rounded class="q-py-lg text-h4" name="T" /><br>
          Tradly store
        </div>
        <div class="q-pt-md q-pb-lg">
          <q-btn rounded outlined label="Edit Store" to="createStore" class="q-mx-md"/>
          <q-btn rounded outlined label="View Store" class=""/>
        </div>
        <p class="text-grey-5 q-pb-sm">Remove Store</p>
      </div>
    
        <div class="q-mx-md">
          <q-input rounded outlined bg-color="white" label="Search Product">
            <template v-slot:prepend>
              <q-icon class="text-teal" name="search"/>
            </template>
          </q-input>
        </div>

        <div class="q-pa-md text-h6 text-weight-regular">
          Products
        </div>

          <div class="row justify-center q-pt-lg">
            <product-card  v-bind="card" @click="$router.push('editProduct')" v-for="card in chart" />
          </div>
  
    
          <q-footer>
            <div class="row justify-between q-py-sm bg-white text-teal">
              <q-btn icon="home" flat class="col-2" to="homeDashboard" size="lg" />
              <q-btn icon="search" flat class="col-2" to="browse" size="lg" />
              <q-btn icon="store" flat class="col-2" to="myStore" size="lg" />
              <q-btn icon="history" flat class="col-2" to="orderHistory" size="lg" />
              <q-btn icon="person" flat class="col-2" to="profile" size="lg" />
            </div>
          </q-footer>
    
    </q-page>
    </template>
    
    <script>
  import productCard from 'components/product-card.vue'

    export default{
      name: 'myStoreProduct',
      components:{productCard},
      data(){
        return{
          chart:[
            {image:'/cupcake.jpg',name:'Cupcake',price:'2$'},
            {image:'/cupcake.jpg',name:'Cupcake',price:'2$'},
            
          ]
        }
      }
    }
    
    </script>