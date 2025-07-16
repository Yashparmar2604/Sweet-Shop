const {SweetShop} = require('../index.js');

describe("SweetShop-AddSweet",()=>{
// Test that a sweet is added successfully and returned in the sweets array
    test('should add the sweet with valid inputs and return the sweets array',()=>{
         const shop=new SweetShop();
         const result=shop.addSweet("Dairy Milk","Chocolate",10,20);
         expect(result.length).toBe(1);
         expect(result[0].name).toBe("Dairy Milk");

    });

    test("should return an error if any required field is missing",()=>{


        const shop=new SweetShop();

        // Test: Missing 'name'
       // Expected: Should return an error stating all fields are required
        let result=shop.addSweet(undefined,"Indian Sweet",200,3);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("All Fields Are Required");

          // Test: Missing 'category'
        result=shop.addSweet("Kaju Katli",undefined,200,3);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("All Fields Are Required");
  
        // Test: Missing 'price'
        result=shop.addSweet("Kaju Katli","Indian Sweet",undefined,3);
       expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("All Fields Are Required");

        // Test: Missing 'quantity'
        result=shop.addSweet("Kaju Katli","Indian Sweet",200,undefined);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("All Fields Are Required");

    });

  // Test For the price less than zero of equal to zero
    test("should return an error if the price of the sweet is less than zero",()=>{
        const shop=new SweetShop();
        let result=shop.addSweet("Kaju Katli","Indian Sweet",0,3);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("The Price Has to be Greater Than 0");

        result=shop.addSweet("Kaju Katli","Indian Sweet",-50,3);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("The Price Has to be Greater Than 0");
    });


    //test for the quantity value is greater than or equal to zero

    test("should return an error if the quantity is of the sweet is less than zero",()=>{
        const shop=new SweetShop();
        let result=shop.addSweet("kaju Katli","Indian Sweet",200,-23);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("The Quantity should be Greater than zero(0)")
        result=shop.addSweet("kaju Katli","Indian Sweet",200,0);
        expect(result).toBeInstanceOf(Error);
        expect(result.message).toBe("The Quantity should be Greater than zero(0)")
        
    })


      // test for if the autoincrement is working fine or not

      test("should auto-increment ID for each added sweet", () => {
    const shop = new SweetShop();

    shop.addSweet("Kaju Katli", "Indian Sweet", 200, 10);
    shop.addSweet("Rasmalai", "Indian Sweet", 250, 5);
    shop.addSweet("Gulab Jamun", "Milk-Based", 100, 15);

    const sweets = shop.sweets;

    expect(sweets[0].id).toBe(1);
    expect(sweets[1].id).toBe(2);
    expect(sweets[2].id).toBe(3);
  });

})


describe("SweetShop-DeleteSweet",()=>{

    test("should delete a sweet by ID",()=>{
        const shop=new SweetShop();
       //added the sweet to the sweets array
        shop.addSweet("Kaju Katli","Indian Sweet",200,10);
        shop.addSweet("Dairy Milk","Chocolate",10,20);

        const result=shop.deleteSweet(1);
        // expect output from the defined function
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(2);

    });


    test("should return the same list if Id to delete does not exist",()=>{
        const shop = new SweetShop();

        shop.addSweet("Kaju Katli","Indian Sweet",200,10);
       //test for the invalid id in the sweets array
        const result=shop.deleteSweet(90);

         expect(result).toBeInstanceOf(Error);
         expect(result.message).toBe("Sweet with given ID not found");
    })
})


describe("SweetShop-ViewSweet",()=>{
   
     test("should return a list of all available sweets",()=>{
        const shop=new SweetShop();

        shop.addSweet("Kaju Katli","Indian Sweet",200,10);
        shop.addSweet("Dairy Milk","Chocolate",10,20);

        const result=shop.viewSweet();

        expect(result.length).toBe(2);
        expect(result[0].name).toBe("Kaju Katli");
        expect(result[1].name).toBe("Dairy Milk");

     })
})