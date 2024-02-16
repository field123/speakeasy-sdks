# Offerings
(*offerings*)

## Overview

An offering includes a product and plans; a product is combined
with one or more plans to form an offering. 

For example, your company provides online
streaming of movies, web-series, and music. Your customers can purchase these services through either a weekly or monthly plan.

### Offering Examples

Offerings can have any combination of a product and plans. The pricing of an offering is determined by the pricing you have configured for your products and plans.

 | Example | Product | Plans | Offering |
 | --- | --- | --- | --- |
 | <ul><li>Single product and plan</ul></li> | <ul><li>One product with a product price of $50</ul></li> | <ul><li>A monthly plan with a 5% discount</ul></li> | <ul><li>An offering with a monthly plan for $47.50 a month</ul></li> |
 | <ul><li>Single product with multiple plans | <ul><li>One product with a product price of $50 | <ul><li>A monthly plan with a 5% discount</li><li>A yearly plan with a 10% discount</ul></li> | <ul><li>An offering with two plans: <ul><li>A monthly plan for $47.50 a month</li><li>A yearly plan for $45 a month</li></ul> |

### Building an Offering

Offerings represent a snapshot of their product and plans. If you make updates to a product or plans within an offering, the original product and plans are not updated. Only the product and plans within the offering are updated. Alternatively, you can create a new product or plan and attach it to a new offering.

When you are building an offering:

- you can create new plans and products.
- you can modify an existing product and plans. For example, you can modify the product price or any attributes of a plan included in the offering.

Here's how you build an offering:

1. Attach your repeat product. An offering can have only one product. See [**Create a product**](#tag/Products/operation/CreateProduct).
2. Attach your plans. 
    - Plans are the rules that govern your subscription, for example, any discount. 
    - You can combine and reuse plans for as many products as you want, making it quick and easy to create your subscription offerings. 
    - An offering must have at least one plan. See [**Create a plan**](#tag/Plans/operation/CreatePlan).
3. [**Build your offerings**](#tag/Offerings/operation/BuildOffering). Offerings are the products and plans that a customer can choose. An offering can consist of many combinations of products or plans, depending on the products and services you offer.

    - When a [**customer**](#tag/Subscribers) chooses a plan, a subscription is created. See [**Subscriptions**](#tag/Subscriptions).
    - Elastic Path Subscriptions manages the billing and recurring payments associated with the subscription. See [**Invoicing and Billing**](#tag/Jobs).

### Editing Offerings

After saving an offering, you can, at any time:

- update an offering's details, for example, name or description. See [**Update an Offering**](#tag/Offerings/operation/UpdateOffering).
- update the existing product and plans. 
- attach a new product and plans. See [**Attach a Product**](#tag/Offerings/operation/AttachOfferingProduct) and [**Attach a Plan**](#tag/Offerings/operation/AttachOfferingPlan).
- remove a product and plans. See [**Removing a product from an offering**](#tag/Offerings/operation/DeleteOfferingProduct) and [**Removing a plan from an offering**](#tag/Offerings/operation/DeleteOfferingPlan).

Any modifications that you make to offerings, and products or plans in an offering, does not affect any active subscriptions. The changes take effect on all new subscriptions that are created.


### Available Operations

* [createOffering](#createoffering) - Create an offering
* [listOfferings](#listofferings) - List offerings
* [buildOffering](#buildoffering) - Build an offering
* [getOffering](#getoffering) - Get offering
* [deleteOffering](#deleteoffering) - Delete offering
* [updateOffering](#updateoffering) - Update an offering
* [listOfferingPlans](#listofferingplans) - List an offering's plans
* [attachOfferingPlan](#attachofferingplan) - Attach a plan
* [updateOfferingPlan](#updateofferingplan) - Updates a plan in an offering
* [deleteOfferingPlan](#deleteofferingplan) - Remove a plan from an offering
* [listOfferingProducts](#listofferingproducts) - List an offering's products
* [attachOfferingProduct](#attachofferingproduct) - Attach a product
* [updateOfferingProduct](#updateofferingproduct) - Updates a product in an offering
* [deleteOfferingProduct](#deleteofferingproduct) - Remove a product from an offering

## createOffering

Create an offering

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { SubscriptionOfferingType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.createOffering({
    filter: "eq(name,Alan Turing)",
    requestBody: {
      data: {
        type: SubscriptionOfferingType.SubscriptionOffering,
        attributes: {
          externalRef: "abc123",
          name: "Magazine",
          description: "A lovely magazine that is published every month.",
        },
        relationships: {
          "plans": {
            data: {
              id: "625fe958-7b4b-40a0-a2c0-dbb8f31eec0d",
              type: "offering-plan",
            },
            links: {
              related: "/offerings/:offering-id/plans",
            },
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
| `request`                                                                                                                                                                      | [operations.CreateOfferingRequest](../../models/operations/createofferingrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateOfferingResponse](../../models/operations/createofferingresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listOfferings

List offerings

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.listOfferings({
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
| `request`                                                                                                                                                                      | [operations.ListOfferingsRequest](../../models/operations/listofferingsrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListOfferingsResponse](../../models/operations/listofferingsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## buildOffering

Build an offering

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { Unit } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.buildOffering({
    data: {
      externalRef: "abc123",
      name: "Magazine",
      description: "A lovely magazine that is published every month.",
      products: [
          {
            externalRef: "abc123",
            name: "Magazine",
            description: "A lovely magazine that is published every month.",
            sku: "MAGAZINE1",
            mainImage: "https://magazine.com/cover.jpg",
            price: {
              "USD": {
                amount: 100,
                includesTax: false,
              },
              "GBP": {
                amount: 90,
                includesTax: true,
              },
            },
            priceUnits: {
              unit: Unit.Day,
              amount: 7,
            },
          },
      ],
      plans: [
        "00000000-0000-0000-0000-000000000000",
      ],
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
| `request`                                                                                                                                                                      | [operations.BuildOfferingRequestBody](../../models/operations/buildofferingrequestbody.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.BuildOfferingResponse](../../models/operations/buildofferingresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getOffering

Get offering

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.getOffering({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOfferingRequest](../../models/operations/getofferingrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetOfferingResponse](../../models/operations/getofferingresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteOffering

When a subscription is created, it creates a snapshot of the offering. This means you can delete an offering without affecting any active subscriptions.

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.deleteOffering({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOfferingRequest](../../models/operations/deleteofferingrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteOfferingResponse](../../models/operations/deleteofferingresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 500                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateOffering

After saving an offering, you can update an offering at any time. Updating an offering does not affect any active subscriptions. The changes take effect on all new subscriptions that are created.


### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { SubscriptionOfferingType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.updateOffering({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionOfferingType.SubscriptionOffering,
        attributes: {
          externalRef: "abc123",
          name: "Magazine",
          description: "A lovely magazine that is published every month.",
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
| `request`                                                                                                                                                                      | [operations.UpdateOfferingRequest](../../models/operations/updateofferingrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateOfferingResponse](../../models/operations/updateofferingresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listOfferingPlans

List an offering's plans

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.listOfferingPlans({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
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
| `request`                                                                                                                                                                      | [operations.ListOfferingPlansRequest](../../models/operations/listofferingplansrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListOfferingPlansResponse](../../models/operations/listofferingplansresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## attachOfferingPlan

After saving an offering, you can attach new plans to it at any time.

Attaching new plans to an offering does not affect any existing active subscriptions. The changes take effect on all new subscriptions that are created.


### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.attachOfferingPlan({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        plans: [
          "00000000-0000-0000-0000-000000000000",
        ],
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
| `request`                                                                                                                                                                      | [operations.AttachOfferingPlanRequest](../../models/operations/attachofferingplanrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AttachOfferingPlanResponse](../../models/operations/attachofferingplanresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,500      | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateOfferingPlan

Updates a plan in an offering

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
  PlanUpdateAttributesBillingIntervalType,
  PlanUpdateAttributesEndBehavior,
  PlanUpdateAttributesStatus,
  SubscriptionOfferingPlanType,
} from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.updateOfferingPlan({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    planUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionOfferingPlanType.SubscriptionOfferingPlan,
        attributes: {
          externalRef: "abc123",
          name: "Monthly",
          description: "A monthly subscription.",
          status: PlanUpdateAttributesStatus.Active,
          billingIntervalType: PlanUpdateAttributesBillingIntervalType.Month,
          billingFrequency: 1,
          billingDay: 1,
          billingMonthDay: 1,
          trialPeriod: 7,
          planLength: 12,
          endBehavior: PlanUpdateAttributesEndBehavior.Close,
          canPause: false,
          canResume: false,
          canCancel: false,
          basePricePercentage: 90,
          fixedPrice: {
            "USD": {
              amount: 100,
              includesTax: false,
            },
            "GBP": {
              amount: 90,
              includesTax: true,
            },
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
| `request`                                                                                                                                                                      | [operations.UpdateOfferingPlanRequest](../../models/operations/updateofferingplanrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateOfferingPlanResponse](../../models/operations/updateofferingplanresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteOfferingPlan

After saving an offering, you can remove plans from it at any time.

Removing a plan from an offering does not affect any existing active subscriptions. The changes take effect on all new subscriptions that are created.


### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.deleteOfferingPlan({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    planUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOfferingPlanRequest](../../models/operations/deleteofferingplanrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteOfferingPlanResponse](../../models/operations/deleteofferingplanresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listOfferingProducts

List an offering's products

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.listOfferingProducts({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
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
| `request`                                                                                                                                                                      | [operations.ListOfferingProductsRequest](../../models/operations/listofferingproductsrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListOfferingProductsResponse](../../models/operations/listofferingproductsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## attachOfferingProduct

After saving an offering, you can attach new products to it at any time.

Adding new products does not affect any existing active subscriptions. The changes take effect on all new subscriptions that are created.


### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.attachOfferingProduct({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        products: [
          "00000000-0000-0000-0000-000000000000",
        ],
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
| `request`                                                                                                                                                                      | [operations.AttachOfferingProductRequest](../../models/operations/attachofferingproductrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.AttachOfferingProductResponse](../../models/operations/attachofferingproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,500      | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateOfferingProduct

Use the unique identifier of the product in the offering that you want to update. Any modifications that you make to the products in an offering, does not affect any active subscriptions. The changes take effect on all new subscriptions that are created.

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { NullablePriceUnitsUnit, SubscriptionOfferingProductType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.updateOfferingProduct({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    productUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionOfferingProductType.SubscriptionOfferingProduct,
        attributes: {
          externalRef: "abc123",
          name: "Magazine",
          description: "A lovely magazine that is published every month.",
          sku: "MAGAZINE1",
          mainImage: "https://magazine.com/cover.jpg",
          price: {
            "USD": {
              amount: 100,
              includesTax: false,
            },
            "GBP": {
              amount: 90,
              includesTax: true,
            },
          },
          priceUnits: {
            unit: NullablePriceUnitsUnit.Day,
            amount: 7,
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
| `request`                                                                                                                                                                      | [operations.UpdateOfferingProductRequest](../../models/operations/updateofferingproductrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateOfferingProductResponse](../../models/operations/updateofferingproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteOfferingProduct

After saving an offering, you can remove products from it at any time.

 Removing a product from an offering does not affect any existing active subscriptions. The changes take effect on all new subscriptions that are created.


### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.offerings.deleteOfferingProduct({
    offeringUuid: "00000000-0000-0000-0000-000000000000",
    productUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteOfferingProductRequest](../../models/operations/deleteofferingproductrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteOfferingProductResponse](../../models/operations/deleteofferingproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
