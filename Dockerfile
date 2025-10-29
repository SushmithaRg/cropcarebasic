# Multi-stage build for CropCare 360
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/

# Install dependencies
RUN npm ci --only=production
RUN cd server && npm ci --only=production

# Copy source code
COPY . .

# Build frontend
RUN npm run build

# Production stage
FROM node:18-alpine AS production

# Install system dependencies
RUN apk add --no-cache \
    sqlite \
    curl \
    && rm -rf /var/cache/apk/*

# Create app user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S cropcare -u 1001

# Set working directory
WORKDIR /app

# Copy built application
COPY --from=builder --chown=cropcare:nodejs /app/dist ./dist
COPY --from=builder --chown=cropcare:nodejs /app/server ./server
COPY --from=builder --chown=cropcare:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=cropcare:nodejs /app/package*.json ./

# Create necessary directories
RUN mkdir -p /app/data /app/server/uploads
RUN chown -R cropcare:nodejs /app

# Switch to non-root user
USER cropcare

# Expose ports
EXPOSE 3000 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3001/health || exit 1

# Start application
CMD ["npm", "start"]