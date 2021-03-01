// TODO: This is a copy of the interface in Neos.Ui and should preferably be made available to plugins
export type Feedback = Readonly<{
    type: string;
    description: string;
    payload: unknown;
}>;

export type FeedbackEnvelope = Readonly<{
    feedbacks: Feedback[];
}>;
