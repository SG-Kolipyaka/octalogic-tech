const {Router}=require("express")
const { userbookings,vehicles} = require("../models/index");

const userBookingRouter=Router()


userBookingRouter.post("/userbookings",async(req,res)=>{
    try{
const userbooking=await userbookings.create(req.body)
res.status(200).send({"message":"Vehicle booked ","data":userbooking})
    }catch(error){
      res.status(400).json({
        isError: true,
        error:error.message,
      });
    }
  })


  userBookingRouter.get("/vehiclesbooked", async (req, res) => {
    try {
      vehicles.hasMany(userbookings, { foreignKey: "bookingID" });
      userbookings.belongsTo(vehicles, {
        foreignKey: "bookingID",
      });
      const data = await userbookings.findAll({
        include: [vehicles],
      });
      res.status(200).json({
        isError: false,
        data,
      });
    } catch (error) {
      res.status(400).json({
        isError: true,
        error:error.message,
      });
    }
  });


  module.exports={
    userBookingRouter
  }