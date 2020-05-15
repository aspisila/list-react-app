import Cookies from 'js-cookie';

export const TOKEN_KEY = "@spiapp-Token";

export const isAuthenticated = () => {
    return !!Cookies.get(TOKEN_KEY);
};
export const getToken = () => Cookies.get(TOKEN_KEY);

export const login = (token: string) => {
  Cookies.set(TOKEN_KEY, token)
};
export const logout = () => {
    Cookies.remove(TOKEN_KEY);
};