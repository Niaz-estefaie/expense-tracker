const { addExpense, getExpenses, deleteExpense } = require('../controlles/expense');
const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');

const router = require('express').Router();

router.post('/income', addIncome)
    .get('/incomes', getIncomes)
    .delete('/income/:id', deleteIncome)
    .post('expense', addExpense)
    .get('expenses', getExpenses)
    .delete('expense/:id', deleteExpense)

module.exports = router;
