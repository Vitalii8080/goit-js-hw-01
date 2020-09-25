// Задание 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.
//Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.
//Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// let country = prompt('Введите страну доставки товара');
// let price = 0;
// ///country = 'КитаЙ';
// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В вашей стране доставка не доступна';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;

// if (country === null) {
//   console.log((message = CANCELED_BY_USER));
// } else {
//   country = country[0].toUpperCase() + country.slice(1).toLowerCase();
//   switch (country) {
//     case CHINA:
//       price = 100;
//       break;

//     case AUSTRALIA:
//       price = 170;
//       break;

//     case INDIA:
//       price = 80;
//       break;

//     case JAMAICA:
//       price = 120;
//       break;

//     default:
//       alert(NO_DELIVERY);
//   }
// }

// if (price > 0) {
//   console.log(
//     (message = `Доставка в ${country} будет стоить ${price} кредитов`),
//   );
// }

// Задача 1 - 5
// Использование switch, if и методов slice, toUpperCase, toLowerCase
// Напиши скрипт имитирующий оформление заказа в избранную страну.

// Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName.Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква(свойство[0]) была заглавной(метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

// Переменная message будет выводить сообщение.В эту переменную надо будет записать одно из трех сообщений о результате:

// const CANCELED_BY_USER = 'Отменено пользователем!'
// Доставка в ${ } будет стоить ${ } кредитов
// const NO_DELIVERY = 'В выбранную страну доставка не доступна.
// Для определения стоимости(переменная price) или записи сообщения о невозможности доставки используй switch.

// В случае, если доставка возможна(цена больше 0), сформируй сообщение о стоимости доставки в указанную страну с помощью if.

// Ниже приведен список стран и стоимость доставки.

//     Китай - 100 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

// const countryName = "КитаЙ";

// const CANCELED_BY_USER = 'Отменено пользователем!';
// const NO_DELIVERY = 'В выбранную страну доставка недоступна.';
// const CHINA = 'Китай';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const JAMAICA = 'Ямайка';
// let message;
// let price = 0;
// let country;
// if (countryName === null) {
//     message = CANCELED_BY_USER;
// } else {
//     country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line
//     switch (country) {
//         // Write code under this line
//         case CHINA:
//             price = 100;
//             break;

//         case AUSTRALIA:
//             price = 170;
//             break;

//         case INDIA:
//             price = 80;
//             break;

//         case JAMAICA:
//             price = 120;
//             break;

//         default:
//             message = NO_DELIVERY;
//     }
// }
// if (price > 0) { // Write code on this line
//     message = `Доставка в ${country} будет стоить ${price} кредитов`;
// }

// console.log(message);

//если countryName равно "КитаЙ"
// то значение message будет равно
// 'Доставка в Китай будет стоить 100 кредитов'

//если countryName равно null
// то значение message будет равно
// 'Отменено пользователем!'

//если countryName равно "Чили"
// то значение message будет равно
// 'В выбранную страну доставка недоступна.'