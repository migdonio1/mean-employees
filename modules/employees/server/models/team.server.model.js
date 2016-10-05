/**
 * Created by migdonio1 on 10/4/16.
 */
'use strict';

var moment = require('moment-timezone'),
    mongoose  = require('mongoose'),
    Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: {
        type: String,
        default: '',
        trim: true,
        required: 'El nombre no puede estar en blanco'
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    created: {
        type: Date,
        default: moment().tz("America/Los_Angeles").format()
    }
});

mongoose.model('Team', TeamSchema);
