# SubscriptionsSDK
(*subscriptions*)

## Overview

Elastic Path Subscriptions enables you to manage your subscriptions products and plans, using offerings. Offerings can contain any combination of plans and a product. When a customer chooses a plan, a subscription is created.  

### Payments

When your customers add a subscription to a cart and the cart is checked out, an unpaid order is returned. You can process the payment for the order though a payment gateway. You can do this using Elastic Path Payments Powered by Stripe. The Elastic Path Payments Powered by Stripe gateway interacts with Stripe to allow your subscribers to pay for their subscriptions. 

To use Elastic Path Payments Powered by Stripe gateway, contact the [**Customer Success Team**](mailto:customersuccess@elasticpath.com). 

Create your Stripe account in [**Stripe Dashboard**](https://dashboard.stripe.com/login) and complete an onboarding form to make payments using the gateway. For more information, see [**Onboarding**](https://elasticpath.dev/docs/payments/onboarding).

Once you have signed up for Elastic Path Payments Powered by Stripe, you must configure the payment gateway so that your shoppers can make payments. See [**Configure Elastic Path Payments Powered by Stripe**](https://elasticpath.dev/docs/commerce-cloud/payments/payment-gateway/configure-elastic-path-payments-powered-by-stripe).

Subscriptions only supports the `purchase` payment mechanism. The gateway attempts to charge the customer immediately, and the result of the attempt is returned. If a payment fails, the invoice is kept as outstanding and the payment information, with the reason for the failure is attached to the invoice. A new payment run is required to attempt another payment. 

When sending a payment request to the Payments service, you must specify the following.

| <div style="width:100px">Attribute</div> | <div style="width:60px">Required</div> | <div style="width:290px">Description</div> |
| --- | --- | --- |
| `gateway` | Required| Must be `elastic_path_payments_stripe`. |
| `method` | Required | Must be `purchase`.
| `payment` | Required | The type of payment, for example, `pm_card_visa_debit`.
| `options` | Required | These options must be set as they set up the card to be used in future without the customer being present. If these options are not set, future payments may fail. There are two options. <ul><li>`off_session`. Must be set to `true`. </li><li>`confirm`. Must be set to `true`.</li></ul> |


### Available Operations

* [createSubscription](#createsubscription) - Create a subscription
* [listSubscriptions](#listsubscriptions) - List subscriptions
* [getSubscription](#getsubscription) - Get subscription
* [deleteSubscription](#deletesubscription) - Delete subscription
* [listSubscriptionInvoices](#listsubscriptioninvoices) - List subscription invoices
* [cancelSubscription](#cancelsubscription) - Cancels subscription
* [listSubscriptionInvoicePayments](#listsubscriptioninvoicepayments) - List subscription invoice payments
* [getSubscriptionInvoicePayment](#getsubscriptioninvoicepayment) - Get subscription invoice payment
* [getSubscriptionInvoice](#getsubscriptioninvoice) - Get subscription invoice

## createSubscription

Create a subscription

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { Type } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.createSubscription({
    filter: "eq(name,Alan Turing)",
    requestBody: {
      data: {
        externalRef: "abc123",
        accountId: "00000000-0000-0000-0000-000000000000",
        offeringId: "00000000-0000-0000-0000-000000000000",
        planId: "00000000-0000-0000-0000-000000000000",
        currency: "USD",
      paymentAuthority:     {
            type: Type.ElasticPathPaymentsStripe,
            customerId: "cus_OPfKlxWV3hp9h6",
            cardId: "card_8Diw3FQPhxK27WADPVMeXieP",
          },
        name: "Albert Einstein",
        email: "albert@elasticpath.com",
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
| `request`                                                                                                                                                                      | [operations.CreateSubscriptionRequest](../../models/operations/createsubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateSubscriptionResponse](../../models/operations/createsubscriptionresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listSubscriptions

List subscriptions

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.listSubscriptions({
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
| `request`                                                                                                                                                                      | [operations.ListSubscriptionsRequest](../../models/operations/listsubscriptionsrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListSubscriptionsResponse](../../models/operations/listsubscriptionsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getSubscription

Get subscription

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.getSubscription({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubscriptionRequest](../../models/operations/getsubscriptionrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSubscriptionResponse](../../models/operations/getsubscriptionresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteSubscription

Delete subscription

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.deleteSubscription({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSubscriptionRequest](../../models/operations/deletesubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteSubscriptionResponse](../../models/operations/deletesubscriptionresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 500                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listSubscriptionInvoices

List subscription invoices

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.listSubscriptionInvoices({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSubscriptionInvoicesRequest](../../models/operations/listsubscriptioninvoicesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListSubscriptionInvoicesResponse](../../models/operations/listsubscriptioninvoicesresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 500                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## cancelSubscription

Cancels a customer's subscription. It depends on the subscription cycle when a subscription is cancelled. For example, if a customer cancels a subscription, the subscription is still active for the rest of the subscription cycle because the customer has paid for it. Once the billing run processes the subscription at the end of the subscription cycle, the billing run detects that the subscription is cancelled and then sets the status of the subscription to `inactive`. No further invoices are generated for the subscription.

You cannot reactivate a subscription once it has been cancelled.


### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.cancelSubscription({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelSubscriptionRequest](../../models/operations/cancelsubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CancelSubscriptionResponse](../../models/operations/cancelsubscriptionresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listSubscriptionInvoicePayments

List subscription invoice payments

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.listSubscriptionInvoicePayments({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
    invoiceUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSubscriptionInvoicePaymentsRequest](../../models/operations/listsubscriptioninvoicepaymentsrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListSubscriptionInvoicePaymentsResponse](../../models/operations/listsubscriptioninvoicepaymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getSubscriptionInvoicePayment

Get subscription invoice payment

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.getSubscriptionInvoicePayment({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
    invoiceUuid: "00000000-0000-0000-0000-000000000000",
    paymentUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubscriptionInvoicePaymentRequest](../../models/operations/getsubscriptioninvoicepaymentrequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSubscriptionInvoicePaymentResponse](../../models/operations/getsubscriptioninvoicepaymentresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getSubscriptionInvoice

Get subscription invoice

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.subscriptions.getSubscriptionInvoice({
    subscriptionUuid: "00000000-0000-0000-0000-000000000000",
    invoiceUuid: "00000000-0000-0000-0000-000000000000",
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSubscriptionInvoiceRequest](../../models/operations/getsubscriptioninvoicerequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSubscriptionInvoiceResponse](../../models/operations/getsubscriptioninvoiceresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
