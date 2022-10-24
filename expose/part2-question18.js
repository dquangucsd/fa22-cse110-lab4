let d = new Date();
let time = d.toLocaleTimeString();
setInterval(() => {
    console.log(time);
    d = new Date();
    time = d.toLocaleTimeString();
}, 1000);

clearInterval(time);