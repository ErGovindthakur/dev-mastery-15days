# Day 3 - PostgreSQL Data Types & Table Design

## Overview

Today, I learned about PostgreSQL Data Types and why choosing the correct data type is important while designing database tables.

A good database design starts with selecting the right data type for each column.

---

# What is a Data Type?

A Data Type defines what kind of data can be stored in a column and how PostgreSQL should store, validate, and process that data.

Examples:

```sql
age INTEGER
name VARCHAR(100)
is_verified BOOLEAN
created_at TIMESTAMP
```

Using appropriate data types helps maintain data consistency, prevents invalid data, and improves database performance.

---

# PostgreSQL Data Types Learned Today

## INTEGER

Used to store whole numbers.

Example:

```sql
age INTEGER
```

Valid Values:

```text
18
25
100
```

Invalid Values:

```text
Govind
22.5
```

### Real World Usage

```sql
task_count INTEGER
team_size INTEGER
age INTEGER
```

---

## VARCHAR

VARCHAR stands for Variable Character.

Used to store text with a specific maximum length.

Example:

```sql
name VARCHAR(100)
```

Meaning:

```text
Maximum 100 characters allowed
```

### Real World Usage

```sql
name VARCHAR(100)
email VARCHAR(255)
```

---

## TEXT

Used to store large amounts of text.

Example:

```sql
description TEXT
```

### Real World Usage

```sql
project_description TEXT
task_description TEXT
comment TEXT
```

---

## VARCHAR vs TEXT

### VARCHAR

```sql
name VARCHAR(100)
```

* Fixed maximum length
* Better when expected size is known

### TEXT

```sql
description TEXT
```

* No practical size limit
* Better for long content

---

## BOOLEAN

Stores only two values:

```text
TRUE
FALSE
```

Example:

```sql
is_verified BOOLEAN
```

### Why BOOLEAN Instead of VARCHAR?

Bad Design:

```sql
status VARCHAR(20)
```

Possible values:

```text
yes
YES
y
true
verified
```

Good Design:

```sql
is_verified BOOLEAN
```

Possible values:

```text
TRUE
FALSE
```

This keeps data consistent.

---

## DATE

Stores only a date.

Example:

```sql
birth_date DATE
```

Format:

```text
2026-06-23
```

### Real World Usage

```sql
date_of_birth DATE
joining_date DATE
due_date DATE
```

---

## TIMESTAMP

Stores both date and time.

Example:

```text
2026-06-23 15:30:22
```

### Real World Usage

```sql
created_at TIMESTAMP
updated_at TIMESTAMP
commented_at TIMESTAMP
```

---

## DATE vs TIMESTAMP

### DATE

```text
2026-06-23
```

Stores only date.

### TIMESTAMP

```text
2026-06-23 15:30:22
```

Stores date and time.

---

## Why Not Store Dates as VARCHAR?

Bad Design:

```sql
created_at VARCHAR(100)
```

Problems:

```text
23-06-2026
2026/06/23
June 23, 2026
```

Multiple formats create inconsistency.

Good Design:

```sql
created_at TIMESTAMP
```

PostgreSQL can:

* Sort dates
* Compare dates
* Perform date calculations

Example:

```sql
SELECT NOW() - created_at;
```

---

# DEFAULT Values

A DEFAULT value is automatically assigned when no value is provided during insertion.

Example:

```sql
is_verified BOOLEAN DEFAULT FALSE
```

If not specified:

```text
FALSE
```

will be inserted automatically.

---

Example:

```sql
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

Automatically stores current date and time.

---

# Production Style User Table

```sql
CREATE TABLE user_v2(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45),
    email VARCHAR(54),
    is_verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# New Concepts Learned

## SERIAL

```sql
id SERIAL PRIMARY KEY
```

Automatically generates incrementing values.

Example:

```text
1
2
3
4
...
```

PostgreSQL internally creates:

```text
user_v2_id_seq
```

which keeps track of the next available ID.

---

## PRIMARY KEY

```sql
PRIMARY KEY
```

Used to uniquely identify each row.

Example:

```text
id = 1
id = 2
id = 3
```

Duplicate values are not allowed.

---

# ALTER TABLE

Used to modify an existing table structure.

Syntax:

```sql
ALTER TABLE table_name
operation;
```

---

## Rename Column

Example:

```sql
ALTER TABLE user_v2
RENAME COLUMN is_varified TO is_verified;
```

---

Example:

```sql
ALTER TABLE user_v2
RENAME COLUMN createdat TO created_at;
```

---

## Why ALTER TABLE?

Because ALTER is a generic SQL command used to modify database objects.

PostgreSQL requires us to specify the object type being modified.

Example:

```sql
ALTER TABLE users ...
```

Meaning:

```text
Modify a table
```

---

# SQL Commands Practiced

## Insert Data

```sql
INSERT INTO user_v2(name, email)
VALUES(
    'Govind',
    'govind@gmail.com'
);
```

---

## Insert Data with Explicit Boolean Value

```sql
INSERT INTO user_v2(
    name,
    email,
    is_verified
)
VALUES(
    'Rahul',
    'rahul@gmail.com',
    TRUE
);
```

---

## Read Data

```sql
SELECT * FROM user_v2;
```

---

## Filter Data

Verified Users:

```sql
SELECT *
FROM user_v2
WHERE is_verified;
```

Alternative:

```sql
SELECT *
FROM user_v2
WHERE is_verified = TRUE;
```

---

Unverified Users:

```sql
SELECT *
FROM user_v2
WHERE NOT is_verified;
```

Alternative:

```sql
SELECT *
FROM user_v2
WHERE is_verified = FALSE;
```

---

## Describe Table Structure

```sql
\d user_v2
```

Displays:

* Columns
* Data Types
* Constraints
* Default Values
* Indexes

---

# Naming Conventions

Preferred PostgreSQL Naming Style:

```sql
created_at
updated_at
user_id
team_id
project_id
is_verified
```

This style is called:

```text
snake_case
```

Avoid:

```sql
createdAt
userId
isVarified
```

---

# Current TaskFlow Database Progress

```text
team_task_db

users
teams
projects (practice)

user_v2
 ├── id
 ├── name
 ├── email
 ├── is_verified
 └── created_at
```

---

# Key Takeaways

* Learned PostgreSQL Data Types.
* Understood INTEGER, VARCHAR, TEXT, BOOLEAN, DATE, and TIMESTAMP.
* Learned why choosing correct data types is important.
* Understood DEFAULT values.
* Learned how SERIAL works internally with sequences.
* Practiced creating production-style tables.
* Learned ALTER TABLE and column renaming.
* Practiced filtering BOOLEAN values using WHERE.
* Followed PostgreSQL naming conventions using snake_case.

Day 3 completed successfully ✅
