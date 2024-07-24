const mongoose = require('mongoose')
const url = process.env.MONGO_URL


const connection = async () => {
    if (!url) {
        throw new Error("Mongo Db Url is Not Defind ");
    }

    try {
        await mongoose.connect(url);
            
        console.log("DataBase connections is SuccessFull")
    }
    catch (error) {
        console.error("Could not connect to MongoDb")
    }
};

const DisConnection = async () => {
    try {
        await mongoose.disconnect();
        console.log("Disconnected SucessFully")

    } catch (error) {
        console.error("Error Disconnecting from Mongo DB", error)
        throw new Error("Could not Disconnect from Mongo Db. ");

    }
};

module.exports = connection