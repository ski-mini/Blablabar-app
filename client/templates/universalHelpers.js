Template.registerHelper('equals', (a1, a2) => {
    return a1 === a2;
});

Template.registerHelper( 'notEquals', ( a1, a2 ) => {
    return a1 !== a2;
});

Template.registerHelper('and', (a, b) => {
    return a && b;
});

Template.registerHelper('or', (a, b) => {
    return a || b;
});

Template.registerHelper('gender', (gender) => {
    if(typeof gender != 'undefined') {
        if(gender == 1) {
            return '<i class="fa fa-male" aria-hidden="true"></i>';
        } else {
            return '<i class="fa fa-female" aria-hidden="true"></i>';
        }
    }
    else {
        return '<i class="fa fa-male" aria-hidden="true"></i>';
    }
});

Template.registerHelper('visibility', (visibility) => {
    if(typeof visibility != 'undefined') {
        if(visibility == 1) {
            return '<i class="fa fa-lock" aria-hidden="true"></i> Privé';
        } else if(visibility == 2) {
            return '<i class="fa fa-world" aria-hidden="true"></i> Public';
        } else if(visibility == 3) {
            return '<i class="fa fa-envelope-o" aria-hidden="true"></i> Sur invitation';
        } else {
            return '<i class="fa fa-world" aria-hidden="true"></i> Public';
        }
    }
    else {
        return '<i class="fa fa-world" aria-hidden="true"></i> Public';
    }
});