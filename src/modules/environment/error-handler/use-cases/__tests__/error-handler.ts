import {ErrorHandler} from "modules/environment/error-handler/use-cases/error-handler";
import {NotificationService} from "modules/environment/notification/notification";
import {NetworkError} from "modules/environment/error-handler/entities/network-error";

describe('ErrorHandler', () => {

    let errorHandler: ErrorHandler;
    let notificationService: NotificationService;

    beforeEach(() => {
        notificationService = {
            showError: jest.fn() as any,
        };
        errorHandler = new ErrorHandler(notificationService);
    });

    it('unknown error', () => {
        errorHandler.processError(new Error('test error'));
        expect((notificationService.showError as any).mock.calls).toMatchSnapshot();
    });

    it('NetworkError', () => {
        errorHandler.processError(new NetworkError());
        expect((notificationService.showError as any).mock.calls).toMatchSnapshot();
    });
});