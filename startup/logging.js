require('express-async-errors');
const winston = require('winston');

module.exports = function() {
  const logFile = new winston.transports.File({
    filename: 'log.log',
    format: winston.format.json(),
  });
  const console = new winston.transports.Console({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.simple()
    ),
  });
  const exceptionsLogFile = new winston.transports.File({
    filename: 'exceptions.log',
    format: winston.format.json(),
  });

  winston.add(logFile);
  winston.add(console);

  // winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly' });

  winston.exceptions.handle([console, exceptionsLogFile]);

  process.on('unhandledRejection', ex => {
    throw ex;
  });
};
