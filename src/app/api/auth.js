import urlApi from "@/config/globals_api";

export const loginRequest = async (data) => {
    const url = `${urlApi}/login`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await response.json();
}

export const registerRequest = async (data) => {
    const url = `${urlApi}/registerClient`;
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await response.json();
}