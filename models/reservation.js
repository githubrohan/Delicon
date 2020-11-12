const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const reservationSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  contact:{
    type:Number,
    required:true
  },
  table:{
    type:Number,
    required:true
  }
  
});

module.exports=mongoose.model('Reservation',reservationSchema);

