const schedule = [
    {time: "14th October 23:59", event: "Registration Begins"},
    {time: "14th October 23:59", event: "Registration Begins"},
    {time: "14th October 23:59", event: "Registration Begins"},
    {time: "14th October 23:59", event: "Registration Begins"},
    {time: "14th October 23:59", event: "Registration Begins"},
    {time: "14th October 23:59", event: "Registration Begins"},
    {time: "14th October 23:59", event: "Registration Begins"}
]

const sponsorLogos = [
    './Sponsor Logos/nokia-logo-color.png',
    './Sponsor Logos/logo-dark-groww.83f43714.svg',
    './Sponsor Logos/Devfolio_Logo-White.png',
    './Sponsor Logos/Celo Logo Color Reverse.png',
    './Sponsor Logos/Filecoin Coloured White Text-1.png',
    './Sponsor Logos/Polygon_Logo-White.png',
    './Sponsor Logos/Tezos_Logo-Colored.png'
]

const renderSchedule = () => {
    const scheduleContainer = document.getElementsByClassName('timeline-wrapper')[0];
    let scheduleItems = '';
    for(let i = 0; i < schedule.length; ++i) {
        scheduleItems += `
            <div class="event-div">
                <div class="date">${schedule[i].time}</div>
                <div class="circle"></div>
                <div class="event">${schedule[i].event}</div>
            </div>
        `
        if(i < schedule.length - 1) {
            scheduleItems += `
                <div class="event-div-1">
                    <span></span><span class="line1"></span><span class="line2"></span><span></span>
                </div>
            `
        }
    }
    scheduleContainer.innerHTML = scheduleItems;
}

const renderSponsorLogos = () => {
    const sponsorLogoContainer = document.getElementsByClassName('slide-track')[0];
    let sponsorLogosContent = '';
    for(let logo of sponsorLogos) {
        sponsorLogosContent += `
            <div class="slide">
                <img src="${logo}" width="250" alt=""/>
            </div>
        `
    }
    sponsorLogosContent += sponsorLogosContent;
    sponsorLogoContainer.innerHTML = sponsorLogosContent;    
}

const render = () => {
    renderSchedule();
    renderSponsorLogos();
}

render();

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        $('#slideshow-container').toggle();
        $('#countdown-container').toggle();
    }
}