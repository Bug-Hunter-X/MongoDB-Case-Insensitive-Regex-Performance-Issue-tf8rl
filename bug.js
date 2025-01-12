```javascript
const query = { name: /John/i }; // Case-insensitive search

const cursor = db.collection('users').find(query);

cursor.forEach(user => {
  console.log(user);
});
```
This code snippet demonstrates a common error when using case-insensitive regular expressions in MongoDB queries.  The `/i` flag in the regex makes the search case-insensitive, but the query may still return unexpected results if the index on the `name` field is case-sensitive.  If a case-sensitive index is used, the query might not leverage the index effectively, leading to performance degradation, especially on large datasets.