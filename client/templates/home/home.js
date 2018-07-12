Template.home.events({
  'click .search': function() {
    FlowRouter.go('/group/search');
  },
  'click .create': function() {
    FlowRouter.go('/group/create');
  }
});
