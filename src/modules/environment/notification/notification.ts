export interface NotificationService {
    showError(errorMessage: string): void
}

export const notificationService: NotificationService = {
    showError: (errorMessage: string) => {
        alert(`Error: ${errorMessage}`);
    }
};