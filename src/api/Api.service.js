const API_HOME = 'http://localhost:3001';

const API_AUTHORIZATION_KEY = '0123456789abc';

const defaultHeaders = {
    'Accept': 'application/json',
    'Authorization': API_AUTHORIZATION_KEY
};

const headersWithPayload = {
    ...defaultHeaders,
    'Content-Type': 'application/json'
};

export default class ApiService {

    static get(url, options) {
        return customFetch(url, {
            headers: defaultHeaders,
            ...options
        });
    }

    static patch(url, body, options) {
        return customFetch(url, {
            method: 'PATCH',
            headers: headersWithPayload,
            body: JSON.stringify(body),
            ...options
        });
    }

    static post(url, body, options) {
        return customFetch(url, {
            method: 'POST',
            headers: headersWithPayload,
            body: JSON.stringify(body),
            ...options
        });
    }

    static put(url, body, options) {
        return customFetch(url, {
            method: 'PUT',
            headers: headersWithPayload,
            body: JSON.stringify(body),
            ...options
        });
    }

    static delete(url, options) {
        return customFetch(url, {
            method: 'DELETE',
            headers: defaultHeaders,
            ...options
        });
    }
}

function customFetch(url, options) {
    return fetch(`${API_HOME}/${url}`, options)
        .then(res => {
            if (!res.ok){
                throw new Error('Request error');
            }
            return res.json();
        })
}