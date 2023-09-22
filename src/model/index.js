export 
let products = [
    
    //Beverages
    {id:11 ,total: 60, quantity: 1, image: "/images/beverage1.jpg", name:'Beverage1', price: 60, beverages : true ,all: true , toCart: false , toWish : false, new : true},
    {id:12 ,total: 50, quantity: 1, image: "/images/beverage2.jpg", name:'Beverage2', price: 50, beverages : true ,all: true , toWish : false, toCart : false},
    {id:13 ,total: 60, quantity: 1, image: "/images/beverage3.jpg", name:'Beverage3', price: 60, beverages : true ,all: true , toCart: false , toWish : false},
    {id:14 ,total: 70, quantity: 1, image: "/images/beverage4.jpg", name:'Beverage4', price: 70, beverages : true ,all: true , toCart: false , toWish : false},
    
    //Breads
    {id:21 ,total: 40, quantity: 1, image: "/images/bread1.jpg", name:'Bread1', price: 40, breads : true ,all: true , toCart: false , toWish : false , new : true},
    {id:22 ,total: 30, quantity: 1, image: "/images/bread2.jpg", name:'Bread2', price: 30, breads : true ,all: true , toCart: false, toWish : true, },
    {id:23 ,total: 30, quantity: 1, image: "/images/bread3.jpg", name:'Bread3', price: 30, breads : true ,all: true , toCart: false , toWish : false},
    
    //Vegetables
    {id:31 ,total: 20, quantity: 1, image: "/images/vegetable1.jpg", name:'Veg1', price: 20, vegetables : true ,all: true , toCart: true , toWish : false , new : true},
    {id:32 ,total: 60, quantity: 1, image: "/images/vegetable2.jpg", name:'Veg2', price: 60, vegetables : true ,all: true , toCart: false , toWish : false},
    {id:33 ,total: 40, quantity: 1, image: "/images/vegetable3.jpg", name:'Veg3', price: 40, vegetables : true ,all: true , toCart: false , toWish : false},
    {id:34 ,total: 30, quantity: 1, image: "/images/vegetable4.jpg", name:'Veg4', price: 30, vegetables : true ,all: true , toCart: false , toWish : false},
    
    //fruits
    {id:41 ,total: 60, quantity: 1, image: "/images/fruit1.jpg", name:'Fruit1', price: 60, fruits : true ,all: true , toCart: false , toWish : false , new : true},
    {id:42 ,total: 40, quantity: 1, image: "/images/fruit2.jpg", name:'Fruit2', price: 40, fruits : true ,all: true , toCart: false , toWish : false},
    {id:43 ,total: 50, quantity: 1, image: "/images/fruit3.jpg", name:'Fruit3', price: 50, fruits : true ,all: true , toCart: false , toWish : false},
    {id:44 ,total: 40, quantity: 1, image: "/images/fruit4.jpg", name:'Fruit4', price: 40, fruits : true ,all: true , toCart: true , toWish : false},
    {id:45 ,total: 80, quantity: 1, image: "/images/fruit5.jpg", name:'Fruit5', price: 80, fruits: true ,all: true , toCart: true , toWish : false},
    
    //chocolates
    {id:51 ,total: 40, quantity: 1, image: "/images/chocolate1.jpg", name:'Chocolate1', price: 40, chocolates : true ,all: true , toCart: false , toWish : false , popular : true},
    {id:52 ,total: 50, quantity: 1, image: "/images/chocolate2.jpg", name:'Chocolate2', price: 50, chocolates : true ,all: true , toCart: false , toWish : false},
    {id:53 ,total: 60, quantity: 1, image: "/images/chocolate3.jpg", name:'Chocolate3', price: 60, chocolates : true ,all: true , toCart: false , toWish : false},
    {id:54 ,total: 80, quantity: 1, image: "/images/chocolate4.jpg", name:'Chocolate4', price: 80, chocolates : true ,all: true , toCart: false , toWish : false},

    //Sweets
    {id:61 ,total: 400, quantity: 1, image: "/images/sweet1.jpg", name:'Sweets1', price: 400, sweets : true ,all: true , toCart: false , toWish : false , popular : true},
    {id:62 ,total: 120, quantity: 1, image: "/images/sweet2.jpg", name:'Sweets2', price: 120, sweets : true ,all: true , toCart: false , toWish : false},
    {id:63 ,total: 150, quantity: 1, image: "/images/sweet3.jpg", name:'Sweets3', price: 150, sweets : true ,all: true , toCart: true , toWish : true},
    {id:64 ,total: 80, quantity: 1, image: "/images/sweet4.jpg", name:'Sweets4', price: 80, sweets : true ,all: true , toCart: false , toWish : false},
    {id:65 ,total: 60, quantity: 1, image: "/images/sweet5.jpg", name:'Sweets5', price: 60, sweets : true ,all: true , toCart: false , toWish : false},
    
    //kitchenCare
    {id:71 ,total: 200, quantity: 1, image: "/images/kitchencare1.jpg", name:'Kitchen care1', price: 200, kitchenCare : true ,all: true , toCart: false , toWish : false , popular : true},
    {id:72 ,total: 500, quantity: 1, image: "/images/kitchencare2.jpg", name:'Kitchen care2', price: 500, kitchenCare : true , all: true , toCart: false , toWish : false},
    {id:73 ,total: 1800, quantity: 1, image: "/images/kitchencare3.jpg", name:'Kitchen care3', price: 1800, kitchenCare : true ,all: true , toCart: false , toWish : false},
    {id:74 ,total: 250, quantity: 1, image: "/images/kitchencare4.jpg", name:'Kitchen care4', price: 250, kitchenCare : true , all: true , toCart: false , toWish : false},
    
    //personalCare
    {id:81 ,total: 20, quantity: 1, image: "/images/personalcare1.jpg", name:'Personal care1', price: 20, personalCare : true ,all: true , toCart: false , toWish : false , popular : true},
    {id:82 ,total: 400, quantity: 1, image: "/images/personalcare2.jpg", name:'Personal care2', price: 400, personalCare : true ,all: true , toCart: false , toWish : false},
    {id:83 ,total: 80, quantity: 1, image: "/images/personalcare3.jpg", name:'Personal care3', price: 80, personalCare : true ,all: true , toCart: false , toWish : false},
    {id:84 ,total: 200, quantity: 1, image: "/images/personalcare4.jpg", name:'Personal care4', price: 200, personalCare : true ,all: true , toCart: false , toWish : false},

]

