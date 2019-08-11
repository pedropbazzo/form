const { Schema, model } = require('mongoose');

const massaSchema = new Schema({
    massa: {
        type: String,
        required: true,
    },
});