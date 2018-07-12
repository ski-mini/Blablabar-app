Groups = new Mongo.Collection("groups");

Groups.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Nom de la sortie",
        max: 200
    },
    author: {
        type: String,
        autoValue: function(){ return this.userId }
    },
    description: {
        type: String,
        label: "Description",
        optional: true,
        max: 1000,
        autoform: {
            rows: 5
        }
    },
    number: {
        type: Number,
        label: "Nombre de participant maximum",
        min: 1,
        max: 50
    },
    visibility: {
        type: Number,
        allowedValues: [
            1,
            2,
            3
        ],
        label: "Type",
        autoform: {
            options: [{
                label: "Privé",
                value: 1
            },
            {
                label: "Public",
                value: 2
            },
            {
                label: "Invitation seulement",
                value: 3
            }]
        }
    },
    date: {
        type: String
    },
    time: {
        type: String,
        label: 'Heure'
    },
    gmapPlaceId: {
        type: String
    },
    gmapPlaceName: {
        type: String,
        optional: true
    },
    gmapPlaceCity: {
        type: String,
        optional: true
    },
    gmapPlaceLat: {
        type: String
    },
    gmapPlaceLng: {
        type: String
    }
}));