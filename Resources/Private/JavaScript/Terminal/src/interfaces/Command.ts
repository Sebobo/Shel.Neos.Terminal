export default interface Command {
    argumentName?: string;
    description: string;
    usage: string;
    endPoint: string;
    requiresNodeContext: false;
}
