const calendar = document.getElementById('calendar');
let currentDayIndex = 0; // Track the current day index
let currentHourIndex = 0; // Track the current hour index within the day
let coloredHoursHistory = []; // Track the history of colored hours
let startDate = new Date('2025-01-01'); // Default start date

// Function to create the calendar based on the start date
function createCalendar(startDate) {
    calendar.innerHTML = ''; // Clear the existing calendar

    const allDaysContainer = document.createElement('div');
    allDaysContainer.classList.add('all-days-container'); // Новый контейнер для всех дней

    const months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ];

    // Calculate the year and month from the start date
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const startDay = startDate.getDate();

    // Get the day of the week for the start date (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startDayOfWeek = startDate.getDay();

    // Generate the calendar starting from the selected date
    for (let monthOffset = 0; monthOffset < 12; monthOffset++) {
        const currentMonth = (startMonth + monthOffset) % 12;
        const currentYear = startYear + Math.floor((startMonth + monthOffset) / 12);

        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // Получаем день недели первого числа месяца

        // Add empty placeholder days before the start date (only for the first month)
        if (monthOffset === 0) {
            for (let i = 0; i < startDayOfWeek; i++) {
                const dayDiv = createDayDiv('', currentMonth); // Empty placeholder
                allDaysContainer.appendChild(dayDiv);
            }
        }

        // Add days of the month starting from the selected date
        const startDayInMonth = monthOffset === 0 ? startDay : 1;
        for (let day = startDayInMonth; day <= daysInMonth; day++) {
            const dayDiv = createDayDiv(day, currentMonth);
            allDaysContainer.appendChild(dayDiv);
        }
    }

    calendar.appendChild(allDaysContainer); // Добавляем новый контейнер в календарь
}

// Function to update the calendar based on the selected start date
function updateCalendar() {
    const startDateInput = document.getElementById('startDate');
    startDate = new Date(startDateInput.value);
    createCalendar(startDate);

    // Reset tracking variables
    currentDayIndex = 0;
    currentHourIndex = 0;
    coloredHoursHistory = [];
}

// Function to create a day div
function createDayDiv(day, monthIndex) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    // If the day is empty (placeholder), don't add any content
    if (day !== '') {
        // Форматируем дату в виде "ДД.ММ"
        const formattedDate = `${String(day).padStart(2, '0')}.${String(monthIndex + 1).padStart(2, '0')}`;
        dayDiv.innerText = formattedDate;

        // Создаем таблицу для часов
        const table = document.createElement('table');
        for (let row = 0; row < 6; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 4; col++) {
                const td = document.createElement('td');
                td.classList.add('hour');
                td.dataset.hour = row * 6 + col; // Сохраняем час в атрибуте
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        dayDiv.appendChild(table);
    }

    return dayDiv;
}

// TUMI ISHI
// Function to add Table
function TItable() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'TI table'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'TI table', coloredHours });
}

// Function to add Chair
function TIchair() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 8; // Number of hours to color for Chair
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'TI chair'; // Mark this hour as a chair
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'TI chair', coloredHours });
}

function TIart() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'TI art'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'TI art', coloredHours });
}

function TIcashpo() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'TI cashpo'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'TI cashpo', coloredHours });
}

function Stable() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'S table'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'S table', coloredHours });
}

function Schair() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'S chair'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'S chair', coloredHours });
}

function Scoffee() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'S coffee'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'S coffee', coloredHours });
}

function Ssmell() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'S smell'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'S smell', coloredHours });
}

function Svase() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'S vase'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'S vase', coloredHours });
}

function Smodule() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'S module'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'S module', coloredHours });
}

function Dtable() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'D table'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'D table', coloredHours });
}

function Dchair() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'D chair'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'D chair', coloredHours });
}

function Dvine() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'D vine'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'D vine', coloredHours });
}

function Dcoffee() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'D coffee'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'D coffee', coloredHours });
}

function Dart() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'D art'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'D art', coloredHours });
}

function ZGtable() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ZG table'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ZG table', coloredHours });
}

function ZGchair() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ZG chair'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ZG chair', coloredHours });
}

function ZGlong() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ZG long'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ZG long', coloredHours });
}

function ZGart() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ZG art'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ZG art', coloredHours });
}

function ZGcoffee() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ZG coffee'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ZG coffee', coloredHours });
}

function STtable() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ST table'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ST table', coloredHours });
}

function STchair() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ST chair'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ST chair', coloredHours });
}

function STcoffee() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ST coffee'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ST coffee', coloredHours });
}

function STart() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ST art'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ST art', coloredHours });
}

function STbig() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ST big'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ST big', coloredHours });
}

function STcarpet() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'ST carpet'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'ST carpet', coloredHours });
}

function Downtime() {
    const days = document.querySelectorAll('.day');
    let hoursToColor = 10; // Number of hours to color for Table
    const coloredHours = []; // Track the hours colored in this action

    while (hoursToColor > 0 && currentDayIndex < days.length) {
        const day = days[currentDayIndex];
        const hours = day.querySelectorAll('.hour');

        while (hoursToColor > 0 && currentHourIndex < hours.length) {
            const hour = hours[currentHourIndex];
            hour.classList.add('filled');
            hour.dataset.itemType = 'Downtime'; // Mark this hour as a table
            coloredHours.push({ dayIndex: currentDayIndex, hourIndex: currentHourIndex });
            currentHourIndex++;
            hoursToColor--;
        }

        if (currentHourIndex >= hours.length) {
            currentDayIndex++;
            currentHourIndex = 0;
        }
    }

    // Save this action in history
    coloredHoursHistory.push({ type: 'Downtime', coloredHours });
}



// Function to cancel the last action
function cancelLastAction() {
    if (coloredHoursHistory.length === 0) return; // No actions to cancel

    // Get the last action
    const lastAction = coloredHoursHistory.pop();

    // Uncolor the hours
    lastAction.coloredHours.forEach(({ dayIndex, hourIndex }) => {
        const days = document.querySelectorAll('.day');
        if (dayIndex < days.length) {
            const day = days[dayIndex];
            const hours = day.querySelectorAll('.hour');
            if (hourIndex < hours.length) {
                hours[hourIndex].classList.remove('filled');
                hours[hourIndex].removeAttribute('data-item-type'); // Remove item type
            }
        }
    });

    // Update the currentDayIndex and currentHourIndex
    if (coloredHoursHistory.length > 0) {
        const lastHour = coloredHoursHistory[coloredHoursHistory.length - 1].coloredHours[0];
        currentDayIndex = lastHour.dayIndex;
        currentHourIndex = lastHour.hourIndex + 1;
    } else {
        currentDayIndex = 0;
        currentHourIndex = 0;
    }
}

// Function to add text to selected hour squares
function addTextToSelectedHours() {
    const hourText = document.getElementById('hourText').value; // Get the text from the input field
    if (!hourText) return; // Do nothing if the text is empty

    const selectedHours = document.querySelectorAll('.hour.selected'); // Get all selected hours
    selectedHours.forEach(hour => {
        hour.innerText = hourText; // Add the text to the selected hour squares
        hour.classList.remove('selected'); // Remove the selection after adding text
    });

    // Clear the input field
    document.getElementById('hourText').value = '';
}

// Function to handle hour square selection
function selectHour(event) {
    if (event.target.classList.contains('hour')) {
        event.target.classList.toggle('selected'); // Toggle selection on click
    }
}

// Add event listener to the calendar for hour selection
calendar.addEventListener('click', selectHour);

// Function to create a day div
function createDayDiv(day, monthIndex) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');

    // If the day is empty (placeholder), don't add any content
    if (day !== '') {
        // Форматируем дату в виде "ДД.ММ"
        const formattedDate = `${String(day).padStart(2, '0')}.${String(monthIndex + 1).padStart(2, '0')}`;
        dayDiv.innerText = formattedDate;

        // Создаем таблицу для часов
        const table = document.createElement('table');
        for (let row = 0; row < 6; row++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 4; col++) {
                const td = document.createElement('td');
                td.classList.add('hour');
                td.dataset.hour = row * 6 + col; // Сохраняем час в атрибуте
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        dayDiv.appendChild(table);
    }

    return dayDiv;
}

// Инициализация календаря
createCalendar(startDate);