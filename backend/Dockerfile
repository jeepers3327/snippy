FROM node:16-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package.json ./
RUN yarn install --frozen-lockfile


FROM node:16-alpine AS builder
WORKDIR /app

COPY . .
COPY .env.production ./.env
COPY --from=deps /app/node_modules ./node_modules

RUN npx prisma generate
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline


FROM node:16-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 4000

CMD [ "yarn", "run", "deploy" ]
