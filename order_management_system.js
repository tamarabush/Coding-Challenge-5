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
// created empty array 

console.log(orders);



//TASK 3 - Create a Function to Place an Order
function placeOrder(customerName, orderedItems) {
    for (const item of orderedItems ) {
        const product = inventory.find(p => p.name === item.name);
        //finding product name in the inventory array 
        
        if (!product || product.quantity < item.quantity) {
            //checking if there is insffucient stock if quantity is greater than actual item in stock 
            return (`ERROR: Insufficient stock for ${item.name}.`);
        }

        (product.quantity -= item.quantity); } 
     
 orders.push ({
        customerName: customerName,
        items: orderedItems,
        status: 'Pending'
    });
}
const customerName = 'Lana Del Rey'
const orderedItems = [{name: 'americano', quantity: 2}];
placeOrder(customerName, orderedItems);
console.log(orders);
