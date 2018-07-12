var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
    max: 100,
  },
  userAvatar: {
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
    type: Number,
    required:true,
    default: 0
  },
  userTitle:{
    type: Number,
    required: true,
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