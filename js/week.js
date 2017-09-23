'use strict';

(function() {
    // const MILISECONDS_IN_DAY = 86400000;
    // const DAYS_IN_WEEK       = 7;

    // var semesterStartDate = new Date(2017, 8, 18);
    // var today = Date.now();
    // var daysPast = Math.floor((today - semesterStartDate) / MILISECONDS_IN_DAY);

    // var isUpper = Math.floor(daysPast / DAYS_IN_WEEK) % 2 === 0;

    // document.getElementById('out').textContent = isUpper ? "Верхняя" : "Нижняя";

    const ONE_MINUTE = 60000;

    var lastLessonUpdated;

    var clockPlaceholder = document.getElementById("clock-time");
    update();
    var updateClockTimer = setInterval(update, 1000);

    function update() {
        updateNextLesson();

        // var minIndex = bells.length;
        // var minTimeLeft = 24 * 3600 * 1000;
        // var now = new Date();
        // var dayOfTheWeek = now.getDay();
        // var nextLessonTime;

        // bells.map(function(bell, index) {
        //     var closestBellTime = new Date();
        //     closestBellTime.setHours(bell.end.split(':')[0], bell.end.split(':')[1], 0);
        //     var timeLeft = closestBellTime.getTime() - Date.now();

        //     if (timeLeft < minTimeLeft) {
        //         minTimeLeft = timeLeft;
        //         minIndex = index;
        //     }

        // });

        // setClockTime(minTimeLeft, minIndex);
    };

    function updateNextLesson() {
        //update next lesson once in a minute
        if (typeof lastLessonUpdated !== 'undefined' && Date.now() - lastLessonUpdated < ONE_MINUTE) {
            return;
        }
        //truncate seconds
        lastLessonUpdated = Math.floor(Date.now() / ONE_MINUTE) * ONE_MINUTE;
        setNextLessonTime();

    };

    function setNextLessonTime() {
        var todayTimetable = getTodayTimetable();

    };

    function getTodayTimetable() {
        var today = new Date();
        var dayOfTheWeek = today.getDay();
        var studyDay = dayOfTheWeek > 5 || dayOfTheWeek < 1 ? 1 : dayOfTheWeek - 1;

        if (Date.now() > getLastLessonEndTime(studyDay - 1)) {
            studyDay = (studyDay + 1) % 5;
            studyDay = studyDay === 0 ? 1 : studyDay;
        }
        return timetable[studyDay];
    };

    function getLastLessonEndTime(studyDayIndex) {
        var todayTimetable = timetable[studyDayIndex];

        for (let i = todayTimetable.length - 1; i >= 0; i--) {
            if ((todayTimetable[i].length === 1 && todayTimetable[i].name.length > 0)
                || (todayTimetable[i].length === 2 && (todayTimetable[i][0].name.length > 0 || todayTimetable[i][1].name.length > 0)))
            {
                return getDateFromTime(bells[i].end, studyDayIndex + 1);
            }
        }
    };

    function getDateFromTime(time, day) {
        var today = new Date();
        if (today.getDay() !== day) {
            var distance = day - today.getDay;
            distance = distance > 0 ? distance : 6 - today.getDay() + 
        }
        return today.setHours(time.split(':')[0], time.split(':')[1], 0);
    };

    function setClockTime(timeLeft, para) {
        var hours   = Math.floor(timeLeft / 3600000);
        var minutes = Math.floor((timeLeft % 3600000) / 60000);
        var seconds = Math.floor((timeLeft % 60000) / 1000);

        clockPlaceholder.textContent = hours + ":" + minutes + ":" + seconds;
    };
})();
