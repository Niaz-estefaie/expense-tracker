const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('db Connected');
    } catch (error) {
        console.error('db Connection Error: ', error.message);
    }
};


module.exports = { db };