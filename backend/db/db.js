const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('db Connected');
    } catch (error) {
        console.log('db Connection Error');
    }
}

module.exports = { db };