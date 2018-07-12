Template.publicProfile.events({
    'click .go-prev': function() {
        FlowRouter.go(FlowRouter.lastRoutePath);
    }
});

Template.publicProfile.onCreated(function() {

    var userId = FlowRouter.getParam('userId');
    Meteor.call('users.findOne', userId, function (err, result){
        if(!err){
            Session.set('profile', {result: result, error: false});
        }
        else{
            Session.set('profile', {result: false, error: err.reason});
        }
    });
});

Template.publicProfile.helpers({
    profile: function () {
        return Session.get('profile');
    },
});