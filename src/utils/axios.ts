import axios, { AxiosRequestConfig } from 'axios';

interface ApiRequestParams {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    data?: any;
    headers?: Record<string, string>;
}

export const makeApiRequest = async ({
    url,
    method = 'GET',
    data = null,
    headers = {},
}: ApiRequestParams) => {
    try {
        const config: AxiosRequestConfig = {
            method,
            url,
            headers: {
                'Content-Type': 'application/json',  // Default header
                ...headers,  // Merge any additional headers passed in
            },
            data,  
        };

        const response = await axios(config);
        console.log("Axios Response",response)
        return response.data;
    } catch (error: any) {
        console.error('Error making API request:', error.message);
        return null;
    }
};
