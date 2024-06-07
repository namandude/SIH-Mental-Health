const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();
    const lastDayIndex = lastDay.getDay();

    const monthYearString = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    monthYearElement.textContent = monthYearString;

    let dateHTML = '';
    for (let i = 0; i < firstDayIndex; i++) {
        dateHTML += `<div class="date inactive"></div>`;
    }

    for (let i = 1; i <= totalDays; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        dateHTML += `<div class="date ${activeClass}" data-date="${date.toISOString()}">${i}</div>`;
    }

    for (let i = 1; i <= 6 - lastDayIndex; i++) {
        dateHTML += `<div class="date inactive"></div>`;
    }

    datesElement.innerHTML = dateHTML;

    // Add click event to each date
    const dateElements = document.querySelectorAll('.date:not(.inactive)');
    dateElements.forEach(dateElement => {
        dateElement.addEventListener('click', () => {
            const selectedDate = new Date(dateElement.dataset.date);
            const formattedDate = selectedDate.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
            window.location.href = `./i.html?date=${formattedDate}`;
        });
    });
};

prevBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
});

nextBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
});

updateCalendar();

// IEFE for to-do list
(() => {
    let toDoListArray = [];
    const form = document.querySelector(".form");
    const input = form.querySelector(".form__input");
    const ul = document.querySelector(".toDoList");

    form.addEventListener('submit', e => {
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;
        addItemToDOM(itemId, toDoItem);
        addItemToArray(itemId, toDoItem);
        input.value = '';
    });

    ul.addEventListener('click', e => {
        let id = e.target.getAttribute('data-id');
        if (!id) return;
        removeItemFromDOM(id);
        removeItemFromArray(id);
    });

    function addItemToDOM(itemId, toDoItem) {
        const li = document.createElement('li');
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({ itemId, toDoItem });
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
        var li = document.querySelector('[data-id="' + id + '"]');
        ul.removeChild(li);
    }

    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(item => item.itemId !== id);
        console.log(toDoListArray);
    }
})();

function addEntry() {
    const textInput = document.getElementById('entryText');
    const entriesContainer = document.getElementById('entries');

    const date = currentDate;
    const text = textInput.value;

    if (text) {
        const entryElement = document.createElement('div');
        entryElement.className = 'entry';
        entryElement.innerHTML = `<p><strong>${date.toDateString()}</strong>: ${text}</p>`;
        entriesContainer.appendChild(entryElement);
    } else {
        alert('Please enter both date and journal entry.');
    }

    textInput.value = '';
}

// Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDbCZxOmijmeGzAzW1dgO_JDMrPNByF_V0",
    authDomain: "waningjackloginpage.firebaseapp.com",
    projectId: "waningjackloginpage",
    storageBucket: "waningjackloginpage.appspot.com",
    messagingSenderId: "81305134840",
    appId: "1:81305134840:web:aaa33939adf94c0cda7d0d",
    measurementId: "G-JVQVZLX9S9"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("login.html");
    }
});
