let timeZones= [
    { name: "New York", timeZone: 'America/New_York' },
    { name: "London", timeZone: 'Europe/London' },
    { name: "Tokyo", timeZone: 'Asia/Tokyo' },
    { name: "Sydney", timeZone: 'Australia/Sydney' },
    { name: "Montevideo", timeZone: 'America/Montevideo' },
    { name: "Paris", timeZone: 'Europe/Paris' },
    { name: "Los Angeles", timeZone: 'America/Los_Angeles' },
    { name: "Chicago", timeZone: 'America/Chicago' },
    { name: "Moscow", timeZone: 'Europe/Moscow' }
];
// Cache formatters for each time zone
const formatters = {};
timeZones.forEach(location => {
    const options = { timeZone: location.timeZone, hour: '2-digit', minute: '2-digit', second: '2-digit' };
    formatters[location.timeZone] = new Intl.DateTimeFormat([], options);
});

function updateTime() {
    const timeContainer = document.getElementById('time');
    timeContainer.innerHTML = '';
    timeZones.forEach(location => {
        const formatter = formatters[location.timeZone];
        const timeString = formatter.format(new Date());
        const timeDiv = document.createElement('div');
        timeDiv.className = 'time-display';
        timeDiv.innerText = `${location.name}: ${timeString}`;
        timeContainer.appendChild(timeDiv);
    });
}
setInterval(updateTime, 1000);
updateTime();
