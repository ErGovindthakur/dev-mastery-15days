# Day 2 - PostgreSQL Architecture & Basic Commands

## Overview

Today, I learned the fundamental building blocks of PostgreSQL and practiced basic SQL commands using the PostgreSQL terminal (`psql`).

---

## PostgreSQL Fundamentals

### PostgreSQL Server

PostgreSQL is a database server software that manages databases, handles application requests, stores data, and processes queries.

### Database

A database is a container that holds related data and makes it organized, secure, and efficient to manage.

**Example:** `team_task_db`

### Schema

A schema is a logical container inside a database that organizes tables, views, functions, and other database objects.

**Default Schema:** `public`

### Table

A table is a collection of related data organized into rows and columns.

**Example:** `users`, `teams`

### Row

A row represents a single record in a table.

**Example:**

| id | name   | email      |
| -- | ------ | ---------- |
| 1  | Govind | govind@124 |

### Column

A column represents an attribute or property of a table.

**Example:**

```text
id
name
email
```

---

## PostgreSQL Commands Learned Today

### Open PostgreSQL Terminal

```bash
psql -U postgres
```

Used to connect to the PostgreSQL server through the terminal.

---

### List All Databases

```sql
\l
```

Displays all databases available in the PostgreSQL server.

---

### Connect to a Database

```sql
\c database_name
```

Example:

```sql
\c team_task_db
```

Used to switch from the current database to another database.

---

### Create a Database

```sql
CREATE DATABASE database_name;
```

Example:

```sql
CREATE DATABASE team_task_db;
```

Creates a new database.

---

### Create a Table

```sql
CREATE TABLE table_name(
    field_name DATA_TYPE CONSTRAINTS
);
```

Example:

```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(45),
    email VARCHAR(45)
);
```

Creates a new table inside the database.

---

### Show All Tables

```sql
\dt
```

Displays all tables available in the current database.

---

### Describe Table Structure

```sql
\d table_name
```

Example:

```sql
\d users
```

Shows:

* Columns
* Data Types
* Constraints
* Indexes

---

### Insert Data

```sql
INSERT INTO table_name(column1, column2)
VALUES
(value1, value2),
(value3, value4);
```

Example:

```sql
INSERT INTO users(name, email)
VALUES
('Govind', 'govind@124');
```

Adds records into a table.

---

### Read Data

```sql
SELECT * FROM table_name;
```

Example:

```sql
SELECT * FROM users;
```

Fetches all records from a table.

---

### Update Data

```sql
UPDATE table_name
SET column_name = 'new_value'
WHERE id = 1;
```

Example:

```sql
UPDATE users
SET name = 'Govind Kumar'
WHERE id = 1;
```

Modifies existing records.

---

### Delete Data

```sql
DELETE FROM table_name
WHERE id = 1;
```

Removes specific records from a table.

---

### Show All Relations

```sql
\d
```

Displays all database relations including:

* Tables
* Sequences
* Views
* Indexes

---

## New Concepts Learned

### SERIAL

```sql
id SERIAL PRIMARY KEY
```

Automatically generates incrementing values:

```text
1
2
3
4
...
```

PostgreSQL creates a sequence internally:

```text
users_id_seq
```

---

### PRIMARY KEY

```sql
PRIMARY KEY
```

Uniquely identifies each row in a table.

Example:

```text
id = 1
id = 2
id = 3
```

Duplicate values are not allowed.

---

## Current TaskFlow Database Structure

```text
team_task_db
│
├── users
│   ├── id
│   ├── name
│   └── email
│
└── teams
    ├── id
    ├── name
    └── description
```

---

## Key Takeaways

* Learned PostgreSQL architecture.
* Understood Database, Schema, Table, Row, and Column.
* Created databases and tables.
* Inserted and queried data.
* Learned how `SERIAL` and `PRIMARY KEY` work.
* Practiced essential PostgreSQL terminal commands.
* Started building the foundation of the TaskFlow SaaS database project.
