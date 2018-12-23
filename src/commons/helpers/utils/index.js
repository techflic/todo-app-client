export const authHeader = () => {
    let auth = localStorage.getItem("auth");
    let user = JSON.parse(localStorage.getItem("user"));

    if (auth && user) {
        return { Authorization: "Bearer " + auth };
    } else {
        return {};
    }
};

export const getBackground = (value) => {
    if (value.toLowerCase() === "high") return "#F44336";
    if (value.toLowerCase() === "medium") return "#FFEE58";
    if (value.toLowerCase() === "low") return "#B2FF59";
};

export const getTitle = (value) => {
    if (value.toLowerCase() === "high") return "High Priority";
    if (value.toLowerCase() === "medium") return "Medium Priority";
    if (value.toLowerCase() === "low") return "Low Priority";
};