/*
 * This file is a part of the achat project's source code.
 * Everything here is under the MIT source code license.
 */

function forEachJson(jsonObject, callback) {
    for (let key in jsonObject) {
        let value = jsonObject[key];
        callback(key, value);
    }
}

function forEachArray(array, callback) {
    array.forEach(function (value, index) {
        callback(value, index);
    });
}

function replaceAll(string, search, replace) {
    while (string.includes(search)) {
        string = string.replace(search, replace);
    }
    return string;
}
