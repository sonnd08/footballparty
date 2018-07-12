var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  userID:{
    type: Schema.ObjectId,
    required:true,
  },
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
  rating:{
    type: String,
    required: true,
    max: 500,
  },
  groundID:{
    type: Number,
    required:true,
    default: 0
  },
  comment:{
    type: String,
    required:true
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

commentSchema.statics = {
  /**
   * @param  {} cb
   */
  getAll: (cb) => {
    commentsModel.find({}, cb);
  }
}

const commentsModel = mongoose.model('comments', commentSchema);
module.exports = commentsModel;