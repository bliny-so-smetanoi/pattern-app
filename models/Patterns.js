const {Schema, model} = require('mongoose')

const schema = new Schema({
    type: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    features: [String],
    image: {type: String},
    link: {type: String}
}, {versionKey: false})

module.exports = model('Patterns', schema)