const User = require('./user');
const Order = require('./Order');
const Items_tb = require('./Items_tb');
const Item = require('./item');
const Order_status = require('./Order_status');
const OrderItem = require('./OrderItem')

// These are the various relationships between tables
Order.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
});

Items_tb.belongsToMany(Order, {
  foreignKey: 'items_id',
  through: OrderItem
});

Order.belongsToMany(Items_tb, {
  foreignKey: 'order_id',
  through: OrderItem
});

Order_status.hasMany(Order, {
  foreignKey: 'order_status_id'
});

Order.belongsTo(Order_status, {
  foreignKey: 'order_status_id'
})

// Order.hasOne(Order_status,{
//   foreignKey: 'order_id'
// }) 

// Order_status.belongsTo(Order,{
//   foreignKey: 'order_id'
// })


module.exports = { User, Order, Items_tb, Order_status, OrderItem, Item };
