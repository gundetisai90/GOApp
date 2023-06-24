const mongoose = require('mongoose');

const mongo= 'mongodb+srv://saireddygundeti902:Reddysai%409090@cluster0.dztlkr5.mongodb.net/GOFood';
//const mongo= "mongodb://localhost:27017/GOfood";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongo);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data=await fetched_data.find({}).toArray() 
    //console.log(data);
  } catch (error) {
    console.log('err: ', error);
  }
};
module.exports=mongoDB;