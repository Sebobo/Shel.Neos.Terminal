// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';
import { CommandList } from '../interfaces';

const fetchCommands = async (endPoint): Promise<{ success: boolean; result: CommandList }> => {
    try {
        const response = await fetchWithErrorHandling
            .withCsrfToken((csrfToken) => ({
                url: endPoint,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json',
                },
            }));

        if (response.status === 403) {
            // Handle 403 errors here
            return { success: false, result: {} };
        }

        const result = await response.json();
        return { success: true, result };
    } catch (error) {
        // Handle other errors here
        return { success: false, result: {} };
    }
};

export default fetchCommands;
