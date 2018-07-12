Groups.allow({
    'insert': function (userId,doc) {
        if(userId)
            return true;
    }
});

Meteor.users.allow({
    'update': function (userId,doc) {
        if(userId)
            return true;
    }
});