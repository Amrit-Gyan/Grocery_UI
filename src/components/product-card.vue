<template>
    <q-card class="col-5 q-ma-sm" style="border-radius:10px;" >
        <q-img no-spinner class="cover" style="height:110px;" :src=image ></q-img>
        <div class="row justify-between">
            <p class="q-pt-sm q-px-sm col-8">{{name}}</p>
            <q-icon class="q-pl-sm col-3" :style=style name="favorite" size="sm" @click.stop="wishBtn" />
        </div>
        <div class="row justify-between">
        <q-icon class="q-pl-sm" name="style" size="sm"/>
        <p class="col-4 text-h7">Grocery</p>
        <p class="col-5 text-h7 text-right q-pr-sm">{{ price }} ₹</p>
    </div>
</q-card>
</template>

<script>
    import {products} from './../model/index.js'

    export default {
        props: ['image', 'name',  'price' ,'toWish'],
        data(){
            return{
                style:"",
                products
            }
        },
        computed:{
           
        },
        methods:{
            wishBtn(){
                if(this.toWish == true){
                    let prod = this.products.find(product => product.name == this.name)
                    prod.toWish = false
                    this.style = 'color:teal;'
                }
                // else if(this.toWish == false){
                    //     this.style='color:black;'
                    //     let prod = this.products.find(product => product.name == this.name)
                    //     prod.toWish = true
                    // }
                    else {
                        let prod = this.products.find(product => product.name == this.name)
                        prod.toWish = true
                        this.style='color:black;'
                    }
                }
            },
            created(){
                if(this.toWish == true){
                    this.style='color:black;'
                    // console.log(this.name);
                }
                else{
                    this.style='color:teal;'
                }
            },
       
    }
</script>