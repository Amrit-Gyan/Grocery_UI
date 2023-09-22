<template>
  <q-page class="bg-grey-2">

    <q-header>

      <div class=" row bg-teal q-pt-lg q-px-md q-py-md  text-white ">
        <div class="col-6 text-h5 text-weight-bold q-mb-md">
          Grocery App
        </div>
        <div class="col-6 text-right">
          <q-btn flat icon="favorite" to="/wishlist" size="md" />
          <q-btn flat icon="shopping_cart" to="/myCart" size="md" />
        </div>
        
        <q-input class="col-12 q-pt-sm" bg-color="white" rounded outlined label-color="grey-7" label="Search Product" v-model="searchProduct">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
  </q-header>
    
    <div v-if="disbaledSearch">
      <div>
        <virtual-scroll>
          <q-virtual-scroll :items="coffeeCards" virtual-scroll-horizontal>
            <q-card class="bg-grey-5 q-ml-sm q-my-md text-white " src="/public/slider.jpg" flat bordered
              style="min-height:200px; min-width:350px; border-radius:15px;">
              <q-img no-spinner class="" src="/images/sliderbg8.jpg">
                <div class="text-h6 text-grey-10" style="background: none;">
                  <div class="q-pl-sm" style="margin-top:100px" >Hey! {{ user }}</div>
                  <!-- Ready to Deliver to<br> Your Home <br> -->
                  <q-btn class="text-grey-10" style="margin: 8px -10px" rounded outlined label="Start Shopping" />
                </div>
              </q-img>
            </q-card>
          </q-virtual-scroll>
        </virtual-scroll>
      </div>

      <div>
        <div class="q-col row items-start text-black">
          <div class="col-3" v-for="category in dash">
            <q-img no-spinner cover :src=category.image @click="$router.push('/category/' + category.name)" caption="hello"
              style="height:80px;">
              <div class="text-white absolute-full flex flex-center text-center text-subtitle2" style="font-size:13px;">
                {{ category.name }}
              </div>
            </q-img>
          </div>
        </div>
      </div>

      <q-separator color="teal" inset class="q-mt-sm"/>
      
      <div class="row justify-between q-px-lg q-pt-md">
        <div class="col-6 text-h6 text-black">
          New Product
        </div>
        <div class="col-3 ">
          <q-btn rounded unelevated color="teal" class="q-px-lg q-mt-xs" size="sm" @click="$router.push('/productType/' + newP)"
          label="See All" />
        </div>
      </div>

      <div class="row justify-start q-px-sm">
        <div class="col-6 q-pt-sm" v-for="card in newProduct">
          <product-card v-bind="card" @click="$router.push('/product/' + card.name)" />
        </div>
      </div>
      
      <q-separator color="teal" inset class="q-mt-xs"/>
      
      <div class="row justify-between q-px-lg q-pt-lg">
        <div class="col-6 text-h6 text-black">
          Popular Product
        </div>
        <div class="col-3">
          <q-btn rounded unelevated color="teal" class="q-px-lg q-mt-xs" size="sm" @click="$router.push('/productType/' + popP)"
            label="See All" />
        </div>
      </div>

      <div class="row justify-start q-px-sm">
        <div class="col-6 q-pt-sm" v-for="card in popularProduct">
          <product-card v-bind="card" @click="$router.push('/product/' + card.name)" />
        </div>
      </div>

      <div class="q-pt-sm">
        <div class="row justify-between bg-teal q-pa-md q-my-sm text-h6 " style="min-height:150px;">
          <div class="col-5 text-white">
            Store to follow
          </div>
          <div class="col-4 text-right">
            <q-btn rounded unelevated size="sm" class="text-teal" color="white" label="View All" to="myStore"/>
          </div>
        </div>

        <div class="row justify-start q-my-sm" style="margin-top:-100px;">
          <div class="col-6 q-px-sm" v-for="card in createdStores">
            <store-card class="" v-bind="card" @click="$router.push('/store/' + card.name)" />
          </div>
        </div>
      </div>
    </div>


    <div v-else>
      <div v-if='(productFound)'>
        <div class="row justify-start">
          <div class="col-6 q-pt-sm" v-for="card in findSearchedProduct">
            <product-card v-bind="card" @click="$router.push('/product/' + card.name)" />
          </div>
        </div>
      </div>
      <div v-else>
        <q-img src="/images/noProduct.jpg"/>
      </div>
    </div>

    <q-footer>
      <div class="row justify-between q-py-sm bg-white text-teal">
        <q-btn icon="home" flat class="col-2" to="homeDashboard" size="lg" />
        <q-btn icon="search" flat class="col-2" size="lg" @click="$router.push('browse')" />
        <q-btn icon="store" flat class="col-2" to="myStore" size="lg" />
        <q-btn icon="history" flat class="col-2" to="orderHistory" size="lg" />
        <q-btn icon="person" flat class="col-2" to="profile" size="lg" />
      </div>
    </q-footer>


  </q-page>
</template>

<script>

import productCard from 'components/product-card.vue';
import { products } from './../model/index.js'
import { stores } from './../model/shops.js'
import storeCard from 'components/storeCard.vue';
import users from './../model/users.js'

const maxSize = 5
const coffeeCards = []

for (let i = 0; i < maxSize; i++) {
  coffeeCards.push({

  })
}

export default {

  name: 'homeDashboard',
  // props:['userName'],
  components: { productCard, storeCard },
  computed: {
    // getName(){
    //   let name= this.userName
    //   return name 
    // },
    newProduct() {
      return this.products.filter(product => product.new)
    },
    popularProduct() {
      return this.products.filter(product => product.popular)
    },
    createdStores() {
      let store = this.stores.filter(store => store.name)
      return store
    },
    findSearchedProduct() {
      let findProducts = this.products.filter(product => product.name.startsWith(this.searchWord))
      if (findProducts.length > 0) {
        this.productFound = true
        this.searchWord = null
        return findProducts
      }
      else {
        this.productFound = false
      }
    },
    user(){
      let user = users.find((user) => {
                return (user.login === true)
            })
          let capital = user.name.charAt(0).toUpperCase()
          user.name = capital.concat(user.name.slice(1))
          return user.name
    }
  },

  data() {
    return {
      coffeeCards,
      dash: [
        { image: '/images/beverages.jpg', name: 'Beverages' },
        { image: '/images/breads.jpg', name: 'Breads' },
        { image: '/images/vegetables.jpg', name: 'Vegetables' },
        { image: '/images/fruits.jpg', name: 'Fruits' },
        { image: '/images/chocolates.jpg', name: 'Chocolates' },
        { image: '/images/sweets.jpg', name: 'Sweets' },
        { image: '/images/kitchencare.jpg', name: 'Kitchen Care' },
        { image: '/images/personalcare.jpg', name: 'Personal Care' },
      ],
      products,
      stores,
      newP: "New Products",
      popP: "Popular Products",
      disbaledSearch: true,
      productFound: true,
      searchProduct: "",
      searched: "",
      searchWord: "",
    }
  },
  watch: {
    'searchProduct': {
      handler(val) {
        this.searched = val
        this.searchedProduct()
      }
    }
  },

  methods: {
    searchedProduct() {
      if (this.searched.length > 0) {
        let first = this.searched.charAt(0)
        first = first.toUpperCase()
        this.searchWord = first.concat(this.searched.slice(1))
        // console.log(this.searchWord);
        this.disbaledSearch = false
        this.productFound = true
        // this.findSearchedProduct
      }
      else if(this.searched == ""){
        this.disbaledSearch = true
      }
    }
    //   else if (this.searched.length > 0) {
    //     let first = this.searched.charAt(0)
    //     first = first.toUpperCase()
    //     this.searchWord = first.concat(this.searched.slice(1))
    //     this.findSearchedProduct()
    //     // this.findSearchedProduct()
    //     // console.log(searchWord);
    //   }
    // },

    // findSearchedProduct() {
    //   let findProducts = this.products.filter(product => product.name.startsWith(this.searchWord))
    //   // console.log(findProducts);
    //   if (findProducts.length > 0) {
    //     this.disbaledSearch = false
    //     this.productFound = true
    //     console.log(findProducts);
    //     return findProducts
    //   }
    //   else {
    //     this.disbaledSearch = false
    //     this.productFound = false
    //   }
    // }

  },
  created() {
    
  }
}

</script>