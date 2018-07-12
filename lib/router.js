function checkLoggedIn (ctx, redirect) {
  if (!Meteor.userId()) {
    redirect('/login');
  }
}

function closeDropdown () {
  if($('.custom-navbar-button').attr('aria-expanded') == 'true')
    $('.custom-navbar-button').click();
}

var lastRoutePath;

function storeLastRoute (context) {
  newRoutePath = context.path;
  FlowRouter.lastRoutePath = lastRoutePath;
  lastRoutePath  = newRoutePath;
}

FlowRouter.route( '/', {
  triggersEnter: [ function(){
    $('body').addClass('home');
  }, storeLastRoute],
  triggersExit: [ function(){
    $('body').removeClass('home');
  }],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'home'
    });
  },
  name: 'home'
});

FlowRouter.route( '/login', {
  triggersEnter: [storeLastRoute],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'login'
    });
  },
  name: 'login'
});

FlowRouter.route( '/group/search', {
  triggersEnter: [storeLastRoute],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'search'
    });
  },
  name: 'groupSearch'
});

FlowRouter.route( '/group/create', {
  triggersEnter: [checkLoggedIn, storeLastRoute],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'create'
    });
  },
  name: 'groupCreate'
});

FlowRouter.route( '/group/see/:groupId', {
  triggersEnter: [storeLastRoute],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'groupSee'
    });
  },
  name: 'groupSee'
});

FlowRouter.route( '/group/create/description/:placeId', {
  triggersEnter: [checkLoggedIn, storeLastRoute],
  action: function(params) {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'adddescription'
    });
  },
  name: 'groupCreateDescription'
});

FlowRouter.route( '/group/success/:groupId', {
  triggersEnter: [checkLoggedIn, storeLastRoute],
  triggersExit: [ function(){
    delete Session.keys['group'];
  }],
  action: function(params) {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'groupsuccess'
    });
  },
  name: 'groupSuccess'
});

FlowRouter.route( '/profile/edit', {
  triggersEnter: [checkLoggedIn, closeDropdown, storeLastRoute],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'editProfile'
    });
  },
  name: 'editProfile'
});

FlowRouter.route( '/profile/privacy', {
  triggersEnter: [checkLoggedIn, storeLastRoute],
  action: function() {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'editPrivacy'
    });
  },
  name: 'editPrivacy'
});

FlowRouter.route( '/profile/public/:userId', {
  triggersEnter: [storeLastRoute],
  triggersExit: [ function(){
    delete Session.keys['profile'];
  }],
  action: function(params) {
    BlazeLayout.render( 'applicationLayout', {
      navbar: 'navbar',
      main: 'publicProfile'
    });
  },
  name: 'publicProfile'
});