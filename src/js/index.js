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


