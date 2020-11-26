"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChristmasDay = exports.isVeteransDay = exports.isThanksgivingDays = exports.isMlkJrDay = exports.isMemorialDay = exports.isLaborDay = exports.isIndependenceDay = exports.isEndOfYearNewYear = exports.isNewYear = void 0;
const moment_business_days_1 = __importDefault(require("moment-business-days"));
exports.isNewYear = (aMoment) => {
    var newYearsDay = moment_business_days_1.default('01-01-2021', 'MM-DD-YYYY').year(aMoment.year());
    if (newYearsDay.day() === 0) {
        newYearsDay.add('1', 'days');
    }
    else if (newYearsDay.day() === 6) {
        return false;
    }
    return newYearsDay.format('l') === aMoment.format('l');
};
exports.isEndOfYearNewYear = (aMoment) => {
    var newYearsDay = moment_business_days_1.default('01-01-2021', 'MM-DD-YYYY').year(aMoment.year() + 1);
    if (newYearsDay.day() === 6) {
        newYearsDay.subtract('1', 'days');
        return newYearsDay.format('l') === aMoment.format('l');
    }
    return false;
};
exports.isIndependenceDay = (aMoment) => {
    var independenceDay = moment_business_days_1.default('07-04-2021', 'MM-DD-YYYY').year(aMoment.year());
    if (independenceDay.day() === 0) {
        independenceDay.add('1', 'days');
    }
    else if (independenceDay.day() === 6) {
        independenceDay.subtract('1', 'days');
    }
    return independenceDay.format('l') === aMoment.format('l');
};
exports.isLaborDay = (aMoment) => {
    var laborDay = moment_business_days_1.default('09-01-2021', 'MM-DD-YYYY').year(aMoment.year());
    while (laborDay.day() !== 1) {
        laborDay.add('1', 'days');
    }
    return laborDay.format('l') === aMoment.format('l');
};
exports.isMemorialDay = (aMoment) => {
    var memorialDay = moment_business_days_1.default('05-31-2021', 'MM-DD-YYYY').year(aMoment.year());
    while (memorialDay.day() !== 1) {
        memorialDay.subtract('1', 'days');
    }
    return memorialDay.format('l') === aMoment.format('l');
};
exports.isMlkJrDay = (aMoment) => {
    var mlkJrDay = moment_business_days_1.default('01-01-2021', 'MM-DD-YYYY').year(aMoment.year()).add('14', 'days');
    while (mlkJrDay.day() !== 1) {
        mlkJrDay.add('1', 'days');
    }
    return mlkJrDay.format('l') === aMoment.format('l');
};
exports.isThanksgivingDays = (aMoment) => {
    var thanksgivingDay = moment_business_days_1.default('11-22-2021', 'MM-DD-YYYY').year(aMoment.year());
    var dayAfterthanksgivingDay = moment_business_days_1.default('11-23-2021', 'MM-DD-YYYY').year(aMoment.year());
    while (thanksgivingDay.day() !== 4) {
        thanksgivingDay.add('1', 'days');
        dayAfterthanksgivingDay.add('1', 'days');
    }
    return thanksgivingDay.format('l') === aMoment.format('l') || dayAfterthanksgivingDay.format('l') === aMoment.format('l');
};
exports.isVeteransDay = (aMoment) => {
    var veteransDay = moment_business_days_1.default('11-11-2021', 'MM-DD-YYYY').year(aMoment.year());
    if (veteransDay.day() === 0) {
        veteransDay.add('1', 'days');
    }
    else if (veteransDay.day() === 6) {
        veteransDay.subtract('1', 'days');
    }
    return veteransDay.format('l') === aMoment.format('l');
};
exports.isChristmasDay = (aMoment) => {
    var christmasDay = moment_business_days_1.default('12-25-2021', 'MM-DD-YYYY').year(aMoment.year());
    if (christmasDay.day() === 0) {
        christmasDay.add('1', 'days');
    }
    else if (christmasDay.day() === 6) {
        christmasDay.subtract('1', 'days');
    }
    return christmasDay.format('l') === aMoment.format('l');
};
let config = {
    workingWeekdays: [1, 2, 3, 4, 5],
    holiday: (aMoment) => {
        return exports.isNewYear(aMoment) || exports.isMlkJrDay(aMoment) || exports.isMemorialDay(aMoment) || exports.isIndependenceDay(aMoment)
            || exports.isLaborDay(aMoment) || exports.isVeteransDay(aMoment) || exports.isThanksgivingDays(aMoment) || exports.isChristmasDay(aMoment) || exports.isEndOfYearNewYear(aMoment);
    }
};
moment_business_days_1.default.updateLocale('us', config);
exports.default = moment_business_days_1.default;
//# sourceMappingURL=app.js.map