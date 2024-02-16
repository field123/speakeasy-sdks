# ErrorT


## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `status`                                                 | *string*                                                 | :heavy_check_mark:                                       | The HTTP response code of the error.                     | 500                                                      |
| `title`                                                  | *string*                                                 | :heavy_check_mark:                                       | A brief summary of the error.                            | Internal server error                                    |
| `detail`                                                 | *string*                                                 | :heavy_minus_sign:                                       | Optional additional detail about the error.              | An internal error has occurred.                          |
| `meta`                                                   | [components.Meta](../../models/components/meta.md)       | :heavy_minus_sign:                                       | Additional supporting meta data for the error.           | {"missing_ids":["e7d50bd5-1833-43c0-9848-f9d325b08be8"]} |