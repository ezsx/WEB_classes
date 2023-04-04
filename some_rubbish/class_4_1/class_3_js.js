var calendarVisible = false;

function showDate() {
    const today = new Date();
    const dateElement = document.getElementById("data_label");
    const day = today.getDate().toLocaleString("ru-RU").padStart(2, "0");
    const month = (today.getMonth() + 1).toLocaleString("ru-RU").padStart(2, "0");
    const year = today.getFullYear().toLocaleString("ru-RU").replace(/\s/g,"");

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekday = weekdays[today.getDay()];

    const time = today.toLocaleTimeString("ru-RU", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });

    const formattedDate = year + "."+ day + "." + month + ", "  + weekday + ", " + time;
    dateElement.innerHTML = formattedDate;
}

function showList() {
    const listDiv = document.getElementById("listDiv");
    if (listDiv.style.display === "none") {
        listDiv.style.display = "block";
    } else {
        listDiv.style.display = "none";
    }
}
function toggleSection() {

    const section = document.getElementById('calendar-demo-wrapper');
    if (section.style.display === "none") {

        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
    new niceDatePicker({
        dom:document.getElementById('calendar-demo-wrapper'),
        onClickDate:function(date){
            document.querySelector('.calendar-demo-msg').innerHTML='вы выбрали '+date;
        },});
}
function hideCalendar() {
    // Get the calendar element and set its HTML to an empty string
    var calendarElement = document.getElementById('calendar');
    calendarElement.innerHTML = 'Task 2';

    // Set calendarVisible to false
    calendarVisible = false;
}

function showCalendar() {
    // get current date
    var today = new Date();

    // set variables for current month and year
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();

    // array of month names
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // create header with current month and year
    var header = '<div class="header">' +
        '<span class="month">' + months[currentMonth] +" "+ '</span>' +
        '<span class="year">' + currentYear + '</span>' +

        '</div>';
    // create table for calendar
    var table = '<table>';

    // create table headers for days of the week
    table += '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>';

    // get first day of current month
    var firstDay = new Date(currentYear, currentMonth, 1);

    // get number of days in current month
    var numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    // create table rows and columns for each day of the month
    var date = 1;
    for (var i = 0; i < 6; i++) {
        table += '<tr>';
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay.getDay()) {
                table += '<td></td>';
            } else if (date > numDays) {
                break;
            } else {
                table += '<td onclick="selectDate(this)">' + date + '</td>';
                date++;
            }
        }
        table += '</tr>';
    }

    // close table
    table += '</table>';

    // create close button
    var closeButton = '<button onclick="hideCalendar()">close</button>';

    // combine header, table, and close button and display on page
    document.getElementById('calendar').innerHTML = header + table + closeButton;

    calendarVisible = true; // set calendarVisible to true
}


function selectDate(cell) {
    // remove selected class from all cells
    var cells = document.getElementsByTagName('td');
    for (var i = 0; i < cells.length; i++) {
        cells[i].classList.remove('selected');
    }

    // add selected class to clicked cell
    cell.classList.add('selected');

    // get selected date
    var selectedDate = new Date(currentYear, currentMonth, cell.innerHTML);

    // format selected date as string (e.g. "March 21, 2023")
    var dateString = selectedDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' });

    // display selected date on page
    document.getElementById('selectedDate').innerHTML = dateString;
}

