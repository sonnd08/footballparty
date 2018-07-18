import { Meteor } from 'meteor/meteor';
import {Grounds} from '../lib/collections/grounds'
import {Users} from '../lib/collections/user_profiles'
import {Comments} from '../lib/collections/comments'
import {Clubs} from '../lib/collections/clubs'
import {Matchs} from '../lib/collections/matchs'
import { check } from 'meteor/check'
import { Accounts } from 'meteor/accounts-base'
import { Promise } from 'core-js';
import { resolve } from 'url';
import { rejects } from 'assert';


Meteor.publish('grounds', function () {
  return Grounds.find();
});

Meteor.publish('user_profiles', function () {
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

Accounts.onCreateUser(function(options, user) {
  // if (options.profile) {
  //   user.profile = options.profile;
  // }
  Users.insert({
    meteorUserId: user._id,
    name:'Default name'
  })
  return user;
})
// Meteor.publish('matchs', function (keyword) {
//   check(keyword, String);
//   const matchedClubs = Clubs.find({name: new RegExp(`.*${keyword}.*`,'i')}).map(club=>club._id);
//   return Matchs.find({firstClubId:{$in:matchedClubs}});
// });

// Meteor.startup(() => {
//   // code to run on server at startup
//   // 
// });