import {ErrorHandler} from "modules/environment/error-handler/use-cases/error-handler";
import {notificationService} from "modules/environment/notification/notification";

export const errorHandler = new ErrorHandler(notificationService);

