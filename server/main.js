import { Meteor } from 'meteor/meteor';
import {Grounds} from '../lib/collections/grounds'

Meteor.publish('grounds', function () {
  return Grounds.find();
});

// Meteor.startup(() => {
//   // code to run on server at startup
//   // 
// });