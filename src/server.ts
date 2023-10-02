import './config';
import { logger } from './logger';

process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception has occurred! Shutting down...', err);
  process.exit(1);
});

import app from './app';

const port = +(process.env.PORT ?? '3000');

const server = app.listen(port, () => {
  logger.info(`App is running at http://localhost:${port} in ${process.env.NODE_ENV} mode.`);
});

process.on('unhandledRejection', (err) => {
  logger.error('Unhandled rejection has occurred! Shutting down...', err);
  server.close(() => {
    process.exit(1);
  });
});
