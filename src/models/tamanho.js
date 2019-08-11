const { Schema, model } = require('mongoose');

const tamanhoSchema = new Schema({
    tamanho: {
        type: String,
        required: true,
    },
});