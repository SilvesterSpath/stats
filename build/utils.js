"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeDateFormat = void 0;
function changeDateFormat(dateString) {
    const dateParts = dateString.split('/');
    const day = dateParts[0];
    const month = dateParts[1];
    const year = dateParts[2];
    const date = new Date(`${year}-${month}-${day}`);
    return date;
}
exports.changeDateFormat = changeDateFormat;
