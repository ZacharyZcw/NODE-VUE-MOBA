const mongoss = require('mongoose')

const schema = new mongoss.Schema({
    name: { type: String }
})

module.exports = mongoss.model('Category', schema)