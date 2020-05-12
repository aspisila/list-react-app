import Cookies from 'js-cookie';

export function getToken() {
    return Cookies.get('__session');
}

export function isAuthenticated() {
    const jwt = getToken();
    let session;

    try {
        if (jwt) {
            const base64Url = jwt.split('.')[1];
            const base64 = base64Url.replace('-', '+').replace('_', '/');
        
            session = JSON.parse(window.atob(base64));
        }
    }
    catch (error) {
        console.log(error);
        return false;
    }

    return session;
}