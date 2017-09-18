'use strict'

const MILISECONDS_IN_DAY = 86400000;
const DAYS_IN_WEEK       = 7;

var semesterStartDate = new Date(2017, 8, 18);
var today = Date.now();
var daysPast = Math.floor((today - semesterStartDate) / MILISECONDS_IN_DAY);

var isUpper = Math.floor(daysPast / DAYS_IN_WEEK) % 2 === 0;

document.getElementById('out').textContent = isUpper ? "Верхняя" : "Нижняя";
