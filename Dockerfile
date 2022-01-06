FROM node:12.19.0-alpine3.9 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


FROM node:12.19.0-alpine3.9
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start"]