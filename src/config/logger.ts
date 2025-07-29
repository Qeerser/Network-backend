import winston from 'winston';
import Config from './env.js';

// Define log levels
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Define colors for each level
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};

// Add colors to winston
winston.addColors(colors);

// Define format for console output
const consoleFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`
    )
);

// Define format for file output
const fileFormat = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.errors({ stack: true }),
    winston.format.json()
);

// Define which transports to use based on environment
const transports: winston.transport[] = [];

// Console transport (always enabled)
transports.push(
    new winston.transports.Console({
        format: consoleFormat,
    })
);

// File transports (enabled in production or when specified)
if (Config.NODE_ENV === 'production' || process.env.ENABLE_FILE_LOGGING === 'true') {
    // Error log file
    transports.push(
        new winston.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            format: fileFormat,
        })
    );

    // Combined log file
    transports.push(
        new winston.transports.File({
            filename: 'logs/combined.log',
            format: fileFormat,
        })
    );
}

// Create the logger
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || (Config.NODE_ENV === 'development' ? 'debug' : 'info'),
    levels,
    transports,
    // Don't exit on handled exceptions
    exitOnError: false,
});

// Create a stream object for morgan integration
export const morganStream = {
    write: (message: string) => {
        logger.http(message.trim());
    },
};

export default logger;
