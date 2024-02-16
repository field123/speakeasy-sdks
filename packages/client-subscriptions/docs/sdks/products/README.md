# Products
(*products*)

## Overview

Create the products and services that you want to offer in a subscription. For example, an online streaming service organization might have different services available for subscription, such as Standard Definition Streaming, High-Definition Streaming, and 4K Streaming; each service provides a specific level of video quality. 
Products can have additional attributes, such as price, and rich media assets, such as images or files containing additional product details.

You combine your products and plans into offerings. Offerings can contain any combination of products and plans.

Product data is stored in a database. After you have added your products, you can update your product information at any time, and include those products in your subscription offerings.

### Product Media
Images and files are linked to repeat products using a hypertext reference (HREF). You can either upload your images to Commerce using the Commerce Files API or you can use your own content delivery network. If you are using the Commerce Files API, use [**Create a File**](https://elasticpath.dev/docs/pxm/products/product-assets/create-a-file) to upload your file and return an HREF link in the response.
An extensive range of [**media and file extensions**](https://elasticpath.dev/docs/pxm/products/product-assets/files-overview) are supported.

### Product Pricing
You can assign prices for your products and services. You can display prices to your customers in their local currency. You can configure up to 10 currencies per subscription. Use the Commerce Currencies API to [**create a currency**](https://elasticpath.dev/docs/pxm/currencies/currencies-api/create-a-currency). You must select one currency to be the default currency. If a default currency is not selected, the store uses the United States Dollar (USD). 

In addition, you can specify a unit price for a product. A unit price is the timeframe during which the product price is applicable, either days or months. For example, for a streaming service, the price is $12.99 and the unit price is months. In other words, the streaming service is available for $12.99 a month. You may want to specify a unit price if you have many products that all have different prices. Rather than having to create separate plans for each product, you can specify the timeframe during which the product price is applicable and then create one plan that determines the billing frequency for those products.

Alternatively, when creating a plan, you can configure a total price for all the products in an offering. This is useful, as it allows you to provide a fixed price for all products in an offering, enabling those products to be offered at a discounted price. The prices you specify for a plan override the individual product prices you specified when creating a product. See [**Plan Pricing**](#plan-pricing).


### Available Operations

* [createProduct](#createproduct) - Create a product
* [listProducts](#listproducts) - List products
* [getProduct](#getproduct) - Get product
* [deleteProduct](#deleteproduct) - Delete product
* [updateProduct](#updateproduct) - Update a product

## createProduct

Create a product

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { SubscriptionProductType, Unit } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.products.createProduct({
    filter: "eq(name,Alan Turing)",
    requestBody: {
      data: {
        type: SubscriptionProductType.SubscriptionProduct,
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
            unit: Unit.Day,
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
| `request`                                                                                                                                                                      | [operations.CreateProductRequest](../../models/operations/createproductrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.CreateProductResponse](../../models/operations/createproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## listProducts

List products

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.products.listProducts({
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
| `request`                                                                                                                                                                      | [operations.ListProductsRequest](../../models/operations/listproductsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.ListProductsResponse](../../models/operations/listproductsresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## getProduct

Get product

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.products.getProduct({
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
| `request`                                                                                                                                                                      | [operations.GetProductRequest](../../models/operations/getproductrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetProductResponse](../../models/operations/getproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,404,500          | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## deleteProduct

You cannot delete a product if it is part of an offering. You must detach the product from the offering first.

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.products.deleteProduct({
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
| `request`                                                                                                                                                                      | [operations.DeleteProductRequest](../../models/operations/deleteproductrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.DeleteProductResponse](../../models/operations/deleteproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 500                  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

## updateProduct

Specify whichever attributes you want to change. The values of the other attributes remain the same. If the attributes section is empty, the product is not updated.

### Example Usage

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { NullablePriceUnitsUnit, SubscriptionProductType } from "@field123/service-subscriptions-sdk/models/components";

async function run() {
  const sdk = new Subscriptions({
    bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
  });

  const result = await sdk.products.updateProduct({
    productUuid: "00000000-0000-0000-0000-000000000000",
    requestBody: {
      data: {
        id: "00000000-0000-0000-0000-000000000000",
        type: SubscriptionProductType.SubscriptionProduct,
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
| `request`                                                                                                                                                                      | [operations.UpdateProductRequest](../../models/operations/updateproductrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.UpdateProductResponse](../../models/operations/updateproductresponse.md)>**
### Errors

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,403,404,409,500  | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |
