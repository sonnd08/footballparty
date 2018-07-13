var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matchSchema = new Schema({
  email:{
    type: String,
    unique: true,
    required: true,
    max: 500,
  },
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