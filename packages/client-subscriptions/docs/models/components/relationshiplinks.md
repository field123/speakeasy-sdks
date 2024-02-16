# RelationshipLinks

Links are used to allow you, as an API consumer, to move between requests. Single entities use a self parameter with a link to that specific resource. Sometimes, there aren’t enough entities for a project to fill multiple pages. In this situation, we return some defaults, instead of expecting you to check for these special cases. 

 - current - Always the current page.
 - first - Always the first page.
 - last - always `null`.
 - next - `null` if the user is on the first page.
 - previous - `null` if there is only one page.



## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `related`          | *string*           | :heavy_minus_sign: | N/A                | foo.bar            |