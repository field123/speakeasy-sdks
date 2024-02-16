# Subscribers
(*subscribers*)

## Overview

A subscriber is an individual that owns a subscription


### Available Operations

* [listSubscribers](#listsubscribers) - List subscribers
* [createSubscriber](#createsubscriber) - Create a subscriber
* [getSubscriber](#getsubscriber) - Get a subscriber
* [updateSubscriber](#updatesubscriber) - Update a subscriber
* [deleteSubscriber](#deletesubscriber) - Delete subscriber

## listSubscribers

List subscribers

### Example Usage

```typescript
import { SDK } from "service-subscriptions-sdk";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const filter = "eq(name,Alan Turing)";
  const pageOffset = 10;
  const pageLimit = 100;
  
  const result = await sdk.subscribers.listSubscribers(filter, pageOffset, pageLimit);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                        | Required                                                                                                                                                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                 | Example                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `filter`                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | N/A                                                                                                                                                                                                                                                                                         | [object Object]                                                                                                                                                                                                                                                                             |
| `pageOffset`                                                                                                                                                                                                                                                                                | *number*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | The current offset by number of records, not pages. Offset is zero-based. The maximum records you can offset is 10,000. If no page size is set, the [page length](https://elasticpath.dev/docs/commerce-cloud/global-project-settings/settings-overview#page-length) store setting is used. | [object Object]                                                                                                                                                                                                                                                                             |
| `pageLimit`                                                                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | The maximum number of records per page for this response. You can set this value up to 100. If no page size is set, the [page length](https://elasticpath.dev/docs/commerce-cloud/global-project-settings/settings-overview#page-length) store setting is used.                             | [object Object]                                                                                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                                                                   | RequestOptions                                                                                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Used to set various options for making HTTP requests.                                                                                                                                                                                                                                       |                                                                                                                                                                                                                                                                                             |
| `options.fetchOptions`                                                                                                                                                                                                                                                                      | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                          | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                                                              |                                                                                                                                                                                                                                                                                             |


### Response

**Promise<[operations.ListSubscribersResponse](../../models/operations/listsubscribersresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## createSubscriber

Create a subscriber

### Example Usage

```typescript
import { SDK } from "service-subscriptions-sdk";
import { SubscriptionSubscriberType } from "service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const filter = "eq(name,Alan Turing)";
  const requestBody = {
    data: {
      type: SubscriptionSubscriberType.SubscriptionSubscriber,
      attributes: {
        accountId: "00000000-0000-0000-0000-000000000000",
        name: "John Doe",
        email: "john.doe@example.com",
      },
    },
  };
  
  const result = await sdk.subscribers.createSubscriber(filter, requestBody);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filter`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.CreateSubscriberRequestBody](../../models/operations/createsubscriberrequestbody.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.CreateSubscriberResponse](../../models/operations/createsubscriberresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getSubscriber

Get a subscriber

### Example Usage

```typescript
import { SDK } from "service-subscriptions-sdk";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriberUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscribers.getSubscriber(subscriberUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriberUuid`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscriber.                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetSubscriberResponse](../../models/operations/getsubscriberresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateSubscriber

Update a subscriber

### Example Usage

```typescript
import { SDK } from "service-subscriptions-sdk";
import { SubscriptionSubscriberType } from "service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriberUuid = "00000000-0000-0000-0000-000000000000";
  const requestBody = {
    data: {
      id: "00000000-0000-0000-0000-000000000000",
      type: SubscriptionSubscriberType.SubscriptionSubscriber,
      attributes: {
        name: "John Doe",
        email: "john.doe@example.com",
      },
    },
  };
  
  const result = await sdk.subscribers.updateSubscriber(subscriberUuid, requestBody);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriberUuid`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscriber.                                                                                                                                       | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.UpdateSubscriberRequestBody](../../models/operations/updatesubscriberrequestbody.md)                                                                               | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.UpdateSubscriberResponse](../../models/operations/updatesubscriberresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteSubscriber

Delete subscriber

### Example Usage

```typescript
import { SDK } from "service-subscriptions-sdk";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriberUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscribers.deleteSubscriber(subscriberUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriberUuid`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscriber.                                                                                                                                       | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.DeleteSubscriberResponse](../../models/operations/deletesubscriberresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
