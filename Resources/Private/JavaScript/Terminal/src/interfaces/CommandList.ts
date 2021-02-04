import Command from './Command';

export default interface CommandList {
    [key: string]: Command;
}
