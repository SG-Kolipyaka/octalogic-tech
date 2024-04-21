const express = require("express");
const cors=require("cors")
const dotenv = require('dotenv'); 
const db = require("./models/index");
const {userBookingRouter}=require("./Controllers/userBookingRoutes")
const {vehicalRouter}=require("./Controllers/vehicalsRoutes")
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors())

app.use("/api",userBookingRouter)
app.use("/api",vehicalRouter)


db.sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("Second Server Started");
  });
});

