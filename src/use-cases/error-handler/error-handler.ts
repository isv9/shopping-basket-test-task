import { NotificationService } from '../../services/notification';
import { NetworkError } from '../../entities/error-handler/network-error';

export class ErrorHandler {
    private readonly notificationService: NotificationService;

    constructor(notificationService: NotificationService) {
        this.notificationService = notificationService;
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