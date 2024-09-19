//TASK 1 - Create an Inventory Array of Product Objects:

let inventory = [
    { name: 'americano', price: 5, quantity: 8 },
    { name: 'latte', price: 7, quantity: 10 },
    { name: 'affogato', price: 9, quantity: 7 },
    { name: 'espresso', price: 8, quantity: 9}
];
//created an array of 4 coffee product objects



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



//TASK 5 - Create a Function to Mark an Order as Completed:

function completeOrder(customerName) {
    let customerOrder = orders.find(O => O.customerName === customerName);
    //using the find method to locate the customer name 

    if(customerOrder) {
        customerOrder.status = 'Completed';
        console.log(`Order for ${customerName} is completed.`);
        //if the customers order with the correct name was found

     } else {
      console.log(`ERROR: Order for ${customerName} was not found.`);
      //if the customers order with the wrong name was not found 
    }  
};

completeOrder('Lana del rey');
//output = Order for Lana del rey is completed.
completeOrder('Spongebob');
//output = ERROR: Order for Spongebob was not found.



//TASK 6 - Create a Function to Check Pending Orders:

function checkPendingOrder(order) {
    if (order.status === 'pending') {
        //used an if statement to check if the order is pending or not
        console.log(`Order for ${order.customerName}:`);
        //if the order is pending it wil console the customers name
        order.items.forEach(item => {
        //use the forEach method to iterate over each order in the orders array
        console.log(`${item.name}: ${item.quantity}`);});
        // if the order is pending it will console the item name and how much was ordered
        console.log(`Total: $${calculateOrderTotal(order)}`);
        //then it will calculate the total order

    } else {
        console.log(`Order for ${order.customerName} is not pending.`);
        //if the order is completed then it will console this ^
    }
};

let sampleOrder2 = {
    customerName: 'Patrick',
    items: [{name: 'espresso', quantity: 2}],
    status: 'pending'
};
//created a sample pending order 
let sampleOrder3 ={
    customerName: 'Marianna',
    items: [{name: 'espresso', quantity: 1}],
    status: 'completed'
};
//created a sample completed order 

checkPendingOrder(sampleOrder2);
checkPendingOrder(sampleOrder3);


