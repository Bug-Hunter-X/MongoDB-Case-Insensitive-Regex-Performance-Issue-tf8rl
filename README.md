# MongoDB Case-Insensitive Regex Performance Issue

This repository demonstrates a common performance issue encountered when using case-insensitive regular expressions in MongoDB queries with case-sensitive indexes.

The `bug.js` file contains the code snippet exhibiting the issue. The `bugSolution.js` file provides solutions for improved performance.

## Problem

When a case-insensitive query is performed against a case-sensitive index, MongoDB may not use the index effectively.  This leads to slow query performance and increased load on the database server.

## Solution

The recommended solution involves:

1. Creating a case-insensitive index or
2. Modifying the query to use a case-insensitive collation.

Details are described in `bugSolution.js`.