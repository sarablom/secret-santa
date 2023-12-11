import mongoose from "mongoose";

const { Schema } = mongoose;

export interface User {
	name: string;
	email: string;
	password: string;
	imgUrl?: string | null;
	status?: string;
	displayIcon?: boolean;
	displaySantaHat?: boolean;
}

const userSchema = new Schema<User>({
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		unique: false,
		required: true,
	},
	name: {
		type: String,
		unique: false,
		required: true,
	},
	imgUrl: {
		type: String,
		unique: false,
		required: false,
		default: null,
	},
	status: {
		type: String,
		unique: false,
		required: false,
		default: "",
	},
	displayIcon: {
		type: Boolean,
		unique: false,
		required: false,
	},
	displaySantaHat: {
		type: Boolean,
		unique: false,
		required: false,
	},
});

export default mongoose.models.User || mongoose.model<User>("User", userSchema);
