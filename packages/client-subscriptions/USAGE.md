<!-- Start SDK Example Usage [usage] -->
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