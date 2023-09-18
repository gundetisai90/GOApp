const mongoose = require('mongoose');

const mongo = '';
// const mongo= "mongodb://localhost:27017/GOfood";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongo);
    console.log('Connected!');
    let fetched_data = mongoose.connection.db.collection("food_items");
    let data= await  fetched_data.find({}).toArray()
     let cat_data = mongoose.connection.db.collection("food_category");
     let catdata = await cat_data.find({}).toArray()

        //  console.log(catdata);
        //  console.log(data)
    //console.log(data);
   
    // console.log(catdata);
    global.food_items = data;
    global.food_category = catdata;
  } catch (error) {
    console.log('err: ', error);
  }

};
module.exports = mongoDB;
