<template>
  <q-page >

    <div class="bg-teal-7" style="min-height:350px"></div>

    <q-carousel
        v-model="slide"
        control-color="teal-7"
        height="600px"
        navigation
        style="margin-top:-200px;"
        class="q-mx-xl text-teal rounded-borders">

        <q-carousel-slide name="card1">
          <q-card name="style" flat :style="card">
            <q-img :style="img" src="/images/store.png"/>
          </q-card>
          <div :class="text">
            Empowering Artisans,<br>Farmers & Micro Business
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="card2">
          <q-card name="style" flat :style="card" >
            <q-img :style="img" src="/images/store.png"/>
          </q-card>
          <div :class="text">
            Connecting NGOs, Social Enterprises with Communities
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="card3">
          <q-card name="style" flat :style="card">
            <q-img :style="img" src="/images/store.png"/>
          </q-card>
          <div :class="text">
            Donate, Invest & Support infrastructure projects
          </div>
        </q-carousel-slide>

    </q-carousel>
    
    <q-footer class="q-mx-md" 
    style="background:transparent;">
        <q-btn
        flat 
        rounded 
        class="fit text-h6 bg-teal q-mb-md text-white text-capitalize" 
        @click="change"
        :label=Btn />
      </q-footer>

  </q-page>

</template>

<script>
export default({
  name: 'onBoarding' ,
  count:"counter",
  data(){
    return{
      slide: "card1",
      counter:1,
      Btn:"Next",
      card: 'min-height:300px; margin-top:50px',
      img: "min-height:300px;",
      text:'q-my-lg text-center q-py-xl text-h5',
    }
  },
  methods:{
    change(){
      this.counter+=1
      if(this.counter == 2){
        return this.slide = "card2"
      }
      if(this.counter == 3){
        return this.slide = "card3", this.Btn = "Finish" 
      }
      if(this.counter == 4){
        this.$router.push("/logIn")
      }
    }
  }
})
</script>
