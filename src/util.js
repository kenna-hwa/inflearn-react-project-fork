"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIsValidEnumValue = void 0;
function getIsValidEnumValue(enumObject, value) {
    return Object.keys(enumObject)
        .filter(key => isNaN(Number(key)))
        .some(key => enumObject[key] === value);
}
exports.getIsValidEnumValue = getIsValidEnumValue;
