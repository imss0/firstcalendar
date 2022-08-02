let currentdate = new Date();
let day = currentdate.getDay();
let date = currentdate.getDate();
let month = currentdate.getMonth()+1;
let year = currentdate.getFullYear();
let firstday = new Date(year, month-1);
let lastday = new Date(year, month, 0);
let daycounter = 0;

const dayname = ['✨일요일✨', '🌙월요일🌙', '🔥화요일🔥', '💧수요일💧', '🌲목요일🌲', '⭐금요일⭐', '🎉토요일🎉'];
const selecteddayarea = document.querySelector(".day");
const selecteddatearea = document.querySelector(".date");
const selectedmontharea = document.querySelector(".month");
const calendararea = document.querySelectorAll("tbody tr td");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
function makedayname(day) {
    return dayname[day];
}
selecteddayarea.textContent = makedayname(day);
selecteddatearea.textContent = currentdate.getDate();
selectedmontharea.textContent = `${year}년 ${month}월`

for(let i = 0; i < lastday.getDate()+firstday.getDay(); i++){
    if (i >=firstday.getDay()){
        daycounter++;
        calendararea[i].textContent = daycounter;
    }
}


function moveprevmonth(){
    calendararea.forEach(e => e.textContent = null);
    currentdate = new Date(year, month-2);
    day = currentdate.getDay();
    date = currentdate.getDate();
    month = currentdate.getMonth()+1;
    year = currentdate.getFullYear();
    firstday = new Date(year, month-1);
    lastday = new Date(year, month, 0);
    daycounter = 0;
    console.log(currentdate);
    for(let i = 0; i < lastday.getDate()+firstday.getDay(); i++){
        if (i >=firstday.getDay()){
            daycounter++;
            calendararea[i].textContent = daycounter;
        }
    }
    selecteddayarea.textContent = makedayname(day);
    selecteddatearea.textContent = currentdate.getDate();
    selectedmontharea.textContent = `${year}년 ${month}월`
}


function movenextmonth(){
    calendararea.forEach(e => e.textContent = null);
    currentdate = new Date(year, month);
    day = currentdate.getDay();
    date = currentdate.getDate();
    month = currentdate.getMonth()+1;
    year = currentdate.getFullYear();
    firstday = new Date(year, month-1);
    lastday = new Date(year, month, 0);
    daycounter = 0;
    console.log(currentdate);
    for(let i = 0; i < lastday.getDate()+firstday.getDay(); i++){
        if (i >=firstday.getDay()){
            daycounter++;
            calendararea[i].textContent = daycounter;
        }
    }
    selecteddayarea.textContent = makedayname(day);
    selecteddatearea.textContent = currentdate.getDate();
    selectedmontharea.textContent = `${year}년 ${month}월`
}


prevBtn.addEventListener('click', moveprevmonth);
nextBtn.addEventListener('click', movenextmonth);
