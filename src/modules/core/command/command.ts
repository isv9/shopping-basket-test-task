export interface Command<TExecuteResult = void> {
    isAvailable: boolean;

    execute(): TExecuteResult;
}
