//npm init -y
//npm i express
//npm i body-parser cors dotenv mongoose passport passport-local passport-local-mongoose
require("dotenv").config();

const e = require("express");

const port = process.env.PORT || 3002;
const url = "mongodb://localhost:27017/";
// url=process.env.mongo_url;

const app = e();


const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.listen(3002, () => {
  console.log("Running at http://localhost:3002");
});

const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://localhost:27017/zerodha");
}

app.get("/allHoldings", async (req, res) => {
  const { holdings } = await require("./data.js");
  const HoldingMdl = await require("../backend/models/Holdingsmdl.js");
  var allHoldings = await HoldingMdl.find({});
  res.json(allHoldings);
});



app.get("/allPositions", async (req, res) => {
  const { positions } = await require("./data.js");
  const PositionsMdl = await require("../backend/models/PositionsModel.js");
  var allPositions = await PositionsMdl.find({});
  res.json(allPositions);
});

app.get("/", (req, res) => {
  res.send("hey");
});




const OrdersMdl = require("./models/OrderModel.js");

app.get("/allOrders", async (req, res) => {
  var allOrders = await OrdersMdl.find({});
  res.json(allOrders);
});

app.post("/newOrder",async (req,res)=>{
  let newOrder = new OrdersMdl({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode
  });

  await newOrder.save();

  res.send("Order recieved");

});


