<template>
  <q-page>

    <div class="bg-teal text-white q-px-md q-pb-md">
        
      <div class="row q-pt-lg justify-between">
        <div class="col-6 text-h5 text-weight-bold q-mb-md">
          My Store
        </div>
        <div class="col-6 text-right">
          <q-btn flat icon="favorite" to="/wishlist" size="md" />
          <q-btn flat icon="shopping_cart" to="/myCart" size="md" />
        </div>
      </div>

    </div>

    <div class="q-px-sm">
      <store-card v-bind="stores" v-for="stores in myStores" @click="$router.push('/store/'+stores.name)"/>
    </div>

    <!-- <div class="text-center q-my-xl" v-if='noStore'>
      <q-icon name="home" size="xl"/>
      <p class=" text-h6 q-mt-sm">You Don't Have a Store</p>
    </div> -->

    <div class="text-center text-white q-pt-md">
      <q-btn rounded class="bg-teal text-h6 q-px-xl text-capitalize" flat label="Create Store" to="createStore" />
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
import {stores} from './../model/shops.js'
import storeCard from 'components/storeCard.vue';

export default {
  name: 'myStore',
  components:{storeCard},
  data() {
    return {
      stores,
    }
  },
  computed:{
    myStores(){
      return this.stores.filter(store => store.name)
    }
  }
}
</script>