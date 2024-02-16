# Plans
(*plans*)

## Overview

You can use plans to model your subscription. Plans are a set of rules and conditions that manage the provision of repeat products in an offering. 

- **Billing Cycles** - Plans specify the frequency at which your customer is billed – yearly, monthly, or weekly. See [**Billing Cycles**](#billing-cycles).
- **Trial Periods** - Plans specify any trial periods. See [**Trial Periods**](#trial-periods).
- **Recurring Payments** - Plans specify if the subscription is rolling, (customers pay regularly and repeatedly), or closed (customers split purchases into a few payments). See [**Recurring Payments**](#recurring-payments).
- **Pricing** - Plans may also specify whether a discount is offered and specify the timeframe during which the discount is available to your customers. See [**Plan Pricing**](#plan-pricing). 

You create plans based on your business requirements. Once the plans are available, you can associate the repeat products and plans in an offering. You can combine and reuse plans in your offerings. Offerings can contain any combination of products and plans. For example, your company provides customized meal boxes; you can create different subscription plans, like weekly or monthly meal boxes at specific prices.

### Trial Periods

You can configure a trial period when creating a plan by providing a value in `trial_period`. `trial_period` works with `billing_interval_type`. For example, if `billing_interval_type` is months, and `trial_period` is `1` then the trial period is 1 month. The trial period becomes active as soon as a subscription becomes active. When creating a subscription with a trial period, no payment method is required for the customer. An immediate invoice is still created, but for a price of zero.

When a trial period ends, Subscriptions automatically generates an invoice. 

### Billing Cycles

You can configure the billing cycle when creating a plan. A plan's billing cycle is determined by `billing_interval_type` and `billing_frequency`. For example, a customer with a monthly subscription set to cycle on the 2nd of the month is always billed on the second. If you do not specify a `billing_day` or `billing_month_day`, then the plan is cycled from the date a subscription becomes active. 

You can also combine `billing_interval_type` with `trial_period` to create a [**trial period**](#trial-period). 

### Plan Pricing
You can provide a price for the total cost of a plan, or, provide a discount on the total cost of all products within an offering. For example, you can configure a percentage discount on the total cost of any products within an offering.  

You can configure a total price for all the products in an offering. This is useful, as it allows you to provide a fixed price for all products in an offering, enabling these products to be offered at a discounted price. You can enter a price for all the currencies you have configured for your store. See [**Create a Currency**](https://elasticpath.dev/docs/pxm/currencies/currencies).

Alternatively, when creating your products, you can configure individual prices for a product. The prices you specify for a plan override the individual product prices you specified when creating a product. See [**Repeat Products**](#product-pricing).

### Recurring Payments
There are two types of recurring payments:
- customers pay regularly and repeatedly
- customers split purchases into a few payments

You can configure this using `end_behavior`. If `end_behaviour` is `rolling`, the customers pay regularly and repeatedly. If `end_behavior` is `closed`, it allows you to create installment plans where the customer's pay a total amount in a limited number of partial payments.


### Available Operations

* [createPlan](#createplan) - Create a plan
* [listPlans](#listplans) - List plans
* [getPlan](#getplan) - Get plan
* [deletePlan](#deleteplan) - Delete plan
* [updatePlan](#updateplan) - Update a plan

## createPlan

Create a plan

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { BillingIntervalType, EndBehavior, PlanAttributesStatus, SubscriptionPlanType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.plans.createPlan({
    data: {
      type: SubscriptionPlanType.SubscriptionPlan,
      attributes: {
        externalRef: "abc123",
        name: "Monthly",
        description: "A monthly subscription.",
        status: PlanAttributesStatus.Active,
        billingIntervalType: BillingIntervalType.Month,
        billingFrequency: 1,
        billingDay: 1,
        billingMonthDay: 1,
        trialPeriod: 7,
        planLength: 12,
        endBehavior: EndBehavior.Close,
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
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreatePlanRequestBody](../../models/operations/createplanrequestbody.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreatePlanResponse](../../models/operations/createplanresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listPlans

List plans

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.plans.listPlans({
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
| `request`                                                                                                                                                                      | [operations.ListPlansRequest](../../models/operations/listplansrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListPlansResponse](../../models/operations/listplansresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getPlan

Get plan

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.plans.getPlan({
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
| `request`                                                                                                                                                                      | [operations.GetPlanRequest](../../models/operations/getplanrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetPlanResponse](../../models/operations/getplanresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deletePlan

You must not delete a plan if it is associated with an offering as this invalidates the offering. You must detach a plan from an offering before deleting it.

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.plans.deletePlan({
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
| `request`                                                                                                                                                                      | [operations.DeletePlanRequest](../../models/operations/deleteplanrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeletePlanResponse](../../models/operations/deleteplanresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## updatePlan

Specify whichever attributes you want to change. The values of the other attributes remain the same. If the attributes section is empty, the plan is not updated.

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
  PlanUpdateAttributesBillingIntervalType,
  PlanUpdateAttributesEndBehavior,
  PlanUpdateAttributesStatus,
  SubscriptionPlanType,
} from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.plans.updatePlan({
    planUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionPlanType.SubscriptionPlan,
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
| `request`                                                                                                                                                                      | [operations.UpdatePlanRequest](../../models/operations/updateplanrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdatePlanResponse](../../models/operations/updateplanresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
