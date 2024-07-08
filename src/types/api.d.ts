interface IMessageResponse {
    message: string;
    errors?: Record<string, string[]>;
}