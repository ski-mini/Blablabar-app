Template._loginButtonsLoggedOutDropdown = Template.my_loginButtonsLoggedOutDropdown;
Template._loginButtonsLoggedInDropdown = Template.my_loginButtonsLoggedInDropdown;
Template._loginButtonsLoggedInDropdownActions = Template.my_loginButtonsLoggedInDropdownActions;

Template.my_loginButtonsLoggedInDropdownActions.events({
    'click #login-buttons-open-profile': function() {
        FlowRouter.go('/profile/edit');
    }
});