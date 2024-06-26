FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app


COPY package*.json ./


RUN npm install --legacy-peer-deps

COPY . .


EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"


CMD ["npm", "run", "start:dev"]
