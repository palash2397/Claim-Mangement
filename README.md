# Case Management Backend (Node.js + Express + MongoDB)

## Setup
1. Install dependencies:
```bash
npm install
```

2. Create `.env` from `.env.example`:
```bash
cp .env.example .env
```

3. Start in dev mode:
```bash
npm run dev
```

Server runs at:
- http://localhost:5000

## Auth
- POST `/api/auth/register`
- POST `/api/auth/login`

All other routes require:
`Authorization: Bearer <token>`

## Modules
- Contacts: `/api/contacts`
- Cases: `/api/cases`
- Events: `/api/events`
- Tasks: `/api/tasks`
- Call Logs: `/api/calllogs`
- Fee List: `/api/feelist`
- Time Loss: `/api/timeloss`
- Excel Upload/List: `/api/excel`

## Excel Upload
Endpoint: `POST /api/excel/upload`
Form-data:
- sheetName (text)
- sheetType (text)
- file (file)
