<template>
  <q-page>

    <div class="bg-teal q-pa-md">

      <div class="row q-pt-sm">
        <q-btn flat class="col-2 text-white" @click="$router.go(-1)" icon="arrow_back"/>
        <div class="col-8 text-center text-h5 text-weight-bold text-grey-3">
          {{categoryName}}
        </div>
      </div>
      
      <div class="row justify-between q-pt-lg">
        <q-btn class="col-4 text-capitalize no-padding" outline rounded color="white" size="md" icon="sort" label="Sort By"/>
        <q-btn class="col-4 text-capitalize no-padding" size="md" outline rounded color="white" icon="location_on" label="Location"/>
        <q-btn class="col-4 text-capitalize no-padding" outline rounded color="white" style="" icon="category" size="md" label="Category"/>
      </div>
      
    </div>

    <div class="row justify-start">
      <div class="col-6 q-pt-lg" v-for="card in category">
        <product-card v-bind="card" @click="$router.push('/product/'+ card.name)"/>
      </div>
      
    </div>
  </q-page>

</template>

<script>
import productCard from 'components/product-card.vue';
import {products} from './../model/index.js'

export default {

  name:'categoryDetails',
  components : {productCard},
  props: ['categoryName'],
  computed:{
    category(){
        if(this.categoryName == "Beverages"){
          return this.products.filter(product => product.beverages)
        }
        if(this.categoryName == "Breads"){
          // console.log("hello");
          return this.products.filter(product => product.breads)
        }
        if(this.categoryName == "Fruits"){
          return this.products.filter(product => product.fruits)
        }
        if(this.categoryName == "Vegetables"){
          return this.products.filter(product => product.vegetables)
        }
        if(this.categoryName == "Chocolates"){
          return this.products.filter(product => product.chocolates)
        }
        if(this.categoryName == "Sweets"){
          return this.products.filter(product => product.sweets)
        }
        if(this.categoryName == "Personal Care"){
          return this.products.filter(product => product.personalCare)
        }
        if(this.categoryName == "Kitchen Care"){
          return this.products.filter(product => product.kitchenCare)
        }
      
    },
  },
  data() {
    return {
      
      products  
      
    }
  }
}


</script>