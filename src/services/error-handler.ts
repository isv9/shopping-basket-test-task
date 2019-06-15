import { notificationService } from './notification';
import { ErrorHandler } from '../use-cases/error-handler/error-handler';

export const errorHandler = new ErrorHandler(notificationService);
