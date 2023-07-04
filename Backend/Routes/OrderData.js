const express = require("express");
const router = express.Router();
const Orders = require("../model/Orders")

router.post("/orderdata", async (req,res)=>{
    let data = req.body.order_data;
    await data.splice(0,0,{order_date:req.body.order_date});

    let EID = await Orders.findOne({email:req.body.email});
    console.log(EID);
   if(EID === null)
   {
    try {
        await Orders.create({
            email:req.body.email,
            order_data : [data]
        }).then(()=>{
            res.json({success:true})
        })
    } catch (error) {
        console.log(error.message)
        res.send("server error",error.message)
    }
   }
   else{
    try {
        Orders.findOneAndUpdate({email:req.body.email},
            {$push:{order_data:data}}).then(()=>{
                res.json({success:true})
            })
    } catch (error) {
        console.log(error.message)
        res.send("server error",error.message)
    }
   }
})

router.post("/Myorderdata", async (req,res)=>{
    try {
        let mydata = await Orders.findOne({email:req.body.email})
        res.json({order_data:mydata})
    } catch (error) {
        console.log(error.message)
        res.send("server error",error.message)
    }
})

module.exports = router;