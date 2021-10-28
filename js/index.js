const schedule = [
  {
    time: "30th October 7:30 to 8:45",
    event: "Registration Begins | Breafast",
    timestamp: new Date("Oct 30, 2021 7:30:00").getTime(),
  },
  {
    time: "30th October 12:00",
    event: "Panel Review-1",
    timestamp: new Date("Oct 30, 2021 12:00:00").getTime(),
  },
  {
    time: "30th October 13:30",
    event: "Lunch",
    timestamp: new Date("Oct 30, 2021 13:30:00").getTime(),
  },
  {
    time: "30th October 17:30",
    event: "Snacks*",
    timestamp: new Date("Oct 30, 2021 17:30:00").getTime(),
  },
  {
    time: "30th October 18:30",
    event: "Panel Review-2",
    timestamp: new Date("Oct 30, 2021 18:30:00").getTime(),
  },
  {
    time: "30th October 20:00",
    event: "Dinner",
    timestamp: new Date("Oct 30, 2021 20:00:00").getTime(),
  },
  {
    time: "31st October 00:00",
    event: "Midnight Maggie",
    timestamp: new Date("Oct 31, 2021 00:00:00").getTime(),
  },
  {
    time: "31st October 01:00",
    event: "Panel Review-3",
    timestamp: new Date("Oct 31, 2021 01:00:00").getTime(),
  },
  {
    time: "31st October 02:30",
    event: "Mini Event",
    timestamp: new Date("Oct 31, 2021 02:30:00").getTime(),
  },
  {
    time: "31st October 07:00",
    event: "Panel Review-4",
    timestamp: new Date("Oct 31, 2021 07:00:00").getTime(),
  },
  {
    time: "31st October 09:30",
    event: "Breakfast",
    timestamp: new Date("Oct 31, 2021 09:30:00").getTime(),
  },
  {
    time: "31st October 10:30",
    event: "Top 10 Announcement !",
    timestamp: new Date("Oct 31, 2021 10:30:00").getTime(),
  },
  {
    time: "31st October 11:00",
    event: "Final Judging Round",
    timestamp: new Date("Oct 31, 2021 11:00:00").getTime(),
  },
];

const sponsorLogos = [
  "./Sponsor Logos/nokia-logo-color.png",
  "./Sponsor Logos/logo-dark-groww.83f43714.svg",
  "./Sponsor Logos/Devfolio_Logo-White.png",
  "./Sponsor Logos/Celo Logo Color Reverse.png",
  "./Sponsor Logos/Filecoin Coloured White Text-1.png",
  "./Sponsor Logos/Polygon_Logo-White.png",
  "./Sponsor Logos/Tezos_Logo-Colored.png",
];

const getCircle = (timestamp, shape = "circle") => {
  const now = new Date().getTime();
  const diff = timestamp - now;
  if (diff <= 0) {
    return `${shape}-green-color`;
  } else {
    return `${shape}-grey-color`;
  }
};

const renderSchedule = () => {
  const scheduleContainer =
    document.getElementsByClassName("timeline-wrapper")[0];
  let scheduleItems = "";
  for (let i = 0; i < schedule.length; ++i) {
    if (i % 2 == 0) {
      scheduleItems += `
            <div class="event-div">
                <div class="date black-color">${schedule[i].time}</div>
                <div class="circle ${getCircle(schedule[i].timestamp)}"></div>
                <div class="event black-color">${schedule[i].event}</div>
            </div>
        `;
    } else {
      scheduleItems += `
            <div class="event-div">
                <div class="date black-color">${schedule[i].event}</div>
                <div class="circle ${getCircle(schedule[i].timestamp)}"></div>
                <div class="event black-color">${schedule[i].time}</div>
            </div>
        `;
    }
    if (i < schedule.length - 1) {
      scheduleItems += `
                <div class="event-div-1">
                    <span></span><span class="line1 ${getCircle(
                      schedule[i].timestamp,
                      "line1"
                    )}"></span><span class="line2 ${getCircle(
        schedule[i].timestamp,
        "line2"
      )}"></span><span></span>
                </div>
            `;
    }
  }
  scheduleContainer.innerHTML = scheduleItems;
};

const renderSponsorLogos = () => {
  const sponsorLogoContainer =
    document.getElementsByClassName("slide-track")[0];
  let sponsorLogosContent = "";
  for (let logo of sponsorLogos) {
    sponsorLogosContent += `
            <div class="slide">
                <img src="${logo}" width="250" alt=""/>
            </div>
        `;
  }
  sponsorLogosContent += sponsorLogosContent;
  sponsorLogoContainer.innerHTML = sponsorLogosContent;
};

const render = () => {
  renderSchedule();
  renderSponsorLogos();
};

render();

document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    $("#slideshow-container").toggle();
    $("#countdown-container").toggle();
  }
};
