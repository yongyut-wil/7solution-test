# 7Solution Test Project

This project consists of a NestJS gRPC backend service and a Next.js frontend application with Material UI.

## Project Structure

- `backend/`: NestJS gRPC service that fetches user data from dummyjson.com
- `frontend/`: Next.js application with Material UI for displaying user data

## Backend

The backend is a NestJS application that provides a gRPC service to fetch user data from the dummyjson.com API.

### Features

- gRPC service for fetching user data
- TypeScript interfaces for type safety
- Axios for HTTP requests

### Running the Backend

```bash
cd backend
pnpm install
pnpm run start:dev
```

## Frontend

The frontend is a Next.js application with Material UI that connects to the gRPC backend service.

### Features

- Next.js with TypeScript
- Material UI for styling
- gRPC client for connecting to the backend

### Running the Frontend

```bash
cd frontend
pnpm install
pnpm run dev
```

## Development

This project uses pnpm for package management.
