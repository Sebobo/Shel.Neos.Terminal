// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';
import { CommandList } from '../interfaces';
import logToConsole from './logger';

const fetchCommands = async (endPoint: string): Promise<{ success: boolean; result: CommandList }> => {
    return fetchWithErrorHandling
        .withCsrfToken((csrfToken: string) => ({
            url: endPoint,
            method: 'GET',
            credentials: 'include',
            headers: {
                'X-Flow-Csrftoken': csrfToken,
                'Content-Type': 'application/json',
            },
        }))
        .then((response: Response) => response && response.json())
        .catch((error: Error) => {
            logToConsole('error', error.message);
            return {
                success: false,
                result: [],
            };
        });
};

export default fetchCommands;
