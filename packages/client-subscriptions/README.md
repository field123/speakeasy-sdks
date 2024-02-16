# openapi

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
    SubscriptionProductType,
    Unit,
} from "@field123/service-subscriptions-sdk/models/components";

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
                        USD: {
                            amount: 100,
                            includesTax: false,
                        },
                        GBP: {
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
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [products](docs/sdks/products/README.md)

* [createProduct](docs/sdks/products/README.md#createproduct) - Create a product
* [listProducts](docs/sdks/products/README.md#listproducts) - List products
* [getProduct](docs/sdks/products/README.md#getproduct) - Get product
* [deleteProduct](docs/sdks/products/README.md#deleteproduct) - Delete product
* [updateProduct](docs/sdks/products/README.md#updateproduct) - Update a product

### [plans](docs/sdks/plans/README.md)

* [createPlan](docs/sdks/plans/README.md#createplan) - Create a plan
* [listPlans](docs/sdks/plans/README.md#listplans) - List plans
* [getPlan](docs/sdks/plans/README.md#getplan) - Get plan
* [deletePlan](docs/sdks/plans/README.md#deleteplan) - Delete plan
* [updatePlan](docs/sdks/plans/README.md#updateplan) - Update a plan

### [offerings](docs/sdks/offerings/README.md)

* [createOffering](docs/sdks/offerings/README.md#createoffering) - Create an offering
* [listOfferings](docs/sdks/offerings/README.md#listofferings) - List offerings
* [buildOffering](docs/sdks/offerings/README.md#buildoffering) - Build an offering
* [getOffering](docs/sdks/offerings/README.md#getoffering) - Get offering
* [deleteOffering](docs/sdks/offerings/README.md#deleteoffering) - Delete offering
* [updateOffering](docs/sdks/offerings/README.md#updateoffering) - Update an offering
* [listOfferingPlans](docs/sdks/offerings/README.md#listofferingplans) - List an offering's plans
* [attachOfferingPlan](docs/sdks/offerings/README.md#attachofferingplan) - Attach a plan
* [updateOfferingPlan](docs/sdks/offerings/README.md#updateofferingplan) - Updates a plan in an offering
* [deleteOfferingPlan](docs/sdks/offerings/README.md#deleteofferingplan) - Remove a plan from an offering
* [listOfferingProducts](docs/sdks/offerings/README.md#listofferingproducts) - List an offering's products
* [attachOfferingProduct](docs/sdks/offerings/README.md#attachofferingproduct) - Attach a product
* [updateOfferingProduct](docs/sdks/offerings/README.md#updateofferingproduct) - Updates a product in an offering
* [deleteOfferingProduct](docs/sdks/offerings/README.md#deleteofferingproduct) - Remove a product from an offering

### [subscriptions](docs/sdks/subscriptionssdk/README.md)

* [createSubscription](docs/sdks/subscriptionssdk/README.md#createsubscription) - Create a subscription
* [listSubscriptions](docs/sdks/subscriptionssdk/README.md#listsubscriptions) - List subscriptions
* [getSubscription](docs/sdks/subscriptionssdk/README.md#getsubscription) - Get subscription
* [deleteSubscription](docs/sdks/subscriptionssdk/README.md#deletesubscription) - Delete subscription
* [listSubscriptionInvoices](docs/sdks/subscriptionssdk/README.md#listsubscriptioninvoices) - List subscription invoices
* [cancelSubscription](docs/sdks/subscriptionssdk/README.md#cancelsubscription) - Cancels subscription
* [listSubscriptionInvoicePayments](docs/sdks/subscriptionssdk/README.md#listsubscriptioninvoicepayments) - List subscription invoice payments
* [getSubscriptionInvoicePayment](docs/sdks/subscriptionssdk/README.md#getsubscriptioninvoicepayment) - Get subscription invoice payment
* [getSubscriptionInvoice](docs/sdks/subscriptionssdk/README.md#getsubscriptioninvoice) - Get subscription invoice

### [jobs](docs/sdks/jobs/README.md)

* [createJob](docs/sdks/jobs/README.md#createjob) - Create a job
* [listJobs](docs/sdks/jobs/README.md#listjobs) - List jobs
* [getJob](docs/sdks/jobs/README.md#getjob) - Get job
* [deleteJob](docs/sdks/jobs/README.md#deletejob) - Delete job

### [schedules](docs/sdks/schedules/README.md)

* [listSchedules](docs/sdks/schedules/README.md#listschedules) - List schedules
* [createSchedule](docs/sdks/schedules/README.md#createschedule) - Create a schedule
* [getSchedule](docs/sdks/schedules/README.md#getschedule) - Get a schedule
* [updateSchedule](docs/sdks/schedules/README.md#updateschedule) - Update a schedule
* [deleteSchedule](docs/sdks/schedules/README.md#deleteschedule) - Delete schedule

### [subscribers](docs/sdks/subscribers/README.md)

* [listSubscribers](docs/sdks/subscribers/README.md#listsubscribers) - List subscribers
* [createSubscriber](docs/sdks/subscribers/README.md#createsubscriber) - Create a subscriber
* [getSubscriber](docs/sdks/subscribers/README.md#getsubscriber) - Get a subscriber
* [updateSubscriber](docs/sdks/subscribers/README.md#updatesubscriber) - Update a subscriber
* [deleteSubscriber](docs/sdks/subscribers/README.md#deletesubscriber) - Delete subscriber
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object         | Status Code          | Content Type         |
| -------------------- | -------------------- | -------------------- |
| errors.ErrorResponse | 400,500              | application/json     |
| errors.SDKError      | 4xx-5xx              | */*                  |

Example

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
    SubscriptionProductType,
    Unit,
} from "@field123/service-subscriptions-sdk/models/components";

async function run() {
    const sdk = new Subscriptions({
        bearerToken: "<YOUR_BEARER_TOKEN_HERE>",
    });

    let result;
    try {
        result = await sdk.products.createProduct({
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
                            USD: {
                                amount: 100,
                                includesTax: false,
                            },
                            GBP: {
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
    } catch (err) {
        switch (true) {
            case err instanceof errors.ErrorResponse: {
                console.error(err); // handle exception
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://epcc-integration.global.ssl.fastly.net/v2` | None |
| 1 | `https://api.epcc-staging.epcloudops.com/v2` | None |
| 2 | `https://api.moltin.com/v2` | None |
| 3 | `https://useast.api.elasticpath.com/v2` | None |

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
    SubscriptionProductType,
    Unit,
} from "@field123/service-subscriptions-sdk/models/components";

async function run() {
    const sdk = new Subscriptions({
        serverIdx: 3,
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
                        USD: {
                            amount: 100,
                            includesTax: false,
                        },
                        GBP: {
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
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
    SubscriptionProductType,
    Unit,
} from "@field123/service-subscriptions-sdk/models/components";

async function run() {
    const sdk = new Subscriptions({
        serverURL: "https://epcc-integration.global.ssl.fastly.net/v2",
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
                        USD: {
                            amount: 100,
                            includesTax: false,
                        },
                        GBP: {
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
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import { HTTPClient } from "@field123/service-subscriptions-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Subscriptions({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type          | Scheme        |
| ------------- | ------------- | ------------- |
| `bearerToken` | http          | HTTP Bearer   |

To authenticate with the API the `bearerToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Subscriptions } from "@field123/service-subscriptions-sdk";
import {
    SubscriptionProductType,
    Unit,
} from "@field123/service-subscriptions-sdk/models/components";

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
                        USD: {
                            amount: 100,
                            includesTax: false,
                        },
                        GBP: {
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
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
