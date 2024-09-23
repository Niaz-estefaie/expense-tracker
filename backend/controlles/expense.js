const { getMessage } = require('../helpers/error-messages');
const ExpenseSchema = require('../models/expense.model')

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        if (!title || !category || !description || !date) {
            return res.status(400).json(getMessage(400))
        }

        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json(getMessage(400))
        }
        await expense.save();
        res.status(200).json(getMessage(200))
    } catch (error) {
        res.status(500).json(getMessage(500))
    }
}

exports.getExpenses = async (req, res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
        res.status(200).json(expenses)
    } catch (error) {
        console.log(error);
        
        res.status(500).json(getMessage(500))
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    ExpenseSchema.findByIdAndDelete(id).then((expense) => {
        res.status(200).json(expense)
    }).catch((error) => {
        res.status(500).json(getMessage(500))
    })
}