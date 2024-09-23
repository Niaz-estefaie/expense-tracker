const { addExpense, getExpenses, deleteExpense } = require('../controlles/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');

const router = require('express').Router();

router.post('/incomes', addIncome)
    .get('/incomes', getIncomes)
    .delete('/incomes/:id', deleteIncome)
    .post('/expenses', addExpense)
    .get('/expenses', getExpenses)
    .delete('/expenses/:id', deleteExpense);

module.exports = router;
