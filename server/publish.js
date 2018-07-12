Meteor.publish('Groups', function() {
  return Groups.find();
});