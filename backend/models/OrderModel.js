

const mongoose = require("mongoose");

const {OrdersSchm} = require("../schemas/OrdersSchema")

const OrdersMdl = mongoose.model("orders",OrdersSchm);

module.exports = OrdersMdl;


