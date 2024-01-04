// @ts-ignore
import { fetchWithErrorHandling } from '@neos-project/neos-ui-backend-connector';

const checkCommands = async (endpoint): Promise<{ success: boolean }> => {
    try {
        const response = await fetchWithErrorHandling
            .withCsrfToken((csrfToken) => ({
                url: endpoint,
                method: 'GET',
                credentials: 'include',
                headers: {
                    'X-Flow-Csrftoken': csrfToken,
                    'Content-Type': 'application/json',
                },
            }));

        return await response.json();
    } catch (error) {
        // Handle other errors here
        return { success: false };
    }
};

export default checkCommands;
