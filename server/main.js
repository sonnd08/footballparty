import { Meteor } from 'meteor/meteor';
import publish from './publish'
Meteor.startup(() => {
  // code to run on server at startup
  publish();
});
