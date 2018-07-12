Template.editProfile.events({
  'click .privacy-checkup': function() {
    FlowRouter.go('/profile/privacy');
  }
});

Template.editProfile.onRendered(function() {
    $('.datepicker').pickadate({
            monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            today: 'Aujourd\'hui',
            clear: 'Effacer',
            close: 'Fermer',
            formatSubmit: 'dd-mm-yyyy',
            format: 'dd-mm-yyyy',
            selectMonths: true,
            selectYears: 100,
            min: -36500,
            max: true
        });
});