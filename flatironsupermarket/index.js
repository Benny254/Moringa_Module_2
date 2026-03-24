/*const items = ["apple", "banana", "cherry", "date", "elderberry"];

function purchaseItem(itemToPurchase, quantity){
    if(!items.includes(itemToPurchase)){
        console.log("Item not found")
    }
    return;
    }

    if(quantity <= 0){
        console.log("Invalid quantity")
    }
    return;

    let Price;
    if (itemToPurchase === "apple"){
        Price = 1.95 * quantity
    }
    else if (itemToPurchase === "banana"){
        Price = 2.95 * quantity
    }
    else if (itemToPurchase === "cherry"){
        Price = 3.95 * quantity
    }
    else if (itemToPurchase === "date"){
        Price = 4.95 * quantity
    }
    else if (itemToPurchase === "elderberry"){
        Price = 5.95 * quantity
    }

    return Price;*/

    const items = ["apple", "banana", "pineapple", "cherry", "date", "elderberry"];

function purchaseItem(itemToPurchase, quantity){
    if(!items.includes(itemToPurchase)){
       console.log("Error: Invalid item! Unable to complete purchase!");
        return;
   }

    if(isNaN(quantity)){
       console.log("Error: Invalid quantity! Unable to complete purchase!");
        return;
    }

    let price;

    if(itemToPurchase === "apple"){
        price = 1.99;
    }
    else if(itemToPurchase === "cherry"){
        price = 2.99;
    }
    else if(itemToPurchase === "date"){
        price = 3.99;
    }
    else if(itemToPurchase === "elderberry"){
        price = 4.99;
    }
    else if(itemToPurchase === "banana"){
        price = 0.99;
    }
    else if(itemToPurchase === "pineapple"){
        price = 2.99;
    }

    const totalPrice = price * quantity;
   console.log(`Thanks for shopping! You purchased ${quantity} ${itemToPurchase}(s). The total price is $${totalPrice}`);
}

console.log("Welcome to Flatiron Supermarket!");
purchaseItem("apple", 3);
purchaseItem("banana", 2);
purchaseItem("pineapple", 1);
purchaseItem("cherry", 4);
purchaseItem("date", 1);
purchaseItem("elderberry", 2);


        