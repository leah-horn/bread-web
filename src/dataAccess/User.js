import serverConfig from '../ServerConfig'

export default login = (user, password, remember) => {
    const request = new Request(serverConfig.loginUrl, {
        method: 'POST', headers: {
            'username': user,
            'password': password
        },
        body: {
            'remember-me': remember
        }
    });
    return request.json();
}

export default logout = () => {
    const request = new Request(serverConfig.loginUrl, {
        method: 'POST'
    });
    return request.json();
}