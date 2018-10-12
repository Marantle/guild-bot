import appRootPath from 'app-root-path'
import * as winston from 'winston'

const options = {
  console: {
    colorize: true,
    handleExceptions: true,
    json: false,
    level: 'debug',
  },
  file: {
    colorize: false,
    filename: `${appRootPath}/logs/app.log`,
    handleExceptions: true,
    json: true,
    level: 'info',
    maxFiles: 5,
    maxsize: 5242880, // 5MB
  },
}
const logger = winston.createLogger({
  exitOnError: false, // do not exit on handled exceptions
  format: winston.format.json(),
  level: 'info',
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  )
}

export default logger
