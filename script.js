"use strict";

let money = prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let expensesQuestion1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let expensesQuestion2 = prompt('Во сколько обойдется?', '');
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
}

appData.expenses.expensesQuestion1 = expensesQuestion2;

alert('Ваш бюджет на 1 день: ' + appData.budget / 30);