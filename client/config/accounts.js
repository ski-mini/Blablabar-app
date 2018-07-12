import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes']
  },
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});

accountsUIBootstrap3.setLanguage('fr');

accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  FlowRouter.redirect('/');
};

Accounts.onLogin(function() {
    //FlowRouter.go('/');
    sAlert.success('Bienvenue '+Meteor.user().username+' !');
});