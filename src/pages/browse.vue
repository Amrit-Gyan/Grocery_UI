<template>
  <q-page>


    <q-header>

      <div class="bg-teal q-px-sm q-pb-md">

        <div class="row q-pt-lg justify-between">
          <div class="col-6 text-h5 text-weight-bold q-pl-sm q-mb-md">
            Browse
          </div>
          <div class="col-6 text-right q-pr-sm">
            <q-btn flat icon="favorite" to="/wishlist" size="md" />
            <q-btn flat icon="shopping_cart" to="/myCart" size="md" />
          </div>
        </div>

        <div class="q-pt-sm">
          <q-input rounded outlined bg-color="white" label-color="grey" v-model="searchProduct" label="Search Product"
            icon="search">
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>

        <!-- <div class="row justify-between q-pt-lg"> -->
        <div class="q-gutter-xs q-pt-sm">

          <q-btn class=" text-capitalize" outline rounded color="white" size="md" icon="sort"
            label="Sort By">
            <q-menu class="bg-white text-teal text-weight-bold" style="width:150px" auto-close>
              <q-list>
                <q-item clickable>
                  <q-item-section>Price</q-item-section>
                </q-item>
                <q-item clickable>
                  <q-item-section>Name</q-item-section>
                </q-item>
              </q-list>
            </q-menu>

          </q-btn>
          <q-btn class="text-capitalize" size="md" outline rounded color="white" icon="location_on"
            label="Location" />
          <q-btn class="text-capitalize" outline rounded color="white" style="" icon="category" size="md"
            label="Category" />
        </div>

      </div>
      <!-- </div> -->

    </q-header>

    <div v-if="notSearched">
      <div class="row justify-start q-px-sm">
        <div class="col-6 q-pt-lg" v-for="card in browse">
          <product-card v-bind="card" @click="$router.push('/product/' + card.name)" />
        </div>
      </div>
    </div>

    <div v-else>

      <div v-if="foundProduct">
        <div class="row justify-start q-px-sm">
          <div class="col-6 q-pt-lg" v-for="card in findSearchedProducts">
            <product-card v-bind="card" @click="$router.push('/product/' + card.name)" />
          </div>
        </div>
      </div>

      <div v-else>
        <q-img src="/images/noProduct.jpg" />
      </div>

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
import { products } from './../model/index.js'

export default {
  components: { productCard },
  name: 'browse',
  computed: {
    browse() {
      return this.products.filter(product => product.all)
    },
    findSearchedProducts() {
      let findProducts = this.products.filter(product => product.name.startsWith(this.searchWord))
      if (findProducts.length > 0) {
        // console.log(findProducts);
        this.foundProduct = true
        // this.searchWord = null
        return findProducts
      }
      else {
        this.foundProduct = false

      }
    }
  },
  data() {
    return {
      products,
      searchProduct: "",
      notSearched: true,
      searchWord: "",
      foundProduct: true,
      searched: "",
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
        this.notSearched = false
        this.foundProduct = true
        // this.findSearchedProduct
      }
      else if (this.searched == "") {
        this.notSearched = true
      }
    }
  }
}


</script>