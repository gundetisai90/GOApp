const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost:27017/GOFood';

mongoDB().catch(err => console.log(err));

async function mongoDB() {
  await mongoose.connect(mongoUri, {useNewUrlParser: true});

  console.log("connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const fetched_data = await mongoose.connection.db.collection("food_item");
  fetched_data.find({}).toArray(
    function(err,data){
      if(err)
      {
        console.log(err);
      }
      else{
        console.log(data);
      }
    }
  )

}
module.exports=mongoDB;