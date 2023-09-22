<template>
    <q-card class=" col-5 q-ma-sm text-center" style="border-radius:10px;">
        <q-img class="" style="min-height:110px;" :src=image />
        <q-icon :name=logo rounded class="bg-black q-pb-sm q-px-sm" size="md" style="border-radius:25px; margin-top:-25px; padding-bottom:12px;" color="white" />
        <div class="text-weight-bold" >{{ name }}</div>
        <q-btn rounded label="Follow" color="white" class="bg-teal q-mb-md q-mt-xs" />
    </q-card>
</template>

<script>
export default {
    props: ['name'],
    computed:{
        logo(){
            let forLogo = this.name.charAt(0)
            return forLogo
        }
    },
    
    data(){
        return{
            image: '/images/shop.jpg',
            
        }
    }
}


</script>