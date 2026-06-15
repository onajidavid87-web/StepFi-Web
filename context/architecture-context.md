# StepFi-Web Architecture

## What this is
React TypeScript web app for the StepFi protocol.
Targets sponsors and desktop users primarily.
Shares the same API as StepFi-App (React Native).

## Stack
- Vite + React 18 + TypeScript
- React Router v6 for navigation
- Zustand for state management
- TanStack Query for server state
- Axios for API calls
- Tailwind CSS for styling
- Framer Motion for animations
- Lucide React for icons
- @stellar/freighter-api for wallet connection

## Key rules
- No hardcoded hex colors: use constants/colors.ts
- No API calls in page files: use services/ only
- All icons from Lucide React only
- State management via Zustand stores only
- Every page needs loading, error, and empty states

## API
Base URL: https://stepfi-api.onrender.com/api/v1
Auth: JWT Bearer token stored in localStorage
Wallet: Freighter browser extension
