<template>
    <q-page class="bg-grey-4">
        <div class="row justify-between bg-teal q-px-md q-py-lg text-white">

            <div class="col-2">
                <q-btn size="md" flat icon="arrow_back" @click="$router.go(-1)" />
            </div>
            <div class="col-9 text-bold text-center text-h5 ">
                Grocery Store
            </div>
            <div class="col-1">
                <q-icon size="sm" flat name="search" />
            </div>
        </div>
<div v-if="stores">
  

    <div class="bg-white">
        <div class="row text-h7 q-py-md q-px-lg">
            <div class="col-1 q-mx-sm q-pt-xs">
                <q-icon class="bg-black q-pb-sm q-px-xs text-white text-weight-bold" style="border-radius:45px;" :name='logo' size="md" />
            </div>
            <div class="col-7 q-pt-sm q-pl-md text-weight-bold">
                {{ store?.name }}
                <p class="text-weight-light">Grocery App</p>
            </div>
            <div class="col-1 text-white q-pt-sm">
                <q-btn unelevated rounded label="Follow" class="bg-teal " />
            </div>
        </div>
        <div class="q-mx-xl q-pb-xl text-weight-light" style="font-size:12px;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus perferendis reiciendis a iure optio earum, nisi atque eveniet ea minus. Vel repellendus architecto qui autem ipsa est aut voluptatum quam perspiciatis, inventore
        </div>
    </div>

    <div class="bg-white q-my-md q-pt-sm">
        <div class="row justify-between text-center q-mx-xl q-py-sm">
            <div class="4">
                <p>Total Followers</p>
                <p>0</p>
            </div>
            <div class="4">
                <p>Total stores</p>
                <p>0</p>
            </div>
        </div>
    </div>

    <div class="text-center">
        <q-btn class="bg-white fit" flat label="+ Add Product" @click="this.$router.push('/addProduct')"/>
    </div>

</div>
        
      <div v-else>
        Store Not Found
      </div> 

    </q-page>

</template>

<script>
import {stores} from './../model/shops.js'

export default {
    name:'storeProfile',
    props:['storeName'],
    data() {
        return {
            stores,      
            logo: this.storeName.charAt(0),
        }
    },
    computed:{
        store (){
            return this.stores.find(store => store.name == this.storeName)
        },
        
    },
    methods:{
        
    },
    created(){
        
        // let a= this.stores.find(store => store.name == this.storeName)
        // console.log(a);
    }

}

</script>