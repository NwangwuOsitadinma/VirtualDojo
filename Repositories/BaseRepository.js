function BaseRepository(model) {
    if (!model) throw new Error("A model must be provided");
    this.model = model;

    //   this.get =
}

BaseRepository.prototype.get = function(options, callback) {
    //Array.prototype.slice(arguments) == 
    this.model.find(options, callback);
}

BaseRepository.prototype.add = function(data, callback) {
    console.log(this);
    this.model.create(data, callback);
}


module.exports = function(model) {
    return new BaseRepository(model);
}