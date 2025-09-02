# Claude Code Instructions

## Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

To successfully deploy updates:

1. **Git deployment (automatic via webhook):**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```
   
2. **Manual Vercel deployment (if git webhook fails):**
   ```bash
   vercel --prod
   ```
   - Production URL: https://prazyl-website-j4ez2epvr-ryan-pontbriands-projects.vercel.app

## Project Structure

This is a Next.js 15 project with:
- TypeScript
- Tailwind CSS v4
- Framer Motion for animations
- Lucide React for icons

## Development Notes

- Dev server runs on http://localhost:3010 (port 3000 was in use)
- Main branch: `main`
- Recent changes focus on pricing model updates