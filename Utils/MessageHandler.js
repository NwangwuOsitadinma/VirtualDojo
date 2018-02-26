exports.resourceNotFound = function() {
    return 'The resource you requested was not found. Please try again'
}
exports.resourceFound = function() {
    return 'The resource was retrieved successfully'
}
exports.success = function() {
    return 'The request was successful';
}
exports.failed = function() {
    return 'Something went wrong and the request was not successful';
}

exports.failedToUpdate = function() {
    return 'Something went wrong and the resource was not updated successfully';
}

exports.updateSuccessful = function() {
    return 'The resource was updated successfully';
}

exports.failedToDelete = function() {
    return 'Something went wrong and the resource could not be deleted';
}

exports.deleteSuccessful = function() {
    return 'The resource was deleted successfully';
}

exports.createSuccessful = function() {
    return 'The resource was created successfully';
}

exports.failedToCreate = function() {
    return 'The resource was created successfully';
}