const countdown = () => {
    const countDate = new Date('May 20, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const differ = countDate - now;

    //
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    //
    const textDay = Math.floor(differ / day);
    const textHour = Math.floor((differ % day) / hour)
    const textMin = Math.floor((differ % hour) / min)
    const textSecs = Math.floor((differ % min) / sec)

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.min').innerHTML = textMin;
    document.querySelector('.sec').innerHTML = textSecs;
    console.log(textSecs)

    // if (differ < 1000) {
    //     dothis();
    // }

}

setInterval(countdown, 1000)