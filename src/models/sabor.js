const { Schema, model } = require('mongoose');

const saborSchema = new Schema({
    sabor: {
        type: String,
        required: true,
    },
});