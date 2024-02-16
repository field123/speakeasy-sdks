# Jobs
(*jobs*)

## Overview

Jobs are an asynchronous process that can be triggered manually or scheduled. 

There are two types of job:

- a billing run
- a payment run

By scheduling billing and payment runs, you automate the process, reducing manual intervention and ensuring the jobs are run in a timely manner. See [**Schedules**](#tag/Schedules).

 Subscriptions generates an invoice when a billing run occurs. Invoices provide:

- an itemized list of goods and services provided by a subscription.
- the cost of a subscription.
- if applicable, any taxes.

Once a subscription is created:

1. Your store automatically generates an invoice.
2. Billing runs generate invoices for the remaining billing cycles for each subscription. The invoice dates come from your plans. Billing runs are independent of payment runs.
3. Payment runs identify any invoices for a store that still require payment.

### Characteristics of Billing & Payments Jobs

Billing and payment jobs have the following characteristics.

- Jobs are asynchronous.
- Jobs have a different status, depending on where a job is in its lifecycle.
- Jobs report any errors to help you understand the reason for any failed jobs.
- Only one billing run and payment run is allowed per store at a time. Although billing and payments are constantly generated, the jobs are queued. Subscriptions looks for any jobs that have a status of PENDING and starts the job with the earliest created date. This process is repeated until all jobs are processed.

### Billing & Payments Jobs Lifecycle

A job can have the following status types:

- PENDING - Subscriptions has received the request but is currently busy processing other requests.
- STARTED - Subscriptions has started processing the job.
- SUCCESS - The job has successfully completed.
- FAILED - The job has failed.


### Available Operations

* [createJob](#createjob) - Create a job
* [listJobs](#listjobs) - List jobs
* [getJob](#getjob) - Get job
* [deleteJob](#deletejob) - Delete job

## createJob

Create a job

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { JobType, SubscriptionJobType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.jobs.createJob({
    filter: "eq(name,Alan Turing)",
    requestBody: {
      data: {
        type: SubscriptionJobType.SubscriptionJob,
        attributes: {
          externalRef: "abc123",
          jobType: JobType.BillingRun,
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
| `request`                                                                                                                                                                      | [operations.CreateJobRequest](../../models/operations/createjobrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateJobResponse](../../models/operations/createjobresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listJobs

List jobs

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.jobs.listJobs({
    filter: "eq(name,Alan Turing)",
    pageOffset: 10,
    pageLimit: 100,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListJobsRequest](../../models/operations/listjobsrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListJobsResponse](../../models/operations/listjobsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 500                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getJob

Get job

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.jobs.getJob({
    jobUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetJobRequest](../../models/operations/getjobrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetJobResponse](../../models/operations/getjobresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteJob

Delete job

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.jobs.deleteJob({
    jobUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteJobRequest](../../models/operations/deletejobrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteJobResponse](../../models/operations/deletejobresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 409                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
