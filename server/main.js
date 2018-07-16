import { Meteor } from 'meteor/meteor';
import {Grounds} from '../lib/collections/grounds'
import {Users} from '../lib/collections/users'
import {Comments} from '../lib/collections/comments'
import {Clubs} from '../lib/collections/clubs'
import {Matchs} from '../lib/collections/matchs'

Meteor.publish('grounds', function () {
  return Grounds.find();
});

Meteor.publish('users', function () {
  return Users.find();
});

Meteor.publish('comments', function () {
  return Comments.find();
});


Meteor.publish('clubs', function () {
  return Clubs.find();
});


Meteor.publish('matchs', function () {
  return Matchs.find();
});

// Meteor.startup(() => {
//   // code to run on server at startup
//   // 
// });