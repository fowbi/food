# ---------- Base ----------
FROM node:14-alpine AS base

WORKDIR /usr/src/app

COPY package.json ./

# ---------- Builder ----------
FROM base AS builder

COPY . .
RUN yarn --frozen-lockfile
RUN yarn build
RUN yarn --production

# ---------- Release ----------
FROM base AS release

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

USER node

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]
