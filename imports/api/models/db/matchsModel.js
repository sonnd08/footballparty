var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matchSchema = new Schema({
  email:{
    type: String,
    unique: true,
    required: true,
    max: 500,
  },
  name: {
    type: String,
    required: true,
    max: 100,
  },
  avatar: {
    type: String,
    required: true,
    max: 300,
  },
  password:{
    type: String,
    required:true,
  },
  title:{
    type: String
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

matchSchema.statics = {
  /**
   * @param  {} cb
   */
  getAll: (cb) => {
    matchModel.find({}, cb);
  }
}

const matchModel = mongoose.model('matchs', matchSchema);
module.exports = matchModel;