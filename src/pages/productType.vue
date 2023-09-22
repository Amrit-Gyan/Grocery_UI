<template>
    <q-page class="">

        <q-header>

            <div class="bg-teal q-pt-md q-px-md q-py-md q-pt-lg text-white ">

                <div class="row">
                    <div>
                    <q-btn class="col-1" icon="arrow_back" to="/homeDashboard" flat/>
                    </div>
                    <div class="col-7 text-h5 text-weight-bold q-mt-xs q-mb-sm">
                        {{productName}}
                    </div>
                    <div class="col-3 ">
                        <q-btn flat icon="favorite" style="padding:0px" to="/wishlist" size="md" />
                        <q-btn flat icon="shopping_cart" style="padding:0px 0px 0px 31px;" to="/myCart" size="md" />
                    </div>
                </div>
                
                <div class="row">
                    <q-input class="q-pt-sm col-12" bg-color="white" v-model="searchProduct" rounded outlined label-color="grey" label="Search Product">
                        <template v-slot:prepend>
                            <q-icon name="search" />
                        </template>
                    </q-input>
                </div>
            </div>
            
        </q-header>
        
        <div v-if="notSearched">

            <div class="" v-if="productName=='New Products'">
                    <div class="row justify-start q-px-sm">
                        <div class="col-6 q-pt-lg" v-for="card in newProduct">
                          <product-card  v-bind="card" @click="$router.push('/product/'+ card.name)"/>
                        </div>
                    </div>
        </div>
        
        <div class="" v-if="productName=='Popular Products'">
            <div class="row justify-start q-px-sm">
                <div class="col-6 q-pt-lg" v-for="card in popularProduct">
                  <product-card  v-bind="card" @click="$router.push('/product/'+ card.name)"/>
                </div>
              </div>
        </div>
    </div>

    <div v-else>

        <div v-if="foundProduct">
            <div class="row justify-start q-px-sm">
                <div class="col-6 q-pt-lg" v-for="card in findSearchedProducts">
                  <product-card  v-bind="card" @click="$router.push('/product/'+ card.name)"/>
                </div>
              </div>
        </div>

        <div v-else>
            <q-img src="/images/noProduct.jpg" />
        </div>
    </div>

        <q-footer>
            <div class="row justify-between q-py-sm bg-white text-teal">
                <q-btn icon="home" flat class="col-2" to="/homeDashboard" size="lg" />
                <q-btn icon="search" flat class="col-2" size="lg" to="/browse" />
                <q-btn icon="store" flat class="col-2" to="/myStore" size="lg" />
                <q-btn icon="history" flat class="col-2" to="/orderHistory" size="lg" />
                <q-btn icon="person" flat class="col-2" to="/profile" size="lg" />
            </div>
        </q-footer>


    </q-page>
</template>
  
<script>

import productCard from 'components/product-card.vue';
import { products } from './../model/index.js'

export default {

    name: 'productType',
    components: { productCard },
    props:['productName'],

    computed:{
    newProduct() {
      this.productnew = this.products.slice(0,11)
      return this.products.slice(0,11)
    },
    popularProduct() {
      this.productpopular = this.products.slice(11,20)
      return this.products.slice(11,20)
    },
    findSearchedProducts() {
        if(this.productName == "New Products"){
            // console.log("New Products");
            let findProducts = this.productnew.filter(product => product.name.startsWith(this.searchWord))
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

        else{
            // console.log("Popular Products");
            let findProducts = this.productpopular.filter(product => product.name.startsWith(this.searchWord))
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
    }
    },


    data() {
        return {
            products,
            productnew:[],
            productpopular:[],
            searchProduct:"",
            searched:"",
            searchWord:"",
            notSearched: true,
            foundProduct: true,


        }
    },

    watch:{
    'searchProduct':{
      handler(val){
        this.searched = val
        this.searchedProduct()
      }
    }
  },

    
    methods: {
        searchedProduct() {
            // console.log(this.searched);
      if (this.searched.length > 0) {
        let first = this.searched.charAt(0)
        first = first.toUpperCase()
        this.searchWord = first.concat(this.searched.slice(1))
        // console.log(this.searchWord);
        this.notSearched = false
        this.foundProduct = true
        // this.findSearchedProduct
      }
      else if(this.searched == ""){
        this.notSearched = true
      }
        },
    },

    created() {
        
    }
}

</script>