// REAL LIFE EXAMPLE: ORDER SYSTEM ------------

import { EventEmitter } from 'events';

const orderEvents = new EventEmitter();

// sending email --------
orderEvents.on("order:placed", (order) => {
    console.log(`📧 Email sent to ${order.customerEmail}`);
    console.log(`   Subject: Order #${order.id} confirmed!`);
});

// sending SMS ---------
orderEvents.on("order:placed", (order) => {
    console.log(`SMS send to ${order.phone}`);
    console.log(`Message: Your order of ₹${order.total} is confirmed.`);
});

// update inventory ----------
orderEvents.on("order:placed", (order) => {
    console.log(`Inventory updated:`);
    order.items.forEach(item => {
        console.log(` -${item.name}: stock reduced by ${item.qty}`);
    });
});

orderEvents.on("order:placed", (order) => {
    console.log(`🏭 Warehouse notified for Order #${order.id}`);
});


const placeOrder = (orderData) => {
    console.log(`\n Processing order #${orderData.id}....`);

    console.log("💾 Order saved to database");

    orderEvents.emit("order:placed", orderData);
}

// real order --------------
const newOrder =  {
    id: "ORD-2026-07",
    customerEmail: "xyz@x.com",
    phone: "+91-8630287394",
    total: 82563,
    items: [
        {name: "iphone 15", qty: 1},
        { name: "Phone Case", qty: 2 }
    ]
};

placeOrder(newOrder);