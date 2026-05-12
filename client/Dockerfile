FROM node:lts AS base
WORKDIR /app

# Build context is the repo root; build with: docker build -f client/Dockerfile .
# This is required so the client can resolve `@payload-types` -> ../server/src/payload-types.ts.

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY client/package.json client/package-lock.json ./

FROM base AS prod-deps
RUN npm install --omit=dev

FROM base AS build-deps
RUN npm install

FROM build-deps AS build
COPY client/ ./
COPY server/src/payload-types.ts /server/src/payload-types.ts
RUN npm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD node ./dist/server/entry.mjs
