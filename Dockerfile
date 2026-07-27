## Multi-stage build: build with Node, serve static with nginx
FROM node:18-alpine AS builder
WORKDIR /app

# Install dependencies (use npm install so build works without a host-generated package-lock.json)
COPY package.json package-lock.json* ./
RUN npm install --silent

# Copy source and build
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Replace default nginx config with SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
