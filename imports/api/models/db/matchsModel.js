var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var matchSchema = new Schema({
  firstClubId:{
    type: Schema.ObjectId,
    required: true,
    max: 500,
  },
  secondClubId:{
    type: Schema.ObjectId,
    max: 500,
  },
  groundId:{
    type: Schema.ObjectId,
    required:true,
    max: 500,
  },
  
  status:{
    type: String,
    required: true,
    max:50,
    default:"opening",
    enum:['opening', 'ended', 'private']
  },
  dateBegin:{
    type: Date,
    default:Date.now
  },
  dateEnd:{
    type: Date,
    default:Date.now
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