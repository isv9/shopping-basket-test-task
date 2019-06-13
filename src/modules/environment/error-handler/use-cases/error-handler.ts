import {NotificationService} from "modules/environment/notification/notification";
import {NetworkError} from "modules/environment/error-handler/entities/network-error";

export class ErrorHandler {

    constructor(private readonly notificationService: NotificationService) {
        this.processError = this.processError.bind(this);
    }

    processError(error: Error | undefined) {
        if (error instanceof NetworkError) {
            this.notificationService.showError(error.message);
            return;
        }
        //and ...
        this.notificationService.showError('Unknown error');
    }
}
