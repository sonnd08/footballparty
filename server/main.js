import { Meteor } from 'meteor/meteor';
import {Grounds} from '../lib/collections/grounds'
import {Users} from '../lib/collections/users'

Meteor.publish('grounds', function () {
  return Grounds.find();
});

Meteor.publish('users', function () {
  return Users.find();
});
// Meteor.startup(() => {
//   // code to run on server at startup
//   // 
// });