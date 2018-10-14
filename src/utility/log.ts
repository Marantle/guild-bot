import * as winston from 'winston'
const { format, createLogger, transports } = winston
const { combine, timestamp, json } = format
declare var __dirname: any

const options = {
  console: {
    colorize: true,
    handleExceptions: true,
    json: false,
    level: 'debug',
  },
  file: {
    colorize: false,
    filename: `${__dirname}/logs/app.log`,
    handleExceptions: true,
    json: true,
    level: 'info',
    maxFiles: 5,
    maxsize: 5242880, // 5MB
  },
}
const myFormat = combine(
  timestamp(),
  json(),
)

const log = createLogger({
  exitOnError: false, // do not exit on handled exceptions
  format: myFormat,
  level: 'info',
  transports: [
    new transports.File(options.file),
    new transports.Console(options.console),
  ],
})

// if (process.env.NODE_ENV !== 'production') {
//   log.add(
//     new transports.Console({
//       format: winston.format.simple(),
//     }),
//   )
// }
log.info(`logs written to ${__dirname}/logs/app.log`)
export default log
