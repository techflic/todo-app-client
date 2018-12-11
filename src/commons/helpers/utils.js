export const authHeader = () => {
    let auth = localStorage.getItem("auth");
    let user = JSON.parse(localStorage.getItem("user"));

    if (auth && user) {
        return { Authorization: "Bearer " + auth };
    } else {
        return {};
    }
};
