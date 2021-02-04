type FETCH_METHOD = 'POST' | 'GET';

const fetchData = (path: string, params?: Record<string, string>, method: FETCH_METHOD = 'POST'): Promise<any> => {
    const queryString =
        method === 'GET'
            ? Object.keys(params)
                  .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
                  .join('&')
            : null;
    const body = params && method === 'POST' ? JSON.stringify(params) : null;

    const options: RequestInit = {
        method,
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body,
    };

    return fetch(`${path}?${queryString}`, options)
        .then((res) => res.json())
        .then(async (data) => {
            if (data.success) {
                return data;
            }
            throw new Error(data.message);
        });
};

export default fetchData;
