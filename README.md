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
