import { StaticImageData } from "next/image";
import { allImages } from "../components/Avatar";

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	imgUrl: StaticImageData | null;
	status: "occupied" | "unknown" | "available" | "";
	displayIcon: boolean;
	displaySantaHat: boolean;
	email: string;
};

export const users: User[] = [
	{
		id: "gdaggavvv",
		firstName: "Wade",
		lastName: "Warren",
		email: "wade.warren@example.com",
		imgUrl: allImages.avatar03,
		status: "available",
		displayIcon: true,
		displaySantaHat: true,
	},
	{
		id: "pgdgmgad",
		firstName: "Marvin",
		lastName: "McKinney",
		email: "marvin.mckinney@example.com",
		imgUrl: allImages.avatar02,
		status: "occupied",
		displayIcon: true,
		displaySantaHat: false,
	},
	{
		id: "pgägbbadvv",
		firstName: "Jenny",
		lastName: "Wilson",
		email: "jenny.wilson@example.com",
		imgUrl: null,
		status: "unknown",
		displayIcon: false,
		displaySantaHat: true,
	},
	{
		id: "pgägbbadvv",
		firstName: "Bessie",
		lastName: "Cooper",
		email: "bessie.cooper@example.com",
		imgUrl: allImages.avatar01,
		status: "",
		displayIcon: false,
		displaySantaHat: true,
	},
];
