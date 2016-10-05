/**
 * Created by migdonio1 on 10/4/16.
 */
'use strict';

var path = require('path'),
    mongoose = require('mongoose'),
    Employee = mongoose.model('Employee'),
    errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

exports.create = function(req, res) {
    var employee = new Employee(req.body);

    employee.team = req.team;

    employee.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(employee);
        }
    });
};

exports.read = function (req, res) {
    res.json(req.employee);
};

exports.update = function (req, res) {
    var employee = req.employee;

    employee.name = req.body.name;
    employee.lastname = req.body.lastname;
    employee.birthday = req.body.birthday;
    employee.salary = req.body.salary;

    employee.save(function (err) {
        if(err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(employee);
        }
    });
};

exports.delete = function (req, res) {
    var employee = req.employee;

    employee.remove(function (err) {
        if(err){
            return res.status(400).send( {
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.json(employee);
        }
    });
};

exports.list = function (req, res) {
    Employee.find().sort('-created').populate();
};
