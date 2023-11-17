export const generateDate = (i) => {
    const now = new Date();
    const next = new Date();
    next.setDate(now.getDate() + i);
    return next.toDateString();
}

export const weatherImg = {
    clouds: "./src/assets/images/clouds.png",
    rain: "./src/assets/images/rain.png",
    clear: "./src/assets/images/clear.png",
    thunderstorm: "./src/assets/images/storm.png"
}