/**
 * Created by migdonio1 on 10/4/16.
 */
'use strict';

var employees = require('../controllers/employees.server.controller');

module.exports = function (app) {
    app.route('api/employees')
        .get(employees.list)
        .post(employees.create);

    app.route('api/employees/:employeeId')
        .get(employees.read)
        .put(employees.update)
        .delete(employees.delete);

    app.param('employeeId', employees.employeeById);
};
