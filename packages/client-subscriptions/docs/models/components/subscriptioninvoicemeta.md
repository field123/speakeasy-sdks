# SubscriptionInvoiceMeta


## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `owner`                                                                          | *string*                                                                         | :heavy_check_mark:                                                               | The owner of a resource, either `store` or `organization`.                       | store                                                                            |
| `subscriptionId`                                                                 | *string*                                                                         | :heavy_minus_sign:                                                               | The unique identifier.                                                           | 00000000-0000-0000-0000-000000000000                                             |
| `price`                                                                          | [components.SingleCurrencyPrice](../../models/components/singlecurrencyprice.md) | :heavy_minus_sign:                                                               | A price in a single currency.                                                    | {"currency":"USD","amount":100,"includes_tax":false}                             |
| `timestamps`                                                                     | [components.Timestamps](../../models/components/timestamps.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |                                                                                  |