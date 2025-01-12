```javascript
// Solution 1: Create a case-insensitive index
db.collection('users').createIndex( { name: 'text' } );

// Solution 2: Use a case-insensitive collation
const query = { name: /John/i };
const options = { collation: { locale: 'en', strength: 2 } };

const cursor = db.collection('users').find(query, options);

cursor.forEach(user => {
  console.log(user);
});
```
This code snippet shows two methods to resolve the issue: creating a case-insensitive text index, or using a case-insensitive collation in the query.  The text index solution is usually the most effective, providing optimal performance, while the collation option works if creating a new index is not feasible.