const mongoose = require('mongoose');

async function startDB() {
    await mongoose.connect('mongodb+srv://paulo@fatecnodejs.soy0uxy.mongodb.net/test');
}

module.exports = startDB;