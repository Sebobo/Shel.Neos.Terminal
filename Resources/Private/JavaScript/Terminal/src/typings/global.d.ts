interface Window {
    NeosTerminal: {
        [key: string]: (...args) => Promise<string>;
    };
}
