/**
 * Created by migdonio1 on 10/4/16.
 */

'use strict';

var moment = require('moment-timezone'),
    mongoose  = require('mongoose'),
    Schema = mongoose.Schema;


var getNow = function () {
    return moment().tz("UTC").format();
};

var EmployeeSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'El nombre no puede estar en blanco'
    },
    lastName: {
        type: String,
        default: '',
        trim: true,
        required: 'El apellido no puede estar vacio'
    },
    birthday: {
        type: Date,
        default: getNow
    },
    salary: {
        type: Number,
        default: 0,
        min: 0
    },
    created: {
        type: Date,
        default: getNow
    },
    team: {
        type: Schema.ObjectId,
        ref: 'Team'
    }
});

mongoose.model('Employee', EmployeeSchema);
