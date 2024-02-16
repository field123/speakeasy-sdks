# Schedules
(*schedules*)

## Overview

You can schedule your billing and payment runs. By scheduling billing and payment runs, you automate the process, reducing manual intervention and ensuring the jobs are run in a timely manner.  You can define a schedule in the format (`* * * * *`) which is a set of five fields in a line, indicating when a job should be executed. For example, you can define a schedule so that your job runs multiple times a day, or runs on specific days and months.

Subscriptions runs on Coordinated Universal Time (UTC) time and conforms to [**RFC 3339**](https://www.rfc-editor.org/rfc/rfc3339). 

### Unrestricted fields

Setting a field to an asterisk (`*`) is sometimes referred to as leaving a field unrestricted because it is not restricted to a specific value.

You can use the asterisk (`*`) to indicate the range of all values for the field. When you use the asterisk, the first value in the range is: 0 for the minute, hour, and day of the week (Sunday) fields, and 1 for day of the month and the month fields.

### Configuring fields

The time fields have the following format and possible values and must be specified in the following order:

| Field | Format | Description  |                                                                                                    
| --- | --- | -----|
| Minute | 0-59 | Indicates how far past the top of the hour your job runs, in minutes. For example if a minute is set to 0, then the job runs at the top of the hour because it is 0 minutes after the hour. This means if the hour is 8.00 AM, the job runs at 8.00 AM. |
| Hour | 0-23 | Indicates how far past midnight your job runs, in hours. This is rounded down to the nearest hours. This is because minutes are indicated by the minute field. |
| Day of the month | 0-31 | Indicates the calendar date of the month. For example, 1 for the first day of the month. |
| Month | 1-12 or JAN to DEC | Indicates the month. Specify the month number or the first three letters of the month name in uppercase. For example, 1 or JAN for January.  |
| Day of the week | 0-6 (or SUN to SAT, or 7 for Sunday) | Indicates the day of the week. Monday is 1, Tuesday is 2, and so on. Either 0 or 7 indicates Sunday. Alternatively, specify the day of the week using the first three letters of the weekday name in uppercase. For example SUN for Sunday. If you use this field with the day of the month field, then this field is evaluated as an inclusive OR. For example, if the day of the month is set to 1 and the day of the week is set to SAT, the job runs on the first day of the month and on every Saturday of the month, even if the first day of the month is not a Saturday. If the day of the week is marked by an asterisk (*) then the field is marked as unrestricted. This means the job only runs on the first day of the month. |

### Matching all values

To match all values for a field, set the field to an asterisk (`*`). When a field is set to an asterisk, the field matches all valid values for that field whenever the other field conditions are satisfied. 

 Here are some examples.

 - `* 0 1 1 1`: the job runs every minute of the midnight hour on January 1st and Mondays.
 - `* * * * *`: the job runs every minute (of every hour, of every day of the month, of every month, every day of the week, because each of these is unrestricted).

 ### Matching a range

 To match a range of values, specify your start and stop values, separated by a hyphen (`-`). Do not include spaces in the range. Ranges are inclusive. The first number must be less than the second number. If you are using abbreviated names for the month or weekday (for example, JAN instead of 1 for the first month of the year), the first value must come earlier in the month or week than the second value.

The following equivalent examples run at midnight on Mondays, Tuesdays, Wednesdays, Thursdays, and Fridays (for all months):

 - `0 0 * * 1-5`
 - `0 0 * * MON-FRI`

### Matching a list

Lists can contain any valid value for the field, including ranges. Specify your values, separated by a comma (,). Do not include spaces in the list.

Examples:

- `0 0,12 * * *`: the job runs at midnight and noon.
- `0-5,30-35 * * * *`: the job runs in each of the first five minutes of every half hour (at the top of the hour and at half past the hour).

### Skipping values in a range

You can skip values in a range by specifying a rate at which to step through the range. To do this, specify the range, followed by the forward slash (`/`) and the rate at which you want to skip through the range.

The step value cannot be larger than the largest possible value for the field. The default step is 1, so the step function `/1` is the same as not using a step function at all.

Example ranges that use step functions:

- `*/2`: this is a valid step function for any field. 
    - For the minute field, it matches 0, 2, 4, ... , 58. 
    - For the hour, it matches 0, 2, 4, ... , 22. 
    - For the day of the month, it matches 1, 3, 5, ... , 31 (for a month with 31 days). 
    - For the month, it matches 1, 3, 5, ... , 11. 
    - For the day of the week, it matches 0, 2, 4, 6.

- `0-12/2`: this is a valid step function for the minute and hour fields. It matches 0, 2, 4, ... , 12.

Example schedules using step functions:

- `*/2 * * * *`: the job runs every two minutes.
- `0 0-12/2 * * *`: the job runs every two hours, on the hour. The first run is at midnight. The last run is at noon.


### Available Operations

* [listSchedules](#listschedules) - List schedules
* [createSchedule](#createschedule) - Create a schedule
* [getSchedule](#getschedule) - Get a schedule
* [updateSchedule](#updateschedule) - Update a schedule
* [deleteSchedule](#deleteschedule) - Delete schedule

## listSchedules

List schedules

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.schedules.listSchedules({
    filter: "eq(name,Alan Turing)",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSchedulesRequest](../../models/operations/listschedulesrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListSchedulesResponse](../../models/operations/listschedulesresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## createSchedule

Create a schedule

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { JobType, SubscriptionScheduleType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.schedules.createSchedule({
    filter: "eq(name,Alan Turing)",
    requestBody: {
      data: {
        type: SubscriptionScheduleType.SubscriptionSchedule,
        attributes: {
          externalRef: "abc123",
          name: "Daily billing run.",
          specification: "30 0 * * *",
          location: "Europe/London",
          job: {
            jobType: JobType.BillingRun,
          },
        },
      },
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateScheduleRequest](../../models/operations/createschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateScheduleResponse](../../models/operations/createscheduleresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getSchedule

Get a schedule

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.schedules.getSchedule({
    scheduleUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetScheduleRequest](../../models/operations/getschedulerequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetScheduleResponse](../../models/operations/getscheduleresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateSchedule

Update a schedule

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { JobType, SubscriptionScheduleType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.schedules.updateSchedule({
    scheduleUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionScheduleType.SubscriptionSchedule,
        attributes: {
          externalRef: "abc123",
          name: "Daily billing run.",
          specification: "30 0 * * *",
          location: "Europe/London",
          job: {
            jobType: JobType.BillingRun,
          },
        },
      },
    },
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateScheduleRequest](../../models/operations/updateschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateScheduleResponse](../../models/operations/updatescheduleresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteSchedule

Delete schedule

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.schedules.deleteSchedule({
    scheduleUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteScheduleRequest](../../models/operations/deleteschedulerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteScheduleResponse](../../models/operations/deletescheduleresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
