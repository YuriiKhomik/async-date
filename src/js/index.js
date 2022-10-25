// const logMessage = () => {
//     console.log('Лог при виклику колбек-фкнкції через 3 секунди');
// };

// console.log('Log before setTimeout');

// setTimeout(() => {
//   // Will run last, after 2000 milliseconds
//   console.log("Second log");
// }, 2000);

// console.log('Log after setTimeout');


// // NOTIFICATION

// const NOTIFICATION_DELAY = 3000;
// // в цю айді при виклику showNotification ми записуємо значення таймаута
// //  а при onNotsficationClck ми його видаляємо і він не спрацює
// let timeoutId = null;

// const refs = {
//     notification: document.querySelector('.js-alert'),
// };

// refs.notification.addEventListener('click', onNotsficationClck);

// showNotification();

// function onNotsficationClck() {
//     hideNotification();
//     clearTimeout(timeoutId);
// };

// function showNotification() {
//     refs.notification.classList.add('is-visible');

//     timeoutId = setTimeout(() => {
//         console.log('closing alert automatically');
//         hideNotification()
//     }, NOTIFICATION_DELAY)
// };

// function hideNotification() {
//     refs.notification.classList.remove('is-visible');
// };


// // NOTIFICATION 2

// // проміжок часу, через який буде вилазити нотіфікейшн
// const PROMPT_DELAY = 1000;
// // максимальна кількість виходу нотіфікейшена
// const MAX_PROMPT_ATTEMPTS = 3;

// let promptCounter = 0;
// let hasSubscribed = false;

// const intervalId = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('We need to stop interval');
//         clearInterval(intervalId)
//         return;
//     };

//     console.log('Hey, subscribe! - ' + Date.now());
//     promptCounter += 1;
// }, PROMPT_DELAY);


// // NOTIFICATION 2 MODAL

// import BSN from 'bootstrap.native';

// const refs = {
//     modal: document.querySelector('#subscription-modal'),
//     subscribeBtn: document.querySelector('button[data-subscribe]'),
// };

// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribed = false;
// const modal = new BSN.Modal('#subscription-modal');

// openModal();

// // refs.modal.addEventListener('hide.bs.modal', () => {
// //     openModal();
// // });
// // OR:
// refs.modal.addEventListener('hide.bs.modal', openModal);

// refs.subscribeBtn.addEventListener('click', onSubscribeBtnClick);

// // запускаємо таймер, через скільки часу відкриється модалка
// function openModal() {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribed) {
//         console.log('походу ми тебе схарили, або ти підписався тому більще показувати це не будемо')
//         return
//     }

//     setTimeout(() => {
//         console.log('modal opening')
//         modal.show();
//         promptCounter += 1;
// }, PROMPT_DELAY);
// };

// function onSubscribeBtnClick() {
//     hasSubscribed = true;
//     modal.hide();
// };


// DATE

// // новий екземпляр ми створюємо тоді, коли потрібно працювати із його методами

// const date1 = new Date().getTime();
// console.log('date1: ', date1);

// setTimeout(() => {
//     const date2 = new Date().getTime();

//     console.log('date1: ', date1);
//     console.log('date2: ', date2);

//     console.log(date2-date1)
// }, 3000);

// // але якщо потрібно достукатись лише до UNIX, краще не створювати лайві об'єкти, оскільки це може вплинути на продуктивність
// // для того, зоб отримати актуальний unix час - є Date.now:

// const date1 = Date.now();
// console.log('date1: ', date1);

// setTimeout(() => {
//     const date2 = Date.now();

//     console.log('date1: ', date1);
//     console.log('date2: ', date2);

//     console.log(date2 - date1)
// }, 3000);


// // TIMER

// const timer = {
//     start() {
//         const startTime = Date.now();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const timeComponents = getTimeComponents(deltaTime);

//             console.log(timeComponents)
//         }, 1000)
//     },
// };

// timer.start();


// // приймає число, приводить його до рядка і додає на початок рядка "0", якщо чило менше 2-х знаків
// function pad(value) {
//     return String(value).padStart(2, '0');
// };

// // приймає час в мілісекундах
// // вираховує, скільки в них влізається годин, хвилин та секунд
// // повертає об'єкт з властивостями hours, mins, secs

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// };

// // THE SAME TIMER BUT WITH DESTRUCTURIZATION

// const timer = {
//     start() {
//         const startTime = Date.now();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const { hours, mins, secs } = getTimeComponents(deltaTime);

//             console.log(`${hours}:${mins}:${secs}`);
//         }, 1000)
//     },
// };

// timer.start();

// function pad(value) {
//     return String(value).padStart(2, '0');
// };

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// };


// // THE SAME TIMER BUT WITH DESTRUCTURIZATION + VIA new Date (ne zovsim ok varik)
// const timer = {
//     start() {
//         const startTime = Date.now();
//         setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const { hours, mins, secs } = getTimeComponents(deltaTime);

//             // console.log(`${hours}:${mins}:${secs}`);

//             console.log(`${pad(new Date(deltaTime).getUTCHours())}:${pad(new Date(deltaTime).getMinutes())}:${pad(new Date(deltaTime).getSeconds())}`);

//         }, 1000)
//     },
// };

// timer.start();

// function pad(value) {
//     return String(value).padStart(2, '0');
// };

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// };


// // TIMER WITH HTML

// const refs = {
//     startBtn: document.querySelector('button[data-action-start]'),
//     stopBtn: document.querySelector('button[data-action-stop]'),
//     clockFace: document.querySelector('.js-clockface'),
// };

// const timer = {
//     intervalId: null,
//     isActive: false,
//     start() {
//         // якщо ми запускаємо таймер, а він вже активний - то ми просто виходимо з цього коду
//         if (this.isActive) {
//             return
//         }

//         const startTime = Date.now();
//         this.isActive = true;
//         this.intervalId = setInterval(() => {
//             const currentTime = Date.now();
//             const deltaTime = currentTime - startTime;
//             const time = getTimeComponents(deltaTime);

//             updateClockFace(time)

//             // console.log(`${hours}:${mins}:${secs}`);
//         }, 1000)
//     },
//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//     }
// };


// refs.startBtn.addEventListener('click', () => {
//     timer.start()
// });
// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// })

// function updateClockFace({ hours, mins, secs }) {
//     refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
// };

// function pad(value) {
//     return String(value).padStart(2, '0');
// };

// function getTimeComponents(time) {
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
// };


// TIMER WITH HTML AN WITH CLASS

const refs = {
    startBtn: document.querySelector('button[data-action-start]'),
    stopBtn: document.querySelector('button[data-action-stop]'),
    clockFace: document.querySelector('.js-clockface'),
};


// class не повинен нічого знати про зовнішні функції
// зовнішні функції - це малювання інтерфейсу
// а клас - це модель даних
class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.isActive = false;
        this.onTick = onTick;

        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        // якщо ми запускаємо таймер, а він вже активний - то ми просто виходимо з цього коду
        if (this.isActive) {
            return
        }

        const startTime = Date.now();
        this.isActive = true;

        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);

            this.onTick(time)

        }, 1000)
    }

    stop() {
        clearInterval(this.intervalId);
        this.isActive = false;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    pad(value) {
    return String(value).padStart(2, '0');
    };

    getTimeComponents(time) {
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    };

}

const timer = new Timer({
    onTick: updateClockFace
});


// refs.startBtn.addEventListener('click', () => {
//     timer.start()
// });
// refs.stopBtn.addEventListener('click', () => {
//     timer.stop();
// });

// OR:
refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



function updateClockFace({ hours, mins, secs }) {
    refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
};

function pad(value) {
    return String(value).padStart(2, '0');
};

function getTimeComponents(time) {
    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
};
