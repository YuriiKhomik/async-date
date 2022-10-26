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


// // TIMER WITH HTML AN WITH CLASS

// const refs = {
//     startBtn: document.querySelector('button[data-action-start]'),
//     stopBtn: document.querySelector('button[data-action-stop]'),
//     clockFace: document.querySelector('.js-clockface'),
// };


// // class не повинен нічого знати про зовнішні функції
// // зовнішні функції - це малювання інтерфейсу
// // а клас - це модель даних
// class Timer {
//     constructor({onTick}) {
//         this.intervalId = null;
//         this.isActive = false;
//         this.onTick = onTick;

//         this.init();
//     }

//     init() {
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }

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
//             const time = this.getTimeComponents(deltaTime);

//             this.onTick(time)

//         }, 1000)
//     }

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         const time = this.getTimeComponents(0);
//         this.onTick(time);
//     }

//     pad(value) {
//     return String(value).padStart(2, '0');
//     };

//     getTimeComponents(time) {
//     const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { hours, mins, secs };
//     };

// }

// const timer = new Timer({
//     onTick: updateClockFace
// });


// // refs.startBtn.addEventListener('click', () => {
// //     timer.start()
// // });
// // refs.stopBtn.addEventListener('click', () => {
// //     timer.stop();
// // });

// // OR:
// refs.startBtn.addEventListener('click', timer.start.bind(timer));
// refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



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



// // PROMISES


// const promise = new Promise((resolve, reject) => {
//     const canFulFill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulFill) {
//         resolve('Alles gut! Проміс виконався успішно із результатом (fulfilled)')
//         }

//         reject('Caput! Проміс виконався із помилкою (rejected)');
//     }, 1000);
// });

// // then приймає два аргументи: перший - resolve, другий - reject
// // promise.then(
// //     result => { console.log(result); },
// //     error => { console.log(error); },
// // );
// // OR
// promise.then(onFulFilled, onRejected);

// function onFulFilled(result) {
//     console.log(result);
// };

// function onRejected(error) {
//     console.log(error)
// };


// // PROMISE CHAINING


// const promise = new Promise((resolve, reject) => {
//     const canFulFill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulFill) {
//         resolve('Alles gut! Проміс виконався успішно із результатом (fulfilled)')
//         }

//         reject('Caput! Проміс виконався із помилкою (rejected)');
//     }, 1000);
// });

// // // then на своє місце повертає проміс, якщо цей проміс виконується успішно,
// // //  то результатом виконання проміса буде те, що ця функція повертає
// // // себто, якщо ми повертаємо 5, то наступний then прийме 5 як результат виконання попереднього then
// // // себто, те, що повертає onSuccess в then - буде результатом виконання наступного проміса
// promise.then(
//     result => {
//         console.log(result);
//         return 5;
//     },
    
// ).then(x => {
//     console.log(x);
// });


// ERROR HANDLING


// const promise = new Promise((resolve, reject) => {
//     const canFulFill = Math.random() > 0.5;

//     setTimeout(() => {
//         if (canFulFill) {
//         resolve('Alles gut! Проміс виконався успішно із результатом (fulfilled)')
//         }

//         reject('Caput! Проміс виконався із помилкою (rejected)');
//     }, 1000);
// });

// // якщо проміс виконався із результатом rejected, то catch  в кінці ланцюжка then буде ловити цю помилку
// // як і всі інші помилки, які можуть виникнути на цьому ланцюжку
// // це зручніше, ніж до кожного then прописувати і fulfilled i rejected
// // тобто якщо на якомусь етапі виникає помилка, то ланцюжок переривається і результат перетається в catch
// // себто, ми в then опрацблвуємо лише успішне виконання проміса
// // а неуспішне виносимо в catch (для прикладу можна розкоментувати ерору на 2 then)

// promise
//     .then(onFulFilled)
//     .then(
//         x => {
//             console.log(x);

//             throw new Error('error in 2nd "then"')
        
//             return 10;
//         },)
//     .then(y => {
//         console.log(y);
//     })
//     .catch(error => console.log(error))
// // в блоці finally немає параметрів, тому що ми не знаємо, чи буде успішно чи не успішно виконається проміс
//     .finally(() => console.log('я буду виконаний в будь-якому випадку ха-ха-ха'))


// function onFulFilled(result) {
//     console.log(result);
// };

// function onRejected(error) {
//     console.log(error)
// };


// // PROMICIFICATION OF FUNCTION


// // FUNCTION WITHOUT PROMICES
// // на виклику makeOrder пиріжок йде в діш, саксес в саксес а ерор в ерор
// // нам би хотілось, щоби результат цієї функції ми отримували у зовнішньому коді
// // не закидувати свої функці кудись всередину
// // проблема такого коду в тому, що функція makeOrder замість того, щоби просто опрацбовувати замовлення
// // вона знає про якісь колбеки onSuccess і onError, робить якісь перевірки
// // тобто ця функція знає надто багато про те оточення, яке буде її викликати
// // це називається звязаність коду і це не дуже ок
// //  саме для цього придумали проміси, щоби позбутися колбеків

// const makeOrder = (dish, onSuccess, onError) => {
//     const DELAY = 1000;

//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//         if (passed) {
//             onSuccess(`here yours ${dish}`) 
//         } else {
//             onError(`sori nits nr vyide, ${dish} vidsutniy`)
//         }
//     }, DELAY)
// };

// makeOrder('pyrizhok', onMakeOrderSuccess, onMakeOrderError);


// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// };

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };


// // TEPER ROBYMO IZ PROMISAMY

// // тепер наша функція не знає про той код, який її викликає
// // вона тепер дає проміс, а ми тепер чіпляємось до нього через any та catch
// // 

// // variant iz zminnymy
// const makeOrder = (dish) => {
//     const DELAY = 1000;

//     const promise = new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if (passed) {
//             resolve(`here yours ${dish}`)
//             }

//             reject(`sori nits ne vyide, ${dish} vidsutniy`);

//         }, DELAY);
//     });
//     return promise
// };

// const p = makeOrder('holubtsi');
 
// p.then(onMakeOrderSuccess).catch(onMakeOrderError)

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// };

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };








// // variant bez zminnykh 
// const makeOrder = (dish) => {
//     const DELAY = 1000;

//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         setTimeout(() => {
//             if (passed) {
//             resolve(`here yours ${dish}`)
//             }

//             reject(`sori nits ne vyide, ${dish} vidsutniy`);

//         }, DELAY);
//     });
// };


// makeOrder('holubtsi').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// };

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };


// // a teper synchronnyi code, bez delay
// // себто, промісифікуємо функцію, яка буде виконуватись миттєво

// const makeOrder = (dish, onSuccess, onError) => {
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;

//         if(passed) {
//             resolve(`here yours ${dish}`);
//         }
//         reject(`sori nits ne vyide, ${dish} vidsutniy`);
//     })
// };


// makeOrder('holubtsi').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// };

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };

// використання промісів чистить наші функції, тому що вони не знають про той код, який їх викликає
// але якщо нам потрібно опрацювати лише onSuccess, то для цього є статичний метод promise.Resolve:

// const makeOrder = (dish, onSuccess) => {
//     return Promise.resolve(`here yours ${dish}`)
// };


// makeOrder('holubtsi').then(onMakeOrderSuccess)

// function onMakeOrderSuccess(result) {
//     console.log('onMakeOrderSuccess');
//     console.log(result);
// };

// function onMakeOrderError(error) {
//     console.log('onMakeOrderError');
//     console.log(error);
// };


// // ВИТЯГУЄМО ПОКЕМОНІВ ІЗ БЕКЕНДУ
// такий приклад не ок, потрібно забрати обробку результату з цієї фкнеції
// const fetchPokemonById = id => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(r => r.json())
//         .then(pokemon => {
//             console.log(pokemon);
//         })
//         .catch(error => {

//         });
// };

// fetchPokemonById(1);
// fetchPokemonById(2);
// fetchPokemonById(3);


// робимо так:
// але так теж не ок, бо фенкція знає про якісь он саксесс і он еррор
// ми хочемо, щобт фенкція повертала проміс, а ми вже до нього чіпляли колбеки
// const fetchPokemonById = (id, onSuccess, onError) => {
//     fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         .then(r => r.json())
//         .then(pokemon => {
//             onSuccess(pokemon);
//         })
//         .catch(error => {
//             onError(error);
//         });
// };

// fetchPokemonById(1, onFetchSuccess, onFetchError);
// // fetchPokemonById(2);
// // fetchPokemonById(3);


// function onFetchSuccess(pokemon) {
//     console.log(pokemon);
// };

// function onFetchError(error) {
//     console.log('this is in a "catch" block');
//     console.log(error);
// }


// // // ТОМУ РОБИМО ОТАК:
// // fetch типу повертає New promise:
// // function fetch(url) {
// //     return new Promise(...)
// // }
// const fetchPokemonById = (id) => {
//     return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
// };

// // ми опрацьовуємо результат функції в своєму коді, а не всередині фкнкції за разунок колбеків
// // результат промісу не можна отримати ніде, окрім ось цих функцій
// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);
// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// // ці функції будуть виконуватись асинхронно, колись потім
// // коли ця фенкція або ресолвнеться або реджектниться
// // а значить доступ до його результату можна отримати лише тоді, коли ці фукції буьуть викликатись
// // іншим чином дати результат промісу у зовнішній код неможливо
// function onFetchSuccess(pokemon) {
//     console.log(pokemon);
// };

// function onFetchError(error) {
//     console.log('this is in a "catch" block');
//     console.log(error);
// };

 

// // ONE MORE PROMISE

// const makePromise = () => {
//     return new Promise((resolve, reject) => {
//         const passed = Math.random() > 0.5;
//         setTimeout(() => {
//             if (passed) {
//                 resolve('hey, its resolve');
//             }

//             reject('doh, its reject');
//         }, 2000);
//     });
// };

// makePromise().then(result => console.log(result)).catch(error => console.log(error));


// // IPPODROME

// // // ЗАПУСКАЄМО ОДНОГО КОНЯ

// console.log('Race started. Bids are disabled');

// // console.log(`And winner is ${1}, finished in ${1} time`);

// // console.log('Race finished. Bids are allowed');

// function run(horse) {
//     return new Promise((resolve) => {
//         const time = getRandomTime(2000, 3500);

//         // запускаємо таймаут із рандомним часом
//         setTimeout(() => {
//             // як резолв, повертаємо об'єкт із іменем коня і його часом
//             resolve({horse, time})
//         }, time)
//     })
// };


// run('Tsok-Tsok')
//     .then(x => console.log(x))
//     .catch(e => console.log(e));

// // функція, яка отримує мінімальний час, максимальний час і повертає рандомне число між ними
// function getRandomTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };


// // ЗАПУСКАЄМО ДЕКІЛЬКА ОДНОЧАСНО І ВИВОДИМО НАЙШВИДШОГО КОНЯ

// const horses = [
//     'Tsok-Tsok',
//     'Secretariat',
//     'Eclipse',
//     'West Australian',
//     'Flying Fox',
//     'Seabisquit',
//     'Vista'
// ];

// console.log('Race started. Bids are disabled');

// // console.log(`And winner is ${1}, finished in ${1} time`);

// // console.log('Race finished. Bids are allowed');

// function run(horse) {
//     return new Promise((resolve) => {
//         const time = getRandomTime(2000, 3500);

//         // запускаємо таймаут із рандомним часом
//         setTimeout(() => {
//             // як резолв, повертаємо об'єкт із іменем коня і його часом
//             resolve({horse, time})
//         }, time)
//     })
// };

// // робимо масив промісів
// // const promises = horses.map(horse => run(horse));
// // це можна скоротити до такого:
// const promises = horses.map(run);
// // console.log(promises)

// // функція, яка отримує мінімальний час, максимальний час і повертає рандомне число між ними
// function getRandomTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };
// // метод рейс очікує перший, найшвидший проміс і дає змогу до нього зачейнитись
// Promise.race(promises).then(x=>(console.log(x)));


// // ЗАПУСКАЄМО ДЕКІЛЬКА ОДНОЧАСНО І ВИВОДИМО НАЙШВИДШОГО КОНЯ З ДЕСТРУКТУРИЗАЦІЄЮ

// const horses = [
//     'Tsok-Tsok',
//     'Secretariat',
//     'Eclipse',
//     'West Australian',
//     'Flying Fox',
//     'Seabisquit',
//     'Vista'
// ];

// console.log('Race started. Bids are disabled');

// function run(horse) {
//     return new Promise((resolve) => {
//         const time = getRandomTime(2000, 3500);

//         setTimeout(() => {
//             resolve({horse, time})
//         }, time)
//     })
// };

// const promises = horses.map(run);

// function getRandomTime(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// Promise.race(promises).then(({ horse, time }) => {
//     console.log(`And winner is ${horse}, finished in ${time} seconds`)
// });


// ЗАПУСКАЄМО ДЕКІЛЬКА ОДНОЧАСНО І ВИВОДИМО ВСІХ КОНЕЙ

const horses = [
    'Tsok-Tsok',
    'Secretariat',
    'Eclipse',
    'West Australian',
    'Flying Fox',
    'Seabisquit',
    'Vista'
];

function run(horse) {
    return new Promise((resolve) => {
        const time = getRandomTime(2000, 3500);

        setTimeout(() => {
            resolve({horse, time})
        }, time)
    })
};

console.log(`%c Race started. Bids are disabled`, 'color: red; font-size: 11px;');

const promises = horses.map(run);

function getRandomTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

Promise.race(promises).then(({ horse, time }) => {
    console.log(`%c And winner is ${horse}, finished in ${time} seconds`, 'color: green; font-size: 11px;')
});

// // виводимо об'єкт із усіма промісами
// Promise.all(promises).then(x => { console.log(x) });
// // або виводимо в консоль повідомлення
// // проміс олл чекає, поки виконаються всі проміси і тоді дає результат виконання всіх промісів
Promise.all(promises).then(() => {
    console.log(`%c Race finished. Bids are allowed`, 'color: blue; font-size: 11px;')
});
