export interface FeedbackFormProps {
    isOpened: boolean,
    className: string,
    onSubmit: (params: Object) => Promise<any>
}