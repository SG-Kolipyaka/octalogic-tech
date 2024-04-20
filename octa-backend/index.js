const express = require("express");
const cors=require("cors")
const db = require("./models/index");
const { vehicles,userbookings} = require("./models/index");
const app = express();
app.use(express.json());
app.use(cors())
app.post("/api/add",async(req,res)=>{
    try{
        const data=await vehicles.create(req.body)
        res.status(200).send({"message":"Vehicle added Successfully","data":data})

    }catch(error){
res.status(401).send({"message":error.message})
    }
})


app.get("/api/getvehicle", async (req, res) => {
  try {
      const { wheels, type } = req.query;
      const condition = {};
      if (wheels) {
          condition.wheels = wheels; 
      }
      if (type) {
          condition.type = type; 
      }
      const data = await vehicles.findAll({
          where: condition 
      });
      res.status(200).send({ data });
  } catch (error) {
      res.status(401).send({ message: error.message });
  }
});



app.patch("/api/update/:id", async (req, res) => {
    const {status}=req.body
    try {
      //
      const data = await vehicles.update({status},{
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        isError: false,
        data,
      });
    } catch (error) {
      res.status(400).json({
        isError: true,
        error,
      });
    }
  });


  app.post("/api/userbookings",async(req,res)=>{
    try{
const userbooking=await userbookings.create(req.body)
res.status(200).send({"message":"Vehicle booked ","data":userbooking})
    }catch(error){
      res.status(400).json({
        isError: true,
        error,
      });
    }
  })


  app.get("/api/vehiclesbooked", async (req, res) => {
    try {
      vehicles.hasMany(userbookings, { foreignKey: "bookingID" });
      userbookings.belongsTo(vehicles, {
        foreignKey: "bookingID",
      });
      const data = await userbookings.findAll({
        include: [vehicles],
      });
      res.status(400).json({
        isError: true,
        data,
      });
    } catch (error) {
      res.status(400).json({
        isError: true,
        error,
      });
    }
  });


db.sequelize.sync().then(() => {
  app.listen(8082, () => {
    console.log("Second Server Started");
  });
});

