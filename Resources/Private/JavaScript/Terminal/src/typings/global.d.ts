interface Window {
    NeosTerminal: {
        [key: string]: (...args) => Promise<string>;
    };
}

interface TerminalConfig {
    getCommandsEndPoint: string;
    invokeCommandEndPoint: string;
    theme: TerminalTheme;
    welcomeMessage?: string;
}

interface TerminalTheme {
    contentStyle: Record<string, any> | string;
    styleEchoBack: Record<string, any> | string;
    promptLabelStyle: Record<string, any> | string;
    inputTextStyle: Record<string, any> | string;
}

interface NodeResult {
    __typename: 'NodeResult';
    identifier: string;
    label: string;
    nodeType: string;
    icon: string;
    breadcrumb: string;
    uri: string;
    score: string;
}
