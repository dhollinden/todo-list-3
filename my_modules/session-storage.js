exports.store = function(item, value) {
    sessionStorage.setItem(item, JSON.stringify(value));
}

exports.retrieve = function(item) {
    return JSON.parse(sessionStorage.getItem(item));
}
