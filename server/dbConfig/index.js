import mongoose from "mongoose";

const dbConnection = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log("db connected");
    } catch (error) {
        console.log("db Error: "+error);
    }
}

export default dbConnection;