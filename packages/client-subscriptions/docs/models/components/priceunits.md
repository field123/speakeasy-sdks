# PriceUnits

The timeframe during which the product price is applicable. For example, for a streaming service, the price is $12.99 and the `unit` is `months` and the `amount` is `1`. In other words, the streaming service is available for $12.99 a month. You may want to specify a unit price if you have many products that all have different prices. Rather than having to create separate plans for each product, you can specify the timeframe during which the product price is applicable and then create one plan that determines the billing frequency for those products.


## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `unit`                                             | [components.Unit](../../models/components/unit.md) | :heavy_check_mark:                                 | A unit of time.                                    | day                                                |
| `amount`                                           | *number*                                           | :heavy_check_mark:                                 | The number of days or months the period covers.    | 7                                                  |