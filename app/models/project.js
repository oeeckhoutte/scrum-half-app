var mongoose = require("mongoose"),
    Schema = mongoose.Schema,
    Promise = require('mongoose').Promise

var ProjectSchema = new Schema({
    name:String,
    releases:Number
});

ProjectSchema.statics.findAll = function (callback) {
    var promise = new Promise;
    if (callback) promise.addBack(callback);
    this.find({}, promise.resolve.bind(promise));
    return promise;
}

console.log('Registering Model Project...');
mongoose.model('Project', ProjectSchema);
