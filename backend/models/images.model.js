const moongose = require('mongoose');

const imagesSchema = new moongose.Schema({
    modelId: {
        type: String,
        enum:['plans','users','employes'],
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    
});



module.exports = moongose.model('images', imagesSchema);