 
class SweetShop{
constructor(){
    this.sweets=[];
    this.id=0;
}

// Defines the addSweet function that validates input, generates a new sweet ID, and adds the sweet to the shop's inventory.
 
addSweet(name,category,price,quantity){

    if(!name || !category || !price || !quantity){
        return new Error("All Fields Are Required");
    }
    this.id=this.id+1;
    const newSweet={id:this.id,name,category,price,quantity};
    this.sweets.push(newSweet);
    return this.sweets;
}

 }

module.exports={SweetShop};


