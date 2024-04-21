const {Router}=require("express")
const { vehicles} = require("../models/index");

const vehicalRouter=Router()


vehicalRouter.post("/add",async(req,res)=>{
    try{
        const data=await vehicles.create(req.body)
        res.status(200).send({"message":"Vehicle added Successfully","data":data})

    }catch(error){
res.status(401).send({"message":error.message})
    }
})


vehicalRouter.get("/getvehicle", async (req, res) => {
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



vehicalRouter.patch("/update/:id", async (req, res) => {
    const {status}=req.body
    try {
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



  module.exports={
    vehicalRouter
  }