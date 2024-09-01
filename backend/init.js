//initialization logic

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

const initDBh = async () => {
  const { holdings } = await require("./data.js");
  const HoldingMdl = await require("../backend/models/Holdingsmdl.js");
  //clear all data in dbs
  await HoldingMdl.deleteMany({});
  //now add from data.js
  await HoldingMdl.insertMany(holdings);
  await console.log("holding data was initialized");
};

const initDBp = async () => {
  const { positions } = await require("./data.js");
  const PositionsMdl = await require("../backend/models/PositionsModel.js");
  //clear all data in dbs
  await PositionsMdl.deleteMany({});
  //now add from data.js
  await PositionsMdl.insertMany(positions);
  await console.log("positions data was initialized");
};

// //to initialize do:
// //$ node init.js
initDBh();
initDBp();
