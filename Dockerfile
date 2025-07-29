# Stage 1: Build the Express.js TypeScript application
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package.json, pnpm-lock.yaml, and pnpm-workspace.yaml for optimal caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of your application code
COPY . .

# Generate Prisma client and build the TypeScript app
RUN pnpm run build

# Stage 2: Runtime stage for the Express.js server
FROM node:lts-alpine AS runner

WORKDIR /app

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package.json, pnpm-lock.yaml, and pnpm-workspace.yaml
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Copy Prisma schema and migrations for runtime
COPY --from=builder /app/prisma ./prisma


# Copy any other necessary files (like .env if needed in production)
# COPY .env ./

# Create a non-root user for security
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership of the app directory to the nodejs user
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose the port your Express server runs on
EXPOSE 5000

# Command to start the Express server
CMD ["pnpm", "start"]