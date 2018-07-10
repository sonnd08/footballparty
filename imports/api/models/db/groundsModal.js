var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var groundSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    max: 100,
  },
  address: {
    type: String,
    required: true,
    max: 300,
  },
  imgURL:{
    type: String,
    required: true,
    max: 500,
  },
  rating:{
    type: Number,
    required:true,
    default: 0
  },
  description:{
    type: String,
    required:true
  },
  price:{
    type: Number,
    required: true,
  },
  dateAndTime: {
    type: Date,
    default: Date.now
  }
});

groundSchema.statics = {
  /**
   * @param  {} cb
   */
  // getAll: (cb) => {
  //   colorModel.find({}, cb);
  // }
}

const groundModel = mongoose.model('grounds', groundSchema);
module.exports = groundModel;