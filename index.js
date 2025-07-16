 
class SweetShop{
constructor(){
    this.sweets=[];
    this.id=0;
}

// Defines the addSweet function that validates input, generates a new sweet ID, and adds the sweet to the shop's inventory.
 
addSweet(name,category,price,quantity){

    if(!name || !category || price == undefined || quantity == undefined){
        return new Error("All Fields Are Required");
    }

    if(price<=0){
        return new Error("The Price Has to be Greater Than 0");
    }

    if(quantity<=0){
        return new Error("The Quantity should be Greater than zero(0)");
    }
    this.id=this.id+1;
    const newSweet={id:this.id,name,category,price,quantity};
    this.sweets.push(newSweet);
    return this.sweets;
}

 }

module.exports={SweetShop};


