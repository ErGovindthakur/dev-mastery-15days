# Dealer CRM - CSV Import & Management System

A production-style Dealer CRM built with **Next.js 16**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**. The application allows users to upload dealer data through CSV files, validates every record, detects duplicates, stores valid dealers, logs invalid records, and provides upload history, analytics, and dealer management.

---

## 🚀 Features

### CSV Upload
- Upload dealer data using CSV files.
- Parse CSV using PapaParse.
- Validate every row before inserting into the database.

### Data Validation
- Zod schema validation.
- Indian mobile number validation.
- Email validation and normalization.
- State validation.
- Credit limit validation.
- Required field validation.

### Duplicate Detection
- Detect duplicate phone numbers inside the uploaded CSV.
- Detect existing phone numbers already present in the database.
- Prevent duplicate dealer insertion.

### Transaction-Based Upload
Entire upload process runs inside a single Prisma transaction.

If any unexpected database error occurs:
- Upload is rolled back.
- Database consistency is maintained.

### Upload History
- Paginated upload history.
- Search uploads by filename.
- Upload status tracking.
- Upload statistics.

### Dealer Management
- View all dealers.
- Pagination.
- Search by:
  - Name
  - Email
  - Phone
- Dealer details page.

### Error Reporting
Every invalid row is stored with:
- Row Number
- Column Name
- Invalid Value
- Error Message

### Analytics
Dashboard statistics including:
- Total Dealers
- Total Credit Limit
- Upload Statistics

---

# 🏗️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 16 | Full Stack Framework |
| TypeScript | Type Safety |
| Prisma ORM | Database ORM |
| PostgreSQL | Database |
| PapaParse | CSV Parsing |
| Zod | Schema Validation |
| Tailwind CSS v4 | UI Styling |
| React Dropzone | File Upload |
| Recharts | Dashboard Charts |

---

# 📂 Project Architecture

```
src/
│
├── modules/
│   ├── dealer/
│   │     ├── dealer.repository.ts
│   │     ├── dealer.service.ts
│   │     ├── dealer.validator.ts
│   │
│   ├── upload/
│   │     ├── upload.repository.ts
│   │     ├── upload.service.ts
│   │
│   └── upload-error/
│
├── lib/
│     ├── prisma.ts
│     └── csv.ts
│
└── app/
```

The project follows a layered architecture:

```
UI
 ↓
API Route
 ↓
Service Layer
 ↓
Repository Layer
 ↓
Prisma ORM
 ↓
PostgreSQL
```

---

# ⚙️ Upload Workflow

```text
User Uploads CSV
        │
        ▼
Parse CSV (PapaParse)
        │
        ▼
Validate Data (Zod)
        │
        ▼
Detect Duplicate Phones
        │
        ▼
Start Prisma Transaction
        │
        ├── Create Upload Record
        ├── Insert Valid Dealers
        ├── Store Upload Errors
        └── Update Upload Summary
        │
        ▼
Return Upload Report
```

---

# 📊 Database Entities

## Upload

Stores upload metadata.

- Filename
- Upload Status
- Total Rows
- Inserted Rows
- Failed Rows
- Created At

---

## Dealer

Stores dealer information.

- Name
- Phone
- Email
- City
- State
- Credit Limit

---

## Upload Error

Stores validation failures.

- Row Number
- Column Name
- Invalid Value
- Error Message

---

# ✅ Validation Rules

- Name must contain at least 5 characters.
- Valid Indian mobile number.
- Valid email address.
- State must exist in predefined list.
- Credit limit must be positive.
- Duplicate phone numbers inside CSV are rejected.
- Existing phone numbers in database are rejected.

---

# 📈 Analytics

The dashboard provides:

- Total Dealers
- Total Credit Limit
- Upload History
- Successful Imports
- Failed Imports

---

# 🛡️ Error Handling

The application handles:

- Invalid CSV rows
- Missing required fields
- Invalid emails
- Invalid phone numbers
- Invalid states
- Duplicate phone numbers
- Database duplicate conflicts
- Transaction failures

---

# 💡 Key Learning Outcomes

During this project, I learned:

- Repository-Service architecture
- Prisma transactions
- Database normalization
- CSV parsing with PapaParse
- Schema validation using Zod
- Pagination and search
- Error logging strategies
- Production-style backend development
- Clean code organization
- Transaction-safe bulk imports

---

# 🚀 Future Improvements

- Authentication & Authorization
- Role-Based Access Control (RBAC)
- Excel (.xlsx) support
- Background processing using job queues
- File storage (AWS S3 / Cloudinary)
- Audit logs
- Dashboard charts
- Bulk export to Excel/PDF
- Docker deployment
- Unit & Integration tests

---

# 🛠️ Installation

```bash
git clone <repository-url>

cd project

npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_postgresql_database_url
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run migrations:

```bash
npx prisma migrate dev
```

Start the development server:

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 📌 Project Highlights

- Production-ready folder structure
- Clean Repository-Service pattern
- Transaction-safe CSV imports
- Robust validation pipeline
- Duplicate detection
- Upload history and analytics
- Scalable backend architecture

---

## 👨‍💻 Author

**Govind Thakur**

- GitHub: https://github.com/ErGovindthakur

---

## 📄 License

This project is built for learning and portfolio purposes.
