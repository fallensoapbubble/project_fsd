

const mongoose = require("mongoose");

const {OrdersSchms} = require("../schemas/OrdersSchema")

const OrdersMdl = mongoose.model("orders",OrdersSchms);

module.exports = OrdersMdl;
