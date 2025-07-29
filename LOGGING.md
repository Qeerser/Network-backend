# Backend Logging System

This backend uses **Winston** as the primary logging library with **Morgan** for HTTP request logging.

## Features

- **Structured Logging**: JSON format for file logs, colorized format for console
- **Multiple Log Levels**: error, warn, info, http, debug
- **HTTP Request Logging**: Automatic logging of all HTTP requests via Morgan
- **File Logging**: Optional file logging for production environments
- **Environment-based Configuration**: Different logging levels for development/production

## Log Levels

1. **error**: Error messages and exceptions
2. **warn**: Warning messages (authentication failures, etc.)
3. **info**: General information (server startup, user login/register, socket connections)
4. **http**: HTTP request logs (handled by Morgan)
5. **debug**: Detailed debug information (socket groups, detailed operations)

## Configuration

### Environment Variables

Add these to your `.env` file:

```bash
# Logging settings
LOG_LEVEL=debug              # Set log level: error, warn, info, http, debug
ENABLE_FILE_LOGGING=true     # Enable file logging (optional)
```

### File Structure

```
backend/
├── logs/
│   ├── error.log      # Error-level logs only
│   └── combined.log   # All logs
└── src/
    └── config/
        └── logger.ts  # Logger configuration
```

## Usage Examples

### In Controllers

```typescript
import logger from '../config/logger.js';

// Info logging
logger.info('User registered successfully', { userId, email });

// Warning logging
logger.warn('Invalid login attempt', { email, ip: req.ip });

// Error logging
logger.error('Database connection failed', error);

// Debug logging
logger.debug('Processing user data', { userData });
```

### Current Implementation

- **Authentication**: Logs login attempts, failures, and successful registrations
- **Socket.IO**: Logs connections, disconnections, and authentication
- **HTTP Requests**: All HTTP requests are automatically logged
- **Error Handling**: Global error handler logs all unhandled errors
- **Server**: Logs server startup and configuration

## Log Output Examples

### Console Output (Development)
```
2025-01-29 10:30:15:123 info: 🚀 HTTP server running on http://localhost:5000
2025-01-29 10:30:20:456 info: Login attempt for email: user@example.com
2025-01-29 10:30:20:789 info: Login successful for user: user@example.com
```

### File Output (Production)
```json
{
  "level": "info",
  "message": "Login successful for user: user@example.com",
  "timestamp": "2025-01-29 10:30:20:789"
}
```

## Benefits

1. **Debugging**: Easy to trace issues with detailed logging
2. **Monitoring**: Track application performance and user behavior
3. **Security**: Log authentication attempts and failures
4. **Maintenance**: Structured logs for better analysis
5. **Production Ready**: File logging for production environments

## Log Rotation

For production environments, consider setting up log rotation using tools like `logrotate` or Winston's built-in rotation:

```typescript
new winston.transports.File({
  filename: 'logs/combined.log',
  maxsize: 5242880, // 5MB
  maxFiles: 5,
})
```
