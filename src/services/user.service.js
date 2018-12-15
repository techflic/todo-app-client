
export const userService = {
    login,
    logout,
    register
};

const API = 'http://127.0.0.1:3001/api/v1'

const USER_API = `${API}/user`

function login(email, password) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    };

    return fetch(`${USER_API}/`, requestOptions)
        .then(handleResponse)
        .then(response => {
            //console.log('Inside set client : ', response)
            if (response.token) {
                localStorage.setItem("auth", response.token);
            }
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response;
        });
}

function logout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
}

function register(user) {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user)
    };

    return fetch(`${USER_API}/`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    //console.log('Fetch / API response handler : ', response)
    return response.text().then(text => {   // get response body by calling .text() funct of actual response which will just return JSON String of our response body
        //console.log('Response text / JSON string : ', text)
        const _response = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                logout();
                //window.location.reload(true);
            }

            const error = (_response && _response.message) || response.statusText;
            return Promise.reject(error);
        }
        //console.log('Response : ', _response)
        return _response;
    });
}
