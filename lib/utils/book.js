"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *  A collection of utils for processing book data
 */
function bookIsReserved(book) {
    var _a;
    return ((_a = book.availability) === null || _a === void 0 ? void 0 : _a.status) === "reserved";
}
exports.bookIsReserved = bookIsReserved;
function bookIsReady(book) {
    var _a;
    return ((_a = book.availability) === null || _a === void 0 ? void 0 : _a.status) === "ready";
}
exports.bookIsReady = bookIsReady;
function bookIsBorrowed(book) {
    var _a, _b;
    return (_b = (_a = book.fulfillmentLinks) === null || _a === void 0 ? void 0 : _a.length, (_b !== null && _b !== void 0 ? _b : 0)) > 0;
}
exports.bookIsBorrowed = bookIsBorrowed;
function bookIsOpenAccess(book) {
    var _a, _b;
    return (_b = (_a = book.openAccessLinks) === null || _a === void 0 ? void 0 : _a.length, (_b !== null && _b !== void 0 ? _b : 0)) > 0;
}
exports.bookIsOpenAccess = bookIsOpenAccess;
function bookIsBorrowable(book) {
    return typeof book.borrowUrl === "string";
}
exports.bookIsBorrowable = bookIsBorrowable;
