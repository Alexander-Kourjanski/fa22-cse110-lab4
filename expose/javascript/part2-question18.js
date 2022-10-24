function tellTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(tellTime, 1000);