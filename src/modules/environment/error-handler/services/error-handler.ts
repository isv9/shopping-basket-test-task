import {notificationService} from "../../notification/notification";
import {ErrorHandler} from "../use-cases/error-handler";

export const errorHandler = new ErrorHandler(notificationService);

