import { Meteor } from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';


Meteor.startup(() => {
  // code to run on server at startup
  Parties.remove({});
  Parties.insert({name: 'Item 1'});
});



