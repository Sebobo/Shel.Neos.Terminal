interface Window {
    NeosTerminal: {
        [key: string]: (...args) => Promise<string>;
    };
}

interface TerminalConfig {
    getCommandsEndPoint: string;
    invokeCommandEndPoint: string;
    checkCommandsEndPoint: string;
    theme: TerminalTheme;
    welcomeMessage?: string;
}

interface TerminalTheme {
    contentStyle: Record<string, any> | string;
    styleEchoBack: Record<string, any> | string;
    promptLabelStyle: Record<string, any> | string;
    inputTextStyle: Record<string, any> | string;
}
