//3 Задача
// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

 //const ADMIN_PASSWORD = 'jqueryismyjam';
//  let message;

//   const password = prompt('Введите пароль');
//   if (password === null) {
    //  console.log(message = 'Отменено пользователем!');
//   }
//  else if (password === ADMIN_PASSWORD) {
    //  console.log(message = 'Добро пожаловать!');
//   }
//  else if (password !== ADMIN_PASSWORD) {
    //   console.log(message = 'Доступ запрещен, неверный пароль!');
//  }
//   alert(message);

// Задача 1 - 3
// Использование if else
//     Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
// Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword(данные, которые может передать пользователь).Возможны такие варианты:

// const ADMIN_PASSWORD = 'jqueryismyjam'.При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
// null.При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
// Любая строка, кроме ADMIN_PASSWORD.При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
// Используйте if else if else для написания скрипта.

// const userPassword = 'jqueryismyjam';

// const ADMIN_PASSWORD = 'jqueryismyjam';

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
// const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
// let message;

// Write code under this line
//if (ADMIN_PASSWORD === userPassword) {
  //  message = ACCESS_IS_ALLOWED;
  //} else if (userPassword === null) {
  //  message = CANCELED_BY_USER;
  //} else if ( ADMIN_PASSWORD !== userPassword) {
   // message = ACCESS_DENIED;
  //}
 //console.log(message);
 //alert(message);
 