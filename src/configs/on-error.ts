import {errorHandler} from "modules/environment/error-handler/services/error-handler";

window.onerror = (event: Event | string,
                  source?: string,
                  lineno?: number,
                  colno?: number,
                  error?: Error) => {
    errorHandler.processError(error);
};
