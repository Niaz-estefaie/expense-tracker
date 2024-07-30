const { addIncome, getIncomes, deleteIncome } = require('../controlles/income');

const router = require('express').Router();

router.post('/income', addIncome)
.get('/incomes', getIncomes)
.delete('/income/:id', deleteIncome);

module.exports = router;
