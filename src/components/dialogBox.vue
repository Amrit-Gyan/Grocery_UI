<template>
    <q-dialog v-model="visible" persistent>
      <q-card>
        <q-card-section class="q-pt-none">
          <!-- <q-spinner-gears size="80px" color="primary" /> -->
          <div class="q-mt-md">
            <!-- <q-spinner-tail
              model="spin"
              color="primary"
              size="2em"
            /> -->
            <div  v-if="show" >
                <div class="col-4" >
                    <q-img src="/images/party.gif"/>
                </div>
                <div class="q-mt-sm text-teal-10 text-h5 q-pl-sm col-8 text-center">
                    Order Placed
                </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </template>
  
  <script>
  export default {
    data() {
      return {
        visible: false,
        show: false
      };
    }
  };
  </script>
  
  <style scoped>
  .q-card {
    width: 200px;
  }
  </style>
  