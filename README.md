# business-days

A fork of moment-business-days whose premise is to allow the user to only utilize business days, typically Monday to Friday. Nonetheless, the user can customize (1) the business days and (2) holiday dates, respectively, whereby excluding these specific days as business days. Its functionality is evident on both the client-side and the server-side, respectively.

## Prerequisites

1. Please ensure that you have the LTS version of NodeJS/NPM installed on your workstation.

2. You will need to run this command at the root of your project:

    ```npm i business-days```

3. To conduct a test, you will need to run this command at the root of your project:

    ```npm test```

## Code Snippet

```typescript
const moment = require("business-days");

// Verifies that the date is a business day, returning either true or false.

// This code snippet has a date that falls on a Saturday, rendering it false.

moment('21-11-2020', 'DD-MM-YYYY').isBusinessDay()

// This code snippet has a date that falls on a Wednesday before Thanksgiving, rendering it true.

moment('26-11-2020', 'DD-MM-YYYY').isBusinessDay()

// This code snippet computes a difference of '5' business days.

let diff = moment('15-11-2020', 'MM-DD-YYYY').businessDiff(moment('08-11-2020','MM-DD-YYYY'));

// Given that '30-11-2020' ('DD-MM-YYYY') is Monday, this code snippet outputs
// Mon Nov 16 2020 00:00:00 GMT-0600 (CST).

moment('30-11-2020', 'DD-MM-YYYY').businessAdd(3)._d

// Given that '3-12-2020' ('DD-MM-YYYY') is Wednesday, this code snippet outputs
// Mon Nov 30 2020 00:00:00 GMT-0600 (CST).

moment('3-12-2020', 'DD-MM-YYYY').businessSubtract(3)._d

// This code snippet outputs the next business day for '30-11-2020' as
// Tue Dec 01 2020 00:00:00 GMT-0600 (CST)

moment('30-11-2020', 'DD-MM-YYYY').nextBusinessDay()._d

// This code snippet outputs the next business day for 25-11-2020 as
// Mon Nov 30 2020 00:00:00 GMT-0600 (CST)

moment('02-02-2015', 'DD-MM-YYYY').nextBusinessDay()._d

```

## Comparing and Contrasting the library Moment.js, the peer dependency

Moment.js objects are returned by the supervening methods, excluding both ```.isBusinessDay()``` and ```.businessDiff()```.

| **Method** | **Type** | **Description** |
| ------ | --------- | ----------- |
| ```.isHoliday()``` | ```boolean``` | This verifies that the date is a specified holiday, returning either ```true``` or ```false``` |
| ```.isBusinessDay()``` | ```boolean``` | This verifies that the date is a business day, returning either ```true``` or ```false``` |
| ```.businessDaysIntoMonth()``` | ```number``` | This computes the amount of business days in the month ```object```. |
| ```.businessDiff()``` | ```number``` | This computes the amount of business days between specified dates. |
| ```.businessAdd(days)``` | ```Moment[]``` | This adds the specified days excluding business days |
| ```.businessSubtract(days)``` | ```Moment[]``` | This subtract the specified days excluding business days |
| ```.nextBusinessDay()``` | ```Moment[]``` | This retrieves the next business day as an ```object``` |
| ```.prevBusinessDay()``` | ```Moment[]``` | This retrieves the previous business day as an ``object`` |
| ```.monthBusinessDays()``` | ```Moment[]``` | This retrieves an ```array``` of business days within the month as respective ```object```. |
| ```.monthNaturalDays()``` | ```Moment[]``` | This is akin to ```.monthBusinessDays()```, albeit it includes weekends. |
| ```.monthBusinessWeeks()``` | ```Moment[]``` | This retrieves an ```array``` of arrays, albeit such are manifesting business weeks, whereby an ```array``` (in this case, week) have its own predefined business days and ```objects``` represents days. |
| ```.monthNaturalWeeks()``` | ```Moment[]``` | This is akin to ```.monthBusinessWeeks()```, albeit it includes weekends. |
