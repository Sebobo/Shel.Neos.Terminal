const ConsoleStyle = {
    base: ['color: #fff', 'background-color: #00adee', 'font-weight: bold', 'padding: 2px 4px', 'border-radius: 2px'],
    error: ['color: #fff', 'background-color: red'],
    success: ['color: #fff', 'background-color: #00a338'],
    text: ['color:#fff'],
};

type LogType = 'log' | 'error' | 'info' | 'warn';

const logToConsole = (type: LogType = 'log', text: string, ...args: any[]) => {
    let finalStyle = ConsoleStyle.base.join(';') + ';';
    if (ConsoleStyle[type]) {
        finalStyle += ConsoleStyle[type].join(';');
    }
    console[type](`%c[Neos.Terminal]%c ${text}:`, finalStyle, ConsoleStyle.text.join(';'), ...args);
};

export default logToConsole;
