interface IFeedbacksStore {
    feedbacks: Feedback[];
    getFeedbacks(): Feedback[];
    addFeedback(item: Feedback): void;
}

class Feedback {
    id: string | number = '';
    name: string = '';
    title: string = '';
    rating: number = 0;
    text: string = '';
}

class FeedbacksStore implements IFeedbacksStore {
    feedbacks: Feedback[] = [];

    addFeedback(item: Feedback) {
        this.feedbacks.push(item);
    }

    removeFeedback(id) {
        this.feedbacks = this.feedbacks.filter(feedback => {
            return feedback.id !== id
        })
    }

    getFeedbacks(): Feedback[] {
        return this.feedbacks;
    }
}

