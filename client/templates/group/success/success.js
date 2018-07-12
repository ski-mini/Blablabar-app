Template.groupsuccess.events({
  'click .seegroup': function() {
    FlowRouter.go('/group/see/'+FlowRouter.getParam('groupId'));
  },
  'click .editgroup': function() {
    FlowRouter.go('/group/edit');
  },
  'click .invite': function() {
    FlowRouter.go('/group/invite');
  }
});
