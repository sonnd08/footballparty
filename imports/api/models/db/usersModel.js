var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    max: 100,
  },
  avatar: {
    type: String,
    required: true,
    max: 300,
  },
  email:{
    type: String,
    required: true,
    max: 500,
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

userSchema.statics = {
  /**
   * @param  {} cb
   */
  getAll: (cb) => {
    usersModel.find({}, cb);
  }
}

const usersModel = mongoose.model('users', userSchema);
module.exports = usersModel;