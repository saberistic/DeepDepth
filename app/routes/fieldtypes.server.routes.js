'use strict';

module.export = function(app) {
    var users = require('../../app/controllers/users');
    var fieldtypes = require('../../app/controllers/fieldtypes');

    //Fieldtype Routes
    app.route('/fieldtypes').get(fieldtypes.list).post(users.requiresLogin, fieldtypes.create);
    
    app.route('/fieldtypes/:fieldtypeId').get(fieldtypes.read).put(users.requiresLogin, fieldtypes.hasAuthorization, fieldtypes.update).delete(users.requiresLogin, fieldtypes.hasAuthorization, fieldtypes.delete);
    
    // Finish by binding the Fieldtype middleware
	app.param('fieldtypeId', fieldtypes.fieldtypeByID);
};