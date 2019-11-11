import { Meteor } from 'meteor/meteor';
import '../app/query';
import { createFixtures } from '../app/fixtures';

Meteor.startup(() => {
  // code to run on server at startup
  createFixtures();
});
