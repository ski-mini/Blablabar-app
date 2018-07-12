Template.navbar.events({
  'click .brand': function() {
    FlowRouter.go('/');
  },
  'click #home': function() {
    FlowRouter.go('/');
    $(".navbar button.custom-navbar-button ").click();
  },
  'click #search': function() {
    FlowRouter.go('/group/search');
    $(".navbar button.custom-navbar-button ").click();
  },
  'click #create': function() {
    FlowRouter.go('/group/create');
    $(".navbar button.custom-navbar-button ").click();
  }
});

Template.navbar.helpers({
    currentRoute: function(){
        return FlowRouter.getRouteName();
    }
});