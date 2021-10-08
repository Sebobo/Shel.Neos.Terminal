export default interface Command {
    description: string;
    usage: string;
    name: string;
    fn?: (args?: any[]) => void;
}
