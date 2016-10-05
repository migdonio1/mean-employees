/**
 * Created by migdonio1 on 10/4/16.
 */

'use strict';

var moment = require('moment-timezone'),
    mongoose  = require('mongoose'),
    Schema = mongoose.Schema;




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
        default: moment().tz("America/Los_Angeles").format()
    },
    salary: {
        type: number,
        default: 0,
        min: 0
    },
    created: {
        type: Date,
        default: moment().tz("America/Los_Angeles").format()
    },
    team: {
        type: Scheme.ObjectId,
        ref: 'Team'
    }
});

mongoose.model('Employee', EmployeeSchema);
