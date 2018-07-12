Meteor.startup(function () {

    sAlert.config({
        effect: 'stackslide',
        position: 'bottom',
        timeout: 2000,
        html: false,
        onRouteClose: true,
        stack: true,

        offset: 0, // in px 
        beep: false,

        onClose: _.noop //

    });

});