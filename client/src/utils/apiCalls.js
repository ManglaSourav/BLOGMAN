export default async function apiCall(api, params = {}) {
    let response;
    let reqCount = 1;
    do {
        response = await api(params);
        reqCount = reqCount + 1;
    } while (!response && (reqCount < 4))
    return response;
}
