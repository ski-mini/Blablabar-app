Template.editPrivacy.events({
    'click .open-profile': function() {
        FlowRouter.go('/profile/edit');
    },
    'click .see-public-profile': function() {
        FlowRouter.go('/profile/public/'+Meteor.userId());
    }
});