# Day 4 - PostgreSQL Constraints

## Overview

Today, I learned about **Constraints** in PostgreSQL.

Constraints are rules enforced by the database to maintain **data integrity**, **consistency**, and **accuracy**. They prevent invalid or duplicate data from being stored.

---

# What is a Constraint?

A constraint is a rule applied to one or more columns of a table.

It ensures that only valid data can be inserted, updated, or stored.

Without constraints:

* Duplicate records can exist.
* Important fields may remain empty.
* Invalid data can enter the database.

With constraints:

* Data remains accurate.
* Duplicate values are prevented.
* Required fields cannot be left empty.

---

# Constraints Learned

## 1. PRIMARY KEY

A PRIMARY KEY uniquely identifies every row in a table.

Properties:

* Cannot be NULL
* Cannot contain duplicate values
* Automatically creates a unique index

Example:

```sql
id SERIAL PRIMARY KEY
```

Internally, PRIMARY KEY behaves like:

* `NOT NULL`
* `UNIQUE`

---

## 2. NOT NULL

Ensures a column always contains a value.

Example:

```sql
name VARCHAR(100) NOT NULL
```

If someone tries:

```sql
INSERT INTO users(email)
VALUES('govind@gmail.com');
```

PostgreSQL returns:

```text
ERROR:
null value violates not-null constraint
```

---

## 3. UNIQUE

Prevents duplicate values.

Example:

```sql
email VARCHAR(255) UNIQUE
```

Valid:

```text
Govind  -> govind@gmail.com
Rahul   -> rahul@gmail.com
```

Invalid:

```text
Govind -> govind@gmail.com
Rahul  -> govind@gmail.com
```

PostgreSQL rejects duplicate values.

---

## 4. DEFAULT

Assigns a value automatically when none is provided.

Example:

```sql
is_verified BOOLEAN DEFAULT FALSE
```

If no value is supplied:

```text
FALSE
```

is automatically stored.

Another example:

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

Automatically stores the current date and time.

---

# Production User Table

```sql
CREATE TABLE user_v3(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# DEFAULT - Important Concept

A DEFAULT value is only used when **no explicit value is supplied**.

Correct:

```sql
INSERT INTO user_v3(name, email)
VALUES
('Govind','govind@123');
```

Result:

```text
is_verified = FALSE
```

because PostgreSQL applies the default value.

---

If the column is included:

```sql
INSERT INTO user_v3(name, email, is_verified)
VALUES
('Govind','govind@123',TRUE);
```

PostgreSQL expects a value for **every row**.

Example:

```sql
INSERT INTO user_v3(name, email, is_verified)
VALUES
('Govind','govind@123',TRUE),
('Rahul','rahul@123',DEFAULT);
```

Here, the second row explicitly asks PostgreSQL to use the default value.

---

# Constraints Practiced

## Create Table

```sql
CREATE TABLE user_v3(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

## Insert Data

```sql
INSERT INTO user_v3(name,email,is_verified)
VALUES
('Govind','govind@123',TRUE),
('Raju','raju@123',FALSE);
```

---

## Duplicate Email Test

```sql
INSERT INTO user_v3(name,email)
VALUES
('Rahul','govind@123');
```

Output:

```text
ERROR:
duplicate key value violates unique constraint
```

---

## NOT NULL Test

```sql
INSERT INTO user_v3(email)
VALUES
('abc@123');
```

Output:

```text
ERROR:
null value violates not-null constraint
```

---

## Describe Table

```sql
\d user_v3
```

Shows:

* Columns
* Data Types
* Default Values
* Constraints
* Indexes

---

# SQL Commands Learned

## Create Table

```sql
CREATE TABLE table_name(...);
```

Creates a new table.

---

## Insert Data

```sql
INSERT INTO table_name(columns)
VALUES(values);
```

Adds new records.

---

## Describe Table

```sql
\d table_name
```

Displays:

* Columns
* Constraints
* Default values
* Indexes

---

# Interview Questions

### What is a Constraint?

A constraint is a database rule that enforces data integrity by preventing invalid data from being stored.

---

### Difference between NOT NULL and UNIQUE

| NOT NULL              | UNIQUE                    |
| --------------------- | ------------------------- |
| Prevents empty values | Prevents duplicate values |

---

### Can a column have both NOT NULL and UNIQUE?

Yes.

Example:

```sql
email VARCHAR(255) NOT NULL UNIQUE
```

---

### Why is `id` preferred as PRIMARY KEY instead of `email`?

Because a user's email may change over time, while the primary key should remain stable and uniquely identify the record throughout its lifetime.

---

### What problem does DEFAULT solve?

It automatically assigns a predefined value when the user does not provide one during insertion.

---

# Naming Conventions

Preferred PostgreSQL naming style:

```text
users
teams
projects
tasks
comments
notifications

created_at
updated_at
user_id
team_id
is_verified
```

Use:

```text
snake_case
```

Avoid:

```text
createdAt
userId
isVarified
```

---

# Key Takeaways

* Learned the purpose of database constraints.
* Understood PRIMARY KEY, NOT NULL, UNIQUE, and DEFAULT.
* Practiced creating production-style tables.
* Learned how DEFAULT values are applied.
* Understood why duplicate emails should be prevented.
* Learned how PostgreSQL enforces data integrity.
* Followed PostgreSQL naming conventions using snake_case.
* Built a more production-ready `user_v3` table.

✅ **Day 4 Completed Successfully**
