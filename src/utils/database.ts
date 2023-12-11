import mongoose from "mongoose";

const dbConnect = async () => {
	if (mongoose.connections[0].readyState) return;

	try {
		await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Database connected");
    
	} catch (error) {
		throw new Error("Error connecting to database");
	}
};

export default dbConnect;
