//2 Задача

// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 20;
// let message;
// if (ordered > total) {
//   message = 'На складе недостаточно товаров!';
// } else {
//   message = 'Заказ оформлен, с вами свяжется менеджер.';
// }

// console.log(message);

// Задача 1 - 2
// Использование тернарного оператора
// Напиши скрипт присвоения переменной message одной из двух строк в зависимости от количества товаров на складе с помощью тернарного оператора.

// Есть переменные

// stock = 100. Это количество товаров на складе.
//     invoice.Эта переменная - количество единиц товара в заказе.Переменной присваиваются только целые положительные числа(проверку на целые положительные числа делать не нужно).Рекомендуем рассмотреть поведение скрипта при трех значениях - 50 т.е.меньше чем stock, 100, т.е.равно stock и 150 - больше чем stock.
//         message.Это переменная для текста с ответом на запрос о покупке.Возможно два значения:
// "На складе недостаточно товаров!" если в заказе указано число, превышающее количество товаров на складе.
// "Заказ оформлен, с вами свяжется менеджер" в оставшихся случаях.

// const invoice = 50;
// const stock = 100;
// let message;

// if (invoice > stock) {
//   message = 'На складе недостаточно товаров!';
// } else {
//   message = 'Заказ оформлен, с вами свяжется менеджер';
// }

// console.log(message);