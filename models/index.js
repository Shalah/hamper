const User = require('./User');
const Order = require('./Order')
const Items_tb = require('./Items_tb')

Order.belongsTo(User, {
    foreignKey: 'order_id'
});

User.hasMany(Order, {
    foreignKey: 'order_id'
});

Items_tb.belongsToMany(Order, {
    foreignKey: 'list_of_items_id'
});


module.exports = { User, Order, Items_tb };
