Meteor.startup(function() {

    Template.groupSee.onCreated(function() {
        Tracker.autorun(function() {
            if (GroupsHandle.ready()) {
                var group = Groups.findOne(FlowRouter.getParam('groupId'));
                Session.set('group', {result: group, error: false});

                Meteor.call('users.findOne', group.author, function (err, result){
                    if(!err){
                        Session.set('author', {result: result, error: false});
                    }
                    else{
                        Session.set('author', {result: false, error: err.reason});
                    }
                });

                Meteor.call('gmaps.dataByPlace', group.gmapPlaceId, function (err, id){
                    if(!err){
                        json = JSON.parse(id);
                        Session.set('place', json.result);
                    }
                });
            }
        });
    });

    Template.groupSee.helpers({
        group: function(){
            return Session.get('group');
        },
        author: function(){
            return Session.get('author');
        }
    });

});