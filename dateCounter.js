
function setTimerLabel(){
    const releaseDate = new Date();
    const currentDate = new Date();
    releaseDate.setFullYear(2011,11,11);
    releaseDate.setMinutes(0);
    releaseDate.setSeconds(0);

    // get total seconds between the times
    var delta = Math.abs(currentDate - releaseDate) / 1000;

    // calculate and subtract whole years
    var years = Math.floor(delta / 31536000);
    delta -= years * 31536000;

    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60;  // in theory the modulus is not required

    document.getElementById("skyrimCounter").innerHTML = "<b>" 
                                                        + years + " years, "
                                                        + days + " days, " 
                                                        + hours + " hours, " 
                                                        + minutes + " minutes, and " 
                                                        +seconds+ " seconds</b>";
}

function setTimer() {
    setTimerLabel()
    setInterval(setTimerLabel,1000);
}