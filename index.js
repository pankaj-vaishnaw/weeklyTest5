// Initialize current date variables
const currentDate = new Date();
let selectedDate = currentDate;

// Constants for days in months
const daysInMonth = [
  31, // January
  (currentDate.getFullYear() % 4 === 0 && currentDate.getFullYear() % 100 !== 0) || currentDate.getFullYear() % 400 === 0 ? 29 : 28, // February (considering leap year)
  31, // March
  30, // April
  31, // May
  30, // June
  31, // July
  31, // August
  30, // September
  31, // October
  30, // November
  31, // December
];

// Get DOM elements
const listOfDays = document.querySelectorAll(".days");
const yearSelect = document.querySelector(".select-year");
const monthSelect = document.querySelector(".select-month");
const highlightDateInput = document.querySelector(".EnterDate");

// Initialize year select options
function initializeYearSelect() {
  const currentYear = currentDate.getFullYear();
  for (let year = currentYear - 100; year <= currentYear + 100; year++) {
    const option = new Option(year, year);
    yearSelect.appendChild(option);
  }
}

// Initialize month select options
function initializeMonthSelect() {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  months.forEach((month, index) => {
    const option = new Option(month, index);
    monthSelect.appendChild(option);
  });
}

// Populate the calendar
function populateCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInCurrentMonth = daysInMonth[month];

  listOfDays.forEach((day, index) => {
    const dayNumber = index - firstDay + 1;
    day.textContent = dayNumber > 0 && dayNumber <= daysInCurrentMonth ? dayNumber : "";
    day.classList.remove("active");

    if (dayNumber === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
      day.classList.add("current-day");
    }

    if (dayNumber === selectedDate.getDate() && month === selectedDate.getMonth() && year === selectedDate.getFullYear()) {
      day.classList.add("active");
    }
  });
}

// Event listeners for year and month changes
yearSelect.addEventListener("change", () => {
  selectedDate.setFullYear(parseInt(yearSelect.value));
  populateCalendar(selectedDate);
});

monthSelect.addEventListener("change", () => {
  selectedDate.setMonth(parseInt(monthSelect.value));
  populateCalendar(selectedDate);
});

// Event listener for highlighting a specific date
highlightDateInput.addEventListener("change", () => {
  const inputDate = new Date(highlightDateInput.value);
  if (!isNaN(inputDate.getTime())) {
    selectedDate = inputDate;
    yearSelect.value = selectedDate.getFullYear();
    monthSelect.value = selectedDate.getMonth();
    populateCalendar(selectedDate);
  }
});

// Initialize year and month selects, and populate the calendar
initializeYearSelect();
initializeMonthSelect();
populateCalendar(selectedDate);

function lighLight(date) {
    listOfDays.forEach(ele=>ele.classList.remove("active"))
  listOfDays.forEach((ele) => {
    if (ele.innerHTML == date) {
      ele.classList.add("active");
    }
  });
}

function ValidateDate(e) {
    e.preventDefault();
    const date=document.querySelector(".EnterDate")
    lighLight(date.value)
    date.value=""
}

