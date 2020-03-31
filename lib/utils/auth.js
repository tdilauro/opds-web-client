"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateCredentials(username, password) {
    var btoaStr = btoa(username + ":" + password);
    return "Basic " + btoaStr;
}
exports.generateCredentials = generateCredentials;
