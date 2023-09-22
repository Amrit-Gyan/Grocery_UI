


<template>
  <q-page class="bg-grey-3">
    
    <div class="row bg-teal q-px-md q-py-lg text-white">
      <div class="col-10 text-bold text-left text-h5">
        Order History
      </div>
      <div class="col-1">
        <q-btn size="md" flat icon="favorites"/>
      </div>
      <div class="col-1">
        <q-btn size="md" flat icon="shopping_cart"/>
      </div>
    </div>
  
    <div class="q-pa-md text-h5 text-weight-regular">
      Transactions <q-icon name="receipt_long" color="black"/>
    </div>
  
    <div>
      <q-card flat class="row q-pt-md q-pl-md q-mb-sm" v-for="cards in transactions">
        <q-img cover class="col-2"
        style="border-radius:10px; height:80px; width:80px;" :src="cards.image"/>
        <div class="col-4">
          <p class="text-h6 text-weight-regular q-pa-sm">{{cards.name}}<br>
            <span class="text-teal text-h6 text-bold">{{cards.price}}</span>
          </p>
        </div>
        <div class="col-5 text-right q-pt-lg">
          <q-btn unelevated rounded color="teal" :label=cards.btn size="sm"/>
        </div>
      </q-card>
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
  export default{
    name: 'orderHistory',
    data(){
      return{
        transactions :[
          {image:'/images/fruit5.jpg' , name: 'Apple' , price: '$25', discount : '50% Off' ,btn:'Delivered'},
          {image:'/images/beverage1.jpg' , name: 'Chocolate Shake' , price: '$25', discount : '50% Off' , btn:'Order Placed'},
          {image:'/images/vegetable2.jpg' , name: 'Mushroom' , price: '$25', discount : '50% Off',btn:'Payment Confirmed'},
          {image:'/images/chocolate3.jpg' , name: 'Choco Pudding' , price: '$25', discount : '50% Off' ,btn:'Processed'},
          
        ]
      }
    }
  }
  
  
  </script>