
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/category/:categoryName', component: () => import('pages/categoryDetails.vue'), props: true },
      { path: '/product/:productName', component: () => import('pages/productDetail.vue'), props: true },
      { path: 'onBoarding', component: () => import('pages/onBoarding.vue') },
      { path: 'logIn', component: () => import('pages/logIn.vue') },
      { path: 'signUp', component: () => import('pages/signUp.vue') },
      { path: 'phoneOtp', component: () => import('pages/phoneOtp.vue') },
      { path: 'phoneVerify', component: () => import('pages/phoneVerify.vue') },
      { path: 'homeDashboard', component: () => import('pages/homeDashboard.vue'), props: true },
      { path: '/store/:storeName', component: () => import('pages/storeProfile.vue'), props: true },
      { path: 'myStore', component: () => import('pages/myStore.vue') },
      { path: 'createStore', component: () => import('pages/createStore.vue') },
      // { path: 'myStoreCreated', component: () => import('pages/myStoreCreated.vue') },
      { path: 'addProduct', component: () => import('pages/addProduct.vue') },
      { path: 'myStoreProduct', component: () => import('pages/myStoreProduct.vue') },
      { path: 'editProduct', component: () => import('pages/editProduct.vue') },
      { path: 'myCart', component: () => import('pages/myCart.vue'), props: true },
      { path: 'address', component: () => import('pages/address.vue') },
      { path: '/edit/:addressedName', component: () => import('pages/edit.vue'), props: true },
      { path: '/payment/:address', component: () => import('pages/payment.vue'), props: true },
      { path: '/paymentType/:paymentMode', component: () => import('pages/paymentType.vue'), props: true},
      { path: 'orderHistory', component: () => import('pages/orderHistory.vue') },
      { path: 'profile', component: () => import('pages/profile.vue') },
      { path: 'wishlist', component: () => import('pages/wishlist.vue') },
      { path: 'browse', component: () => import('pages/browse.vue') },
      { path: '/productType/:productName', component: () => import('pages/productType.vue'), props: true },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
