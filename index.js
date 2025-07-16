 
class SweetShop{
constructor(){
    this.sweets=[];
    this.id=0;
}

// Defines the addSweet function that validates input, generates a new sweet ID, and adds the sweet to the shop's inventory.
 
addSweet(name,category,price,quantity){

    //Validation for the if the required field is missing
    if(!name || !category || price == undefined || quantity == undefined){
        return new Error("All Fields Are Required");
    }

    //validation for the price greater than equal to 0
    if(price<=0){
        return new Error("The Price Has to be Greater Than 0");
    }
   // validation for the quantity greater than qual to 0
    if(quantity<=0){
        return new Error("The Quantity should be Greater than zero(0)");
    }

    //auto increment id
    this.id=this.id+1;

    // added the new sweet to the array
    const newSweet={id:this.id,name,category,price,quantity};
    this.sweets.push(newSweet);

    //returning the new sweet array
    return this.sweets;
}

 }

module.exports={SweetShop};


