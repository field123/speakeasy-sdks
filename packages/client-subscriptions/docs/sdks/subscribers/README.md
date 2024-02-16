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
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscribers.listSubscribers({
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
| `request`                                                                                                                                                                      | [operations.ListSubscribersRequest](../../models/operations/listsubscribersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


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
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { SubscriptionSubscriberType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscribers.createSubscriber({
    filter: "eq(name,Alan Turing)",
    requestBody: {
      data: {
        type: SubscriptionSubscriberType.SubscriptionSubscriber,
        attributes: {
          accountId: "00000000-0000-0000-0000-000000000000",
          name: "John Doe",
          email: "john.doe@example.com",
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
| `request`                                                                                                                                                                      | [operations.CreateSubscriberRequest](../../models/operations/createsubscriberrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


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
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscribers.getSubscriber({
    subscriberUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubscriberRequest](../../models/operations/getsubscriberrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


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
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { SubscriptionSubscriberType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscribers.updateSubscriber({
    subscriberUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionSubscriberType.SubscriptionSubscriber,
        attributes: {
          name: "John Doe",
          email: "john.doe@example.com",
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
| `request`                                                                                                                                                                      | [operations.UpdateSubscriberRequest](../../models/operations/updatesubscriberrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


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
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscribers.deleteSubscriber({
    subscriberUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSubscriberRequest](../../models/operations/deletesubscriberrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteSubscriberResponse](../../models/operations/deletesubscriberresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
