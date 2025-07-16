const {SweetShop} = require('../index.js');

describe("sweetShop",()=>{
// Test that a sweet is added successfully and returned in the sweets array
    test('should add the sweet with valid inputs and return the sweets array',()=>{
         const shop=new SweetShop();
         const result=shop.addSweet("Dairy Milk","Chocolate",10,20);
         expect(result.length).toBe(1);
         expect(result[0].name).toBe("Dairy Milk");

    });

})
