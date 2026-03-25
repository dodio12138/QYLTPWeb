# QYLTP Web

Lightweight MVP website for a London Chinese noodle shop.

## Stack
- Next.js + TypeScript
- Tailwind CSS
- JSON content (`content/menu.json`, `content/site.json`)
- Docker (local + production image)
- GitHub Actions deployment to ECS

## Local Development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000`

## Docker Dev
```bash
docker compose up --build
```

## Content Editing
- Update menu: `content/menu.json`
- Update store info: `content/site.json`

## MVP Routes
- `/`
- `/menu`
- `/about`
- `/contact`
- `/reserve`
- `/privacy`

## Deploy Workflow
Workflow file: `.github/workflows/deploy.yml`

Required repository secrets:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `ECR_REPOSITORY`
- `ECS_CLUSTER`
- `ECS_SERVICE`

Task definition template:
- `.aws/task-definition.json`
