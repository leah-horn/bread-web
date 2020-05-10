export default {
    serverBaseUrl: 'https://localhost:8443/bread-war-1.0-SNAPSHOT',
    healthUrl: serverBaseUrl + '/meta/health',
    apiUrl: serverBaseUrl + '/api',
    loginUrl: apiUrl + '/user/login',
    logoutUrl: apiUrl + '/user/logout',
    userInfoUrl: apiUrl + '/user',
    recipeUrl: apiUrl + '/recipe',
}