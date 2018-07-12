Meteor.methods({
    'users.findAll'(){
        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        var usersSecuredInfos = [];
        Meteor.users.find().fetch().forEach(function(user){
            usersSecuredInfos.push(getPublicInfos(user));
        });
        //console.log(usersSecuredInfos);
        return usersSecuredInfos;
    },
    'users.findOne'(userId){
        // if (! Meteor.userId()) {
        //     throw new Meteor.Error('not-authorized');
        // }
        return getPublicInfos(Meteor.users.findOne(userId));
    }
});

function getPublicInfos(user) {

    var securedInfos = {};
    var privacy = user.profile.privacy;

    securedInfos.username = user.username;
    securedInfos.gender   = user.profile.gender;
    securedInfos.bio      = user.bio;
    securedInfos.website  = user.website;

    //infos visibles ou pas
    if(privacy && privacy.firstName && privacy.firstName === 1)
        if(user.profile.firstName)
            securedInfos.firstName = user.profile.firstName;
    else
        if(user.profile.firstName)
            securedInfos.firstName = user.profile.firstName;

    if(privacy && privacy.lastName && privacy.lastName === 1)
        if(user.profile.lastName)
            securedInfos.lastName = user.profile.lastName;
    else
        if(user.profile.lastName)
            securedInfos.lastName = user.profile.lastName;

    if(privacy && privacy.birthday && privacy.birthday === 1)
        if(user.profile.birthday)
            securedInfos.birthday = user.profile.birthday;
    else
        if(user.profile.birthday)
            securedInfos.birthday = user.profile.birthday;

    if(privacy && privacy.email && privacy.email === 1)
        if(user.profile.email)
            securedInfos.email = user.profile.email;
    else
        if(user.profile.email)
            securedInfos.email = user.profile.email;

    if(privacy && privacy.country && privacy.country === 1)
        if(user.profile.country)
            securedInfos.country = user.profile.country;
    else
        if(user.profile.country)
            securedInfos.country = user.profile.country;

    if(privacy && privacy.region && privacy.region === 1)
        if(user.profile.region)
            securedInfos.region = user.profile.region;
    else
        if(user.profile.region)
            securedInfos.region = user.profile.region;

    if(privacy && privacy.city && privacy.city === 1)
        if(user.profile.city)
            securedInfos.city = user.profile.city;
    else
        if(user.profile.city)
            securedInfos.city = user.profile.city;

    return securedInfos;

}