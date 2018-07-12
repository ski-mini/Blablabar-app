Meteor.startup(function() {

    Template.adddescription.onCreated(function() {
        var placeId = FlowRouter.getParam('placeId');
        Meteor.call('gmaps.dataByPlace', placeId, function (err, id){
            if(!err){
                json = JSON.parse(id);
                Session.set('place', json.result);
            }
        });
    });

    AutoForm.addHooks(['insertGroupForm'], {
        before: {
            insert: function(doc) {
                place = Session.get('place');
                doc.gmapPlaceId = FlowRouter.getParam('placeId');
                doc.gmapPlaceName = place.name;
                doc.gmapPlaceCity = place.formatted_address;
                doc.gmapPlaceLat = place.geometry.location.lat;
                doc.gmapPlaceLng = place.geometry.location.lng;
                return doc;
            }
        },
        onSuccess: function (operation, result, template) {
            FlowRouter.go('/group/success/'+this.docId);
        }
    });

    Template.adddescription.rendered = function () {
        $('.datepicker').pickadate({
            monthsFull: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
            weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
            today: 'Aujourd\'hui',
            clear: 'Effacer',
            close: 'Fermer',
            formatSubmit: 'dd-mm-yyyy',
            format: 'dd-mm-yyyy',
            min: true
        });

        $('.timepicker').pickatime({
            format: 'HH:i',
            formatLabel: '<b>HH</b>:i',
            formatSubmit: 'HH:i',
            hiddenPrefix: 'prefix__',
            hiddenSuffix: '__suffix',
            clear: 'Effacer',
            interval: 15
        });
     };

});

