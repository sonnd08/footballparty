var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  userId:{
    type: Schema.ObjectId,
    required:true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  userAvatar: {
    type: String,
    required: true,
  },
  rating:{
    type: Number,
    required: true,
  },
  groundId:{
    type: Schema.ObjectId,
    required:true
  },
  comment:{
    type: String,
    required:true
  },
  userTitle:{
    type: String,
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