exports.store = function(item, value) {
    localStorage.setItem(item, JSON.stringify(value));
}

exports.retrieve = function(item) {
    return JSON.parse(localStorage.getItem(item));
}
