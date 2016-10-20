angular.module('wyn')
.service('wynService', function(){
  // data
  this.wineData = [
    {
      "_id": "1",
      "name": "Underwood Pinot Noir",
      "description": "This Pinot works hard for the working people. Telling a truly Oregon story, the wine draws from vineyards across the state. Each site adds its unique mark to the final Underwood blend, which highlights the rich juicy flavors of Oregon Pinot at an extraordinary price. The perfect wine to enjoy anywhere, any day of the week.",
      "tastingNotes": "Raspberry, black plum, and violet",
      "boozeScale": 244,
      "price": 1400,
      "inStock": true,
      "rating": 87,
      "imageUrl": "../images/Underwood_Pinot_Noir.jpg",
      "__v": 0,
      "categories": ["red", "earthy"]
    },

    {
      "_id": "2",
      "name": "Alchemist Chardonnay",
      "description": "The Alchemist magic also makes its way into our Chardonnay, which is crafted using modern winemaking techniques and equipment that allow us to preserve the inherent freshness and brightness of the Oregon Chardonnay grapes we choose in small lots from select vineyards in the Willamette Valley. Showcasing crisp, ripe fruit flavors and a hint of citrus, this is a thoughtful, approachable and creative wine that will keep you interested with every sip.",
      "tastingNotes": "Lemon, nectarine, wood spice",
      "boozeScale": 49,
      "price": 2800,
      "inStock": true,
      "rating": 90,
      "imageUrl": "../images/Alchemist_Chardonnay.jpg",
      "__v": 0,
      "categories": ["white", "citrus"]
    },
    {
      "_id": "3",
      "name": "Alchemist Pinot Noir",
      "description": "There’s a science, but also a bit of magic that goes into blending our Alchemist wines. To make this carefully crafted Pinot Noir, we source our fruit from our favorite parts of our partners’ vineyards, drawing and blending from the beautiful palette of the Willamette Valley to create a refined and intensely vibrant wine, rich with red berry fruits. This is a wine for elevating everyday moments to the realm of art.",
      "tastingNotes": "Raspberry, dark cherry, and baking spice",
      "boozeScale": 38,
      "price": 2800,
      "inStock": true,
      "rating": 88,
      "imageUrl": "../images/Alchemist_Pinot_Noir.jpg",
      "__v": 0,
      "categories": ["red", "fruity"]
    },
    {
      "_id": "4",
      "name": "Underwood Rose",
      "description": "Straight from the Rosé City! Drinkable, unpretentious and travel-ready, this is the perfect wine for action lounging, such as poolside shindigs, outdoor music festivals, backyard BBQ's with friends or anywhere that calls for serious lounging. It's set to become your favorite spring and summer staple.",
      "tastingNotes": "Strawberry, watermelon, and peach",
      "boozeScale": 153,
      "price": 1400,
      "inStock": true,
      "rating": 80,
      "imageUrl": "../images/Underwood_Rose.jpg",
      "__v": 0,
      "categories": ["rose","fruity"]
    },
    {
      "_id": "5",
      "name": "King's Ridge Pinot Noir",
      "description": "Our flagship Pinot is hard to beat. A combination of rich red fruit flavors with freshness and vibrancy unique to Pinot Noir grapes grown in our beloved Willamette Valley, this wine truly reflects the character of this region. We think the best vintage is pretty much right now, so start sharing with some with your favorite people.",
      "tastingNotes": "Blackberry, cherry and cola",
      "boozeScale": 181,
      "price": 1800,
      "inStock": true,
      "rating": 87,
      "imageUrl": "../images/Kings_Ridge_Pinot_Noir.jpg",
      "__v": 0,
      "categories": ["red", "fruity"]
    },
    {
      "_id": "6",
      "name": "Infinite Monkey Theorem Syrah",
      "description": "Velvet describes not only the color of this wine, but the mouthfeel too. A very rich purply velvet, almost enough to stain the glass but definitely enough to stain the lips. Aromas match the color with tons of ripe blackberry and truffle. This is an easily agreeable wine with flavors of black plum, leather, and a little spice with ripe tannins. One sip and you'll wonder when the roast is coming out.",
      "tastingNotes": "Blackberry, Truffle, Plum, Spice",
      "boozeScale": 241,
      "price": 1800,
      "inStock": true,
      "rating": 3,
      "imageUrl": "../images/TIMT-Syrah.jpg",
      "__v": 0,
      "categories": ["red","earthy","rich"]
    },
    {
      "_id": "7",
      "name": "King's Ridge Pinot Gris",
      "description": "Pinot Gris often gets left out in a place where its close cousin, Pinot Noir, gets all the hype. But we think you’ll love this richly textured white, crafted from carefully chosen vineyards in the coolest parts of the Willamette Valley.",
      "tastingNotes": "Lime, thyme, and nectarine",
      "boozeScale": 230,
      "price": 1400,
      "inStock": true,
      "rating": 87,
      "imageUrl": "../images/Kings_Ridge_Pinot_Gris.jpg",
      "__v": 0,
      "categories": ["white", "citrus"]
    },
    {
      "_id": "8",
      "name": "King's Ridge Riesling",
      "description": "Riesling has nearly become the forgotten grape of Oregon, yet in fact we source some of our Riesling grapes from one of the oldest vineyards in the state, planted in 1968.  This vineyard’s fruit adds depth and complexity to our Riesling, without sacrificing the freshness and vibrancy we enjoy most about this grape. So give a little love to a wine with deep Oregon roots.",
      "tastingNotes": "Green apple, rose, and peach",
      "boozeScale": 122,
      "price": 1400,
      "inStock": true,
      "rating": 87,
      "imageUrl": "../images/Kings_Ridge_Riesling.jpg",
      "__v": 0,
      "categories": ["white", "floral"]
    },
    {
      "_id": "9",
      "name": "Infinite Monkey Theorem Malbec",
      "description": "Colorado provides the altitude and warmth that have become synonymous with great Malbec. Deep and rich in color, earthy with some raisin on the nose, yet the palate that's filled with black cherry, cocoa, and dried fig. The tannins on the finish make it easy to pair alongside braised meats or gourmet sausages, giving the wine an almost gamey note.",
      "tastingNotes": "Black Cherry, Cocoa, Dried Fig",
      "boozeScale": 196,
      "price": 2500,
      "inStock": true,
      "rating": 92,
      "imageUrl": "../images/TIMT-Malbec.jpg",
      "__v": 0,
      "categories": ["red", "fruity"]
    }
  ];
  this.getCategories = function(){
    var categories = [];
    
  };
  // cart
  this.cart = [];
  this.addToCart = function(wineID, quantity, price){
    for (var i = 0; i < this.cart.length; i++) {
      if(wineID == this.cart[i].wineID){
        this.cart[i].quantity  += Number(quantity);
        return;
      }
    }
    this.cart.push({
      wineID: wineID,
      quantity: Number(quantity),
      subtotal: Number(quantity)* (price/100)
    });
  };
  this.cartSubtotal = function(){
    var quantityTotal = 0;
    var totalCost = 0;
    for (var i = 0; i < this.cart.length; i++) {
      quantityTotal += this.cart[i].quantity;
      totalCost += this.cart[i].subtotal;
    }
    return {
      quantityTotal: quantityTotal,
      totalCost: totalCost
    };
  };
});
