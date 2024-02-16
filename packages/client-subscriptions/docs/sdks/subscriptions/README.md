# Subscriptions
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
import { SDK } from "openapi";
import { Type } from "openapi/models/components";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const filter = "eq(name,Alan Turing)";
  const requestBody = {
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
  };
  
  const result = await sdk.subscriptions.createSubscription(filter, requestBody);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `filter`                                                                                                                                                                       | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `requestBody`                                                                                                                                                                  | [operations.CreateSubscriptionRequestBody](../../models/operations/createsubscriptionrequestbody.md)                                                                           | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |                                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const filter = "eq(name,Alan Turing)";
  const pageOffset = 10;
  const pageLimit = 100;
  
  const result = await sdk.subscriptions.listSubscriptions(filter, pageOffset, pageLimit);

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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.getSubscription(subscriptionUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.deleteSubscription(subscriptionUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.listSubscriptionInvoices(subscriptionUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.cancelSubscription(subscriptionUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  const invoiceUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.listSubscriptionInvoicePayments(subscriptionUuid, invoiceUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `invoiceUuid`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the invoice.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  const invoiceUuid = "00000000-0000-0000-0000-000000000000";
  const paymentUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.getSubscriptionInvoicePayment(subscriptionUuid, invoiceUuid, paymentUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `invoiceUuid`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the invoice.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `paymentUuid`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the payment.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


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
import { SDK } from "openapi";

async function run() {
  const sdk = new SDK({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const subscriptionUuid = "00000000-0000-0000-0000-000000000000";
  const invoiceUuid = "00000000-0000-0000-0000-000000000000";
  
  const result = await sdk.subscriptions.getSubscriptionInvoice(subscriptionUuid, invoiceUuid);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `subscriptionUuid`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the subscription.                                                                                                                                     | [object Object]                                                                                                                                                                |
| `invoiceUuid`                                                                                                                                                                  | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the invoice.                                                                                                                                          | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |


### Response

**Promise<[operations.GetSubscriptionInvoiceResponse](../../models/operations/getsubscriptioninvoiceresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 404,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
