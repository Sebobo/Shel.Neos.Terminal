// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';
import { CommandList } from '../interfaces';

const fetchCommands = async (endPoint): Promise<{ success: boolean; result: CommandList }> => {
    return fetchWithErrorHandling
        .withCsrfToken((csrfToken) => ({
            url: endPoint,
            method: 'GET',
            credentials: 'include',
            headers: {
                'X-Flow-Csrftoken': csrfToken,
                'Content-Type': 'application/json',
            },
        }))
        .then((response) => response && response.json());
};

export default fetchCommands;
