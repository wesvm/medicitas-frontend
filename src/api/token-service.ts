const TOKEN_KEY = 'access_token';

export const setToken = (token: string) => {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token)
};

export const getToken = (): string | null => {
    return sessionStorage.getItem(TOKEN_KEY);
};

export const removeToken = (): void => {
    sessionStorage.removeItem(TOKEN_KEY);
};

export const getTokenExpiration = (token: string): boolean => {
    const payload = (JSON.parse(atob(token.split('.')[1])));
    return Math.floor((new Date).getTime() / 1000) >= payload.exp;
};

export const getTokenRole = (token: string): string | null => {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.role;
};