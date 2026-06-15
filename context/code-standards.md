# Code Standards for StepFi-Web

## TypeScript
- Strict mode enabled
- No any types anywhere
- All props typed with interfaces
- All API responses typed with types/index.ts

## Components
- Functional components only
- Props interfaces above component
- Named exports only (no default exports for components)
- One component per file

## Styling
- Tailwind classes only
- No inline styles except for dynamic values
- Dark theme: bg-bg, surface, elevated
- Brand color: text-brand, bg-brand
- Never hardcode hex values in JSX

## File naming
- Pages: PascalCase (Home.tsx, Dashboard.tsx)
- Components: PascalCase (Navbar.tsx, Button.tsx)
- Services: camelCase (auth.service.ts)
- Stores: camelCase (wallet.store.ts)
- Hooks: camelCase starting with use (useWallet.ts)

## Git
- Branch: feat/description or fix/description
- Commit: conventional commits (feat:, fix:, chore:)
- Every PR references an issue number
