class SweetShop {
  constructor() {
    this.sweets = [];
    this.id = 0;
  }

  // Defines the addSweet function that validates input, generates a new sweet ID, and adds the sweet to the shop's inventory.

  addSweet(name, category, price, quantity) {
    //Validation for the if the required field is missing
    if (!name || !category || price == undefined || quantity == undefined) {
      return new Error("All Fields Are Required");
    }

    //validation for the price greater than equal to 0
    if (price <= 0) {
      return new Error("The Price Has to be Greater Than 0");
    }
    // validation for the quantity greater than qual to 0
    if (quantity <= 0) {
      return new Error("The Quantity should be Greater than zero(0)");
    }

    //auto increment id
    this.id = this.id + 1;

    // added the new sweet to the array
    const newSweet = { id: this.id, name, category, price, quantity };
    this.sweets.push(newSweet);

    //returning the new sweet array
    return this.sweets;
  }

  deleteSweet(id) {
    //add the functionality to the delete the item
    const index = this.sweets.findIndex((s) => s.id == id);
    //validate if id is present
    if (index === -1) {
      return new Error("Sweet with given ID not found");
    }
    // removes the given sweet id from the sweets array
    this.sweets.splice(index, 1);

    return this.sweets;
  }

  viewSweet() {
    //return all the currently present sweets
    return this.sweets;
  }

  searchSweets({ name, category, minPrice, maxPrice }) {
    let results = this.sweets;
    //search by name  functionality implemented
    if (name) {
      results = results.filter((sweet) =>
        sweet.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    //search by category  functionality implemented
    if (category) {
      results = results.filter(
        (sweet) => sweet.category.toLowerCase() === category.toLowerCase()
      );
    }

    //search by pricerange  functionality implemented

    if (minPrice !== undefined) {
      results = results.filter((sweet) => sweet.price >= minPrice);
    }

    if (maxPrice !== undefined) {
      results = results.filter((sweet) => sweet.price <= maxPrice);
    }

    return results;
  }

  purchaseSweet(id, quantity) {
    const sweet = this.sweets.find((s) => s.id === id);
    sweet.quantity -= quantity;
    return sweet;
  }
}

module.exports = { SweetShop };
