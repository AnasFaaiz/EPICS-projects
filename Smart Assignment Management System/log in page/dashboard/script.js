const calendarButton = document.querySelector('.calendar-button');
const calendarContainer = document.querySelector('.calendar-container');

calendarButton.addEventListener('click', () => {
  calendarContainer.classList.toggle('show-calendar');
});