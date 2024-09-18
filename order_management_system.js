//TASK 1 - Create an Inventory Array of Product Objects:

let inventory = [
    { name: 'americano', price: 5, quantity: 8 },
    { name: 'latte', price: 7, quantity: 10 },
    { name: 'affogato', price: 9, quantity: 7 },
    { name: 'espresso', price: 8, quantity: 9}
];
//created an array of 4 coffee product objects

console.log(inventory);
//if you cannot see the inventory in the console.log, you can see it on the HTML page



//TASK 2 - Initialize orders array

let orders = [];
//created empty array 

console.log(orders);




//TASK 3 - Create a Function to Place an Order
function placeOrder(customerName, orderedItem) {
    let product = inventory.find(p => p.name === orderedItem.name);
    //locate the product in the inventory

    if (!product) {
        return `ERROR: The product, ${orderedItem.name} does not exist.`;
        //return an error if the product does not exist
    }
    if (product.quantity < orderedItem.quantity) {
        return `ERROR: There is insufficient stock for ${orderedItem.name}.`;
        //return an error if there is insufficient stock
    }
    product.quantity -= orderedItem.quantity;
     //if there are items available, subtract the ordered items from the inventory

    let newOrder = {
        customerName: customerName,
        item: orderedItem,
        status: 'pending'
    }; //created a new order with object properties 

    orders.push(newOrder);
    //used the push method to add the newOrder to the orders empty array
    console.log("Order placed:", newOrder);
    return newOrder;
};

placeOrder("Lana del rey", { name: 'latte', quantity: 1 });



//TASK 4 - Create a Function to Calculate Total for an Order:

function calculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        //using reduce and arrow method
        let product = inventory.find(p => p.name === item.name);
        //using find method to locate the name of the items in the inventory array 
        return total + (product ? product.price * item.quantity : 0); }, 0);
        //return the total value of what was ordered (price * quantity)
    };

    const sampleOrder = {
        customerName: 'Squidward',
        items: [{name: 'latte', quantity: 2}],
        status: 'pending'
    //created a sample order to check function 
    };

let total = calculateOrderTotal(sampleOrder);
//applied function to the sample order 
console.log(total);




