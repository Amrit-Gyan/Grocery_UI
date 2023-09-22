<template>
<q-page>
  <div class="row bg-teal q-px-md q-py-lg text-white">

    <div class="col-1">
      <q-btn size="md" flat icon="arrow_back" @click="$router.go(-1)"/>
    </div>
    <div class="col-10 text-bold text-center text-h5">
      Wishlist
    </div>

  </div>
  

    <div  v-if="wish" class="row justify-start q-pt-md q-px-sm">
      <div class="col-6"  v-for="card in wished">
        <product-card class="" v-bind="card" @click="$router.push('/product/'+ card.name)" />
      </div>
    </div>

  <div v-else>
    <q-img src="/images/nowish.png"/>
    <div>
      <q-card flat class="q-mt-xl q-mx-xl q-py-md text-h6 text-teal text-center">
        <p>No Items here ;(</p>
        <q-btn class="bg-teal text-white" label="+ Add Products" to="/homeDashboard" />
      </q-card>
    </div>
  </div>
  

</q-page>

</template>

<script>
import productCard from 'components/product-card.vue'
import {products} from './../model/index'

export default{
  name:'wishlist',
  components:{productCard},
  data(){
    return{
      products,
      wish: true
      
    }
  },
  computed:{
    wished(){
      let prods = this.products.filter(product => product.toWish == true)
      if(prods.length > 0){
        // this.wish = true
        return this.products.filter(product => product.toWish == true)
      }
      else{
        this.wish = false
      }
    }
  }
}

</script>