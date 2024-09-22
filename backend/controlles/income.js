const { getMessage } = require('../helpers/error-messages');
const IncomeSchema = require('../models/income.model')

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    const income = IncomeSchema({
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
        await income.save();
        res.status(200).json(getMessage(200))
    } catch (error) {
        res.status(500).json(getMessage(500))
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 });
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json(getMessage(500))
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    IncomeSchema.findByIdAndDelete(id).then((income) => {
        res.status(200).json(income)
    }).catch((error) => {
        res.status(500).json(getMessage(500))
    })
}