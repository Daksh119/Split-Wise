# SplitWise - Group Expense Tracker

## Features

- **Expense Tracking**: Record and track expenses shared among group members.
- **Debt Settlement**: Calculate and settle debts between group members efficiently.
- **User Authentication**: Secure user login and authentication with user image upload.
- **Responsive Design**: User-friendly interface with responsive design for various devices.


### Install Dependencies

```
npm install
Run postgres either locally or on the cloud (neon.tech)
```

### Create enviroment variables (.env) files
```
Copy over all .env.example files to .env
Update .env files everywhere with the right database url and cloudinary keys
```

### Migrate Database and Generate Prisma Client
```
- npx prisma migrate dev
- npx prisma db seed
```

### Run (In the parent directory)

```
- npm run dev
```


## Build & Deploy

```
npm run build
```