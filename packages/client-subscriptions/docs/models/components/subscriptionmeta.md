# SubscriptionMeta


## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    | Example                                                        |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `owner`                                                        | *string*                                                       | :heavy_check_mark:                                             | The owner of a resource, either `store` or `organization`.     | store                                                          |
| `timestamps`                                                   | [components.Timestamps](../../models/components/timestamps.md) | :heavy_check_mark:                                             | N/A                                                            |                                                                |
| `status`                                                       | [components.Status](../../models/components/status.md)         | :heavy_check_mark:                                             | The status of a subscription, either `active` or `inactive`.   | active                                                         |
| `canceled`                                                     | *boolean*                                                      | :heavy_check_mark:                                             | Whether a subscription is canceled or not.                     | true                                                           |