let calenderObject = document.getElementById("days");
let dateInfo = document.getElementById("dateInfo");
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//<li>August<br><span style="font-size:18px">2021</span></li>
let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let toAddMonth = 0;
let toAddYear = 0;
let selected;

console.log(month);
getDaysOfMonth(month, year);

function getDaysOfMonth(month, year)
{
    calenderObject.innerHTML = "";
    dateInfo.innerHTML = "";
    var date = new Date(year, month, 1);
    var days = [];
    let weekDay = 1;
    dateInfo.innerHTML = `${months[month]}<br><span style="font-size: 18px">${year}</span>`;
    while (date.getMonth() == month)
    {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    console.log(days)
    while (weekDay < days[0].getDay())
    {
        calenderObject.innerHTML += "<li> </li>";
        weekDay++;
    }
    for (day of days)
    {

        calenderObject.innerHTML += "<li onclick='makeSelected(this)'>" + day.getDate() + "</li>";
        weekDay = 1;

    }
}

function getNextMonth()
{
    if (month <= 10)
    {
        month++;
        toAddMonth++;

        getDaysOfMonth(month, year)
    } else
    {
        date = new Date(year + 1, 0, 1);
        year = date.getFullYear();
        console.log(year)
        month = 0;
        toAddYear = 1;
        getDaysOfMonth(0, year);
    }
    
}

function getPrevMonth()
{
    
    if (1 <= month)
    {
        month--;
        getDaysOfMonth(month, year)
    } else
    {
        date = new Date(year - 1, 11, 1);
        year = date.getFullYear();
        month = 11;
        console.log(month)
        getDaysOfMonth(11, year);
    }

}

// function makeSelected(element)
// {
//     element.

    

// }