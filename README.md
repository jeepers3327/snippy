# Snippy

Learning NextJs and NestJS by making a Github Gists clone

### Features
- Create, Update, Delete Gists
- List of all public gists
- List gists per user
- Gists can be private
- Multiple files per gist
- Allow users to comment to a gist
- Download gist files as zip
- Can search for gists via snippets or filenames
- User Authentication through httpOnly cookie
- Synthax highlighting (supported programming languages)
- Rating gists (Stars)


## Tech stack
- NextJs
- NestJs
- Postgres
- Redis
- Caddy
- Docker
- Docker Compose

## Start the application

#### Create .env in backend directory

```
DATABASE_URL="POSTGRES_DATABASE_URL"
CHECKPOINT_DISABLE=1 # If you want to disable Prisma telemetry
DEBUG="prisma:client,prisma:engine" # Set Prisma debugging property

APP_SECRET=something # Needed for cookie config
APP_PORT=4000 # Override default port

REDIS_URI=redis://localhost # Your redis url
```

#### Create .env in frontend directory

```
NEXT_TELEMETRY_DISABLED=1 # If you want to disable NextJs telemetry
NEXT_PUBLIC_API_URL=your-backend-api-url # This will be used as baseUrl of Axios
```

_Replace env values to your liking_


#### To run the app locally
Before starting any app, do the following
```
✔︎ snippy (main) ✗ cd backend/
✔︎ backend (main) ✗ npx prisma migrate dev --preview-feature
```

Set NextJS base url
```
NEXT_PUBLIC_API_URL=localhost:4000
```

To start backend
```
✔︎ snippy (main) ✗ cd backend/
✔︎ backend (main) ✗ yarn start:dev
```

To start frontend
```
✔︎ snippy (main) ✗ cd frontend/
✔︎ frontend (main) ✗ yarn dev
```

#### Using docker-compose to deploy the app

```
✔︎ snippy (main) docker-compose build
✔︎ snippy (main) docker-compose up -d
```

Execute the command to stop the app
```
✔︎ snippy (main) docker-compose down
```

### TODO
- [ ] Fix reverse proxy issue during deployment
- [ ] Add pagination
