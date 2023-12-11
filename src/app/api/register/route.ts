import { NextApiResponse } from "next";
import User from "../../../models/User";
import dbConnect from "../../../utils/database";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
	const user = await req.json();
	// const { method } = req;

	await dbConnect();

	try {
		const existingUser = await User.findOne({ email: user.email });

		if (existingUser) {
			return new NextResponse("Email is already in use", { status: 400 });
		}

		const hashedPaswword = await bcrypt.hash(user.password, 5);
		const newUser = {
			...user,
			password: hashedPaswword,
		};

		await User.create(newUser);
		return new NextResponse("User is created", { status: 200 })
	} catch (error: any) {
		return new NextResponse(error, { status: 500 })
	}
};
