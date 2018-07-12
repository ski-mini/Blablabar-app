Schema = {};

Schema.UserPrivacy = new SimpleSchema({
    firstName: {
        type: Number,
        allowedValues: [
            1,
            2
        ],
        label: "Prénom",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    },
    lastName: {
        type: Number,
        allowedValues: [
            1,
            2
        ],
        label: "Nom",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    },
    birthday: {
        type: Number,
        allowedValues: [
            1,
            2
        ],
        label: "Date de naissance",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    },
    email: {
        type: Number,
        allowedValues: [
            1,
            2
        ],
        label: "Adresse mail",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    },
    country: {
        type: Number,
        allowedValues: [
            1,
            2,
        ],
        label: "Pays",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    },
    region: {
        type: Number,
        allowedValues: [
            1,
            2
        ],
        label: "Région",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    },
    city: {
        type: Number,
        allowedValues: [
            1,
            2
        ],
        label: "Ville",
        autoform: {
            options: [{
                label: "Public",
                value: 1
            },
            {
                label: "Privé",
                value: 2
            }]
        }
    }
});

Schema.UserProfile = new SimpleSchema({
    firstName: {
        type: String,
        optional: true,
        label: "Prénom",
        max: 50
    },
    lastName: {
        type: String,
        optional: true,
        label: "Nom",
        max: 50
    },
    birthday: {
        type: String,
        optional: true,
        label: "Date de naissance"
    },
    gender: {
        type: Number,
        optional: true,
        allowedValues: [
            1,
            2
        ],
        label: "Genre",
        autoform: {
            options: [{
                label: "Homme",
                value: 1
            },
            {
                label: "Femme",
                value: 2
            }]
        }
    },
    website: {
        type: String,
        regEx: SimpleSchema.RegEx.Url,
        optional: true,
        label: "Site internet"
    },
    bio: {
        type: String,
        optional: true,
        max: 1000,
        label: "Parlez nous un peu de vous...",
        autoform: {
            rows: 5
        }
    },
    region: {
        type: String,
        optional: true,
        label: "Région"
    },
    country: {
        type: String,
        optional: true,
        label: "Pays"
    },
    city: {
        type: String,
        optional: true,
        label: "Ville"
    },
    privacy: {
        type: Schema.UserPrivacy,
        optional: true
    }
});

Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true,
        label: 'Nom d\'utilisateur'
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: 'Adresse mail'
    },
    "emails.$.verified": {
        type: Boolean,
        optional: true
    },
    // Use this registered_emails field if you are using splendido:meteor-accounts-emails-field / splendido:meteor-accounts-meld
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // In order to avoid an 'Exception in setInterval callback' from Meteor
    heartbeat: {
        type: Date,
        optional: true
    }
});

/* Todo : à voir (piste)
SimpleSchema.messages({
    'regEx firstName': "[label] can have alphabets only",
    'regEx lastName': "[label] can have alphabets only",
    passwordMismatch: 'Passwords do not match',
    duplicateEmail: 'Email already in use',
    notUnique: 'This [label] is already registered',
    'regEx password': "Password must be atleast 8 charachter long"
});
*/
Meteor.users.attachSchema(Schema.User);