import {Meteor} from 'meteor/meteor';
import Grounds from '../imports/api/models/db/_meteor/grounds'
// Server: Publish the `Rooms` collection, minus secret info...

export default function () {
  Meteor.publish('grounds', function () {
    console.log(Grounds.find({}));
    return Grounds.find({});
  })};