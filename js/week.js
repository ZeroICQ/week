'use strict';

(function() {
    // const MILISECONDS_IN_DAY = 86400000;
    // const DAYS_IN_WEEK       = 7;

    // var semesterStartDate = new Date(2017, 8, 18);
    // var today = Date.now();
    // var daysPast = Math.floor((today - semesterStartDate) / MILISECONDS_IN_DAY);

    // var isUpper = Math.floor(daysPast / DAYS_IN_WEEK) % 2 === 0;

    // document.getElementById('out').textContent = isUpper ? "Верхняя" : "Нижняя";


    var clockPlaceholder = document.getElementById("clock-time");
    var updateClockTimer = setInterval(updateClock, 1000, clockPlaceholder);


    function updateClock(clockPlaceholder) {
        var minIndex = bells.length;
        var minTimeLeft = 24 * 3600 * 1000;

        var now = new Date();

        bells.map(function(bell, index) {
            var closestBellTime = new Date();
            closestBellTime.setHours(bell.end.split(':')[0], bell.end.split(':')[1], 0);
            var timeLeft = closestBellTime.getTime() - Date.now();

            if (timeLeft < minTimeLeft) {
                minTimeLeft = timeLeft;
                minIndex = index;
            }

        });

        setClockTime(minTimeLeft, minIndex, clockPlaceholder);
    };

    function setClockTime(timeLeft, para, clockPlaceholder)
    {
        var hours   = Math.floor(timeLeft / 3600000);
        var minutes = Math.floor((timeLeft % 3600000) / 60000);
        var seconds = Math.floor((timeLeft % 60000) / 1000);

        clockPlaceholder.textContent = hours + ":" + minutes + ":" + seconds;
    };
})();
