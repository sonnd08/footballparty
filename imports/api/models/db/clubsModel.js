var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clubSchema = new Schema({
  founderId:{
    type: Schema.ObjectId,
    required:true,
    ref: 'users'
  },
  founderName:{
    type:String,
  },
  founderAvatar:{
    type:String,
  },
  name:{
    type:String,
    required:true,
    unique: true
  },
  avatar:{
    type: String,
    max: 500
  },
  rating:{
    type: Number,
    max: 5
  },
  dateCreated:{
    type: Date,
    default: Date.now()
  }
});

clubSchema.statics = {
  /**
   * @param  {} cb
   */
  getAll: (cb) => {
    clubModel.find({}, cb);
  }
}

const clubModel = mongoose.model('clubs', clubSchema);
module.exports = clubModel;